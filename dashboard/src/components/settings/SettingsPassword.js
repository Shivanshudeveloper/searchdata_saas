import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography
} from '@material-ui/core';
import { auth } from 'src/firebase';
import firebase from 'src/firebase';

const SettingsPassword = (props) => {
  const [values, setValues] = useState({
    oldpassword: '',
    newpassword:'',
    confirm: ''
  });
  const [changePassError,setChangePassError]=useState("")

  const user = auth.currentUser
  const nav = useNavigate()
  
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
          subheader="Update password"
          title="Password"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Current Password"
            margin="normal"
            name="oldpassword"
            onChange={handleChange}
            type="password"
            value={values.oldpassword}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="New password"
            margin="normal"
            name="newpassword"
            onChange={handleChange}
            type="password"
            value={values.newpassword}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm password"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
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
          {changePassError=="none"?(<Typography variant="h4" sx={{}}>Successfully updated password!</Typography>):(<Typography variant="h4" sx={{}}>{changePassError}</Typography>)}
          <Button
            color="primary"
            variant="contained"
            onClick={()=>{handleChangePass()}}
          >
            Update
          </Button>
          
        </Box>
        
      </Card>
    </form>
  );
};

export default SettingsPassword;
