import { useEffect, useState } from 'react';
import React from 'react'
import {useNavigate} from "react-router-dom"
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Snackbar,
  IconButton,

} from '@material-ui/core';
import { auth } from 'src/firebase';
import firebase from 'src/firebase';

import {connect} from "react-redux";

import {fetchEmailSettings} from "src/redux/fetchEmailSettings/fetchEmailSettingsActions"
import {setEmailSettings} from "src/redux/index"

import CloseIcon from "@material-ui/icons/Close"

const SettingsEmail = (props) => {
  const [values, setValues] = useState({
    oldpassword: '',
    newpassword:'',
    confirm: '',
    host: '',
    port: '',
    secure: false,
    username: '',
    password: ''
  });
  const [openSnack, setOpenSnack] = useState(false)
  const [changePassError,setChangePassError]=useState("")
  const [secure,setSecure]=useState(false)

  const user = auth.currentUser
  const nav = useNavigate()

  useEffect(()=>{
    props.fetchUserEmailSettings(sessionStorage.getItem("userId"))
  },[])
  
  const handleChangePass=()=>{
    const credential = firebase.auth.EmailAuthProvider.credential(user.email,values.oldpassword)
    user.reauthenticateWithCredential(credential).then(()=>{
      user.updatePassword(values.confirm).then(()=>{
        setChangePassError("none");
        setValues({oldpassword:'', newpassword:'',confirm:''})
        console.log("changed")
      }).catch((err)=>{ setChangePassError(err.message); console.log(err.message)})
    }).catch((err)=>{setChangePassError(err.message); console.log("ERROR: ",err.message)})

  }



  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  

  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="Update your e-mail provider settings"
          title="Email Settings"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Host"
            margin="normal"
            name="host"
            onChange={handleChange}
          
            value={values.host || props.userEmailSettings.email_provider_settings.host || ""}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Port"
            margin="normal"
            name="port"
            onChange={handleChange}
            
            value={values.port || props.userEmailSettings.email_provider_settings.port || ""}
            variant="outlined"
          />

          <FormControl component="fieldset" style={{margin:"10px"}}>
            <FormLabel component="legend">Do you want to secure using TLS?</FormLabel>
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue={props.userEmailSettings.email_provider_settings.secure} value={values.secure} >
              <FormControlLabel onClick={()=>{setValues({...values, secure:true}); setSecure(true)}} value={true} control={<Radio />} label="YES" />
              <FormControlLabel onClick={()=>{setValues({...values,secure:false}); setSecure(true)}} value={false} control={<Radio />} label="NO" />
            </RadioGroup>
          </FormControl>

          <TextField
            fullWidth
            label="Username"
            margin="normal"
            name="username"
            onChange={handleChange}
            
            value={values.username || props.userEmailSettings.email_provider_settings.username || ""}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password || props.userEmailSettings.email_provider_settings.password || ""}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2
          }}
        >

          <Snackbar anchorOrigin={{vertical:"bottom", horizontal:"left"}}
            open={((props.setEmailRef.refNo) || (props.setEmailRef.error))&&openSnack}
            autoHideDuration={2000}
            onClose={(event,reason)=>{ return reason=="clickaway"?(null):setOpenSnack(false)}}
            message={props.setEmailRef.error || "SAVED"}
            action={<React.Fragment>
              <IconButton onClick={()=>setOpenSnack(false)}><CloseIcon color="white"/></IconButton>
              </React.Fragment>}
            />
          <Button
            color="primary"
            variant="contained"
            onClick={()=>{setOpenSnack(true);props.setUserEmailSettings(sessionStorage.getItem("userId"),{host:(values.host || props.userEmailSettings.email_provider_settings.host), port:(values.port ||props.userEmailSettings.email_provider_settings.port),secure: (secure? values.secure: props.userEmailSettings.email_provider_settings.secure),username: (values.username||props.userEmailSettings.email_provider_settings.username), password: (values.password||props.userEmailSettings.email_provider_settings.password)}); }}
          >
            Update
          </Button>

           {console.log("ERROR",(props.setEmailRef.error))}
          {console.log("It is a ",(props.setEmailRef.refNo))}
          {console.log("secure: ",props.userEmailSettings.email_provider_settings.secure)} 
        </Box>
        
      </Card>
    </form>
  );
};

const mapStateToProps=(state)=>{
  return {
    userEmailSettings: state.fetchEmailSettings,
    setEmailRef: state.setEmailSettingsRef
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    fetchUserEmailSettings:(user_id)=>dispatch(fetchEmailSettings(user_id)),
    setUserEmailSettings:(user_id, email_settings)=>dispatch(setEmailSettings(user_id,email_settings))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingsEmail);
