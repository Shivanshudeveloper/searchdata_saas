import React, { useState,useRef, useEffect } from "react";

import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Typography,
  Button,
  Autocomplete,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText
} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import EmailEditor from 'react-email-editor'
import PropTypes from 'prop-types';
import { fetchEmailContacts } from "src/redux/index";
import { connect } from "react-redux";
import {addEmailContacts} from "../redux/index"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Services = ({userContactsEmail, userEmailContactsFetch,addUserEmailContact}) => {

  const emailEditorRef = useRef(null);

  const onDesignLoad = (data) => {
    console.log('onDesignLoad', data);
  };

  const onLoad = () => {
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  


  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [openEmailAdd, setOpenEmailAdd] = useState(false);
  const [emailToAdd,setEmailToAdd] = useState("")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    userEmailContactsFetch("12345")
  },[])


  return (
    <>
   {console.log(userContactsEmail.emailContacts)}
      <Helmet>
        <title>Customers | Client Portal</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          padding: "30px",
        }}
      >
        <Container maxWidth={false}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" sx={{ my: "20px" }}>
              Campagins
            </Typography>

            <div>
              <Button onClick={()=>setOpenEmailAdd(true)} variant="contained">Add Contact</Button>
            </div>
            <Dialog open={openEmailAdd}>
              <DialogTitle>
                  Add Email
              </DialogTitle>

              <DialogContent>
                <DialogContentText>Add your email contact</DialogContentText>
                <TextField style={{width:"400px"}} onChange={(e)=>setEmailToAdd(e.target.value)} id="standard-basic" label="Email" variant="standard" />
              </DialogContent>

              <DialogActions>
              <Button type="text" onClick={()=>setOpenEmailAdd(false)}>Cancel</Button>
                <Button variant="contained" onClick={()=>{addUserEmailContact("12345",emailToAdd); setEmailToAdd(""); setOpenEmailAdd(false)}}>ADD</Button>
                
              </DialogActions>
            </Dialog>
          </div>

          <AppBar
            position="static"
            style={{ background: "transparent", boxShadow: "none" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Emails" {...a11yProps(0)} />
              <Tab label="Calls" {...a11yProps(1)} />
              <Tab label="Tasks" {...a11yProps(2)} />
              <Tab label="Templates" {...a11yProps(3)} />
              <Tab label="Analytics" {...a11yProps(4)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} style={{display:"flex", flexDirection:"column"}} >
            <div style={{display:"flex", justifyContent:"center", flex:"0.2"}}>
              <Autocomplete options={userContactsEmail.emailContacts}
              getOptionLabel={(opt)=>opt}
              style={{width:"50%"}}
              renderInput={(param)=>{
                return (<TextField {...param} label="Search E-mail" variant="outlined"/>)
              }}
              >

              </Autocomplete>
              </div>

              <EmailEditor style={{marginTop:"40px", height:"60vh"}} ref={emailEditorRef} onLoad={onLoad} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            
          </TabPanel>
          <TabPanel value={value} index={2}>
            
          </TabPanel>
          <TabPanel value={value} index={3}>
            
          </TabPanel>
          <TabPanel value={value} index={4}>
            
          </TabPanel>
          
        </Container>
      </Box>
    </>
  );
};

const mapStateToProps=(state)=>{
  return {
    userContactsEmail: state.userContactsEmail
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    userEmailContactsFetch:(user_id)=>dispatch(fetchEmailContacts(user_id)),
    addUserEmailContact:(user_id,email_to_add)=> dispatch(addEmailContacts(user_id,email_to_add))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Services);
