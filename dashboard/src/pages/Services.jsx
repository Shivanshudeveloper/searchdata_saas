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
  DialogContentText,
  TableRow,
  Table,
  TableCell
} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import EmailEditor from 'react-email-editor'
import PropTypes from 'prop-types';
import { fetchCalls, fetchEmailContacts, fetchTasks } from "src/redux/index";
import { connect } from "react-redux";
import {addEmailContacts} from "../redux/index"
import { fetchSavedUsers } from "src/redux/fetchSavedUsers/fetchSavedUsersActions";
import {addCall} from "../redux/index";
import { addTask } from "src/redux/addTask/addTaskActions";

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

const Services = ({userTasks, addTaskProcess, fetchTasksProcess, userCalls, fetchCallsProcess, addCallProcess,addCallRef,fetchSavedUsersProcess,savedUsers,userContactsEmail, userEmailContactsFetch,addUserEmailContact}) => {

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
  const [openAddCall,setOpenAddCall] = useState(false);
  const [openAddTask,setOpenAddTask] = useState(false);

  const [callContactName, setCallContactName] = useState("")
  const [callDate, setCallDate] = useState("2021-05-24")
  const [callTime, setCallTime] = useState("07:30")
  const [callDesc,setCallDesc] = useState("")
  const [taskContactName, setTaskContactName] = useState("")
  const [taskDate, setTaskDate] = useState("2021-05-24")
  const [taskTime, setTaskTime] = useState("07:30")
  const [taskDesc,setTaskDesc] = useState("")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    userEmailContactsFetch("12345")
    fetchSavedUsersProcess()
    fetchCallsProcess("12345")
    fetchTasksProcess("12345")
  },[])


  return (
    <>
   {console.log("CALLS",userCalls.calls)}
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
              <Button onClick={()=>setOpenEmailAdd(true)} variant="contained" style={{margin:"10px"}}>Add Contact</Button>
              </div>

              <EmailEditor style={{marginTop:"40px", height:"60vh"}} ref={emailEditorRef} onLoad={onLoad} />
          
          </TabPanel>


          <TabPanel value={value} index={1}>

          <Dialog open={openAddCall}>
                  <DialogTitle>
                    Add Call
                  </DialogTitle>

                  <DialogContent>
                  
                
                  

                <Autocomplete options={savedUsers.users}
              getOptionLabel={(opt)=>(opt.first_name+" "+opt.last_name)}
              style={{width:"400px", margin:"20px"}}
              renderInput={(param)=>{
                return (<TextField  {...param} label="Contact name" variant="outlined"/>)
              }}
              onChange={(e,opt)=>setCallContactName(opt.first_name+" "+opt.last_name)}
              >

              </Autocomplete>

              <div style={{display:"flex", width:"100%", justifyContent:"space-around"}}>
              <TextField style={{margin:"20px"}}
                id="date"
                label="Date"
                type="date"
                defaultValue="2021-05-24"
                onChange={(e)=>{setCallDate(e.target.value)}}
                InputLabelProps={{
                  shrink: true,
                }}
              />

                <TextField style={{margin:"20px"}}
                    id="time"
                    label="Time"
                    type="time"
                    defaultValue="07:30"
                    onChange={(e)=>setCallTime(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />

              </div>

              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                style={{width:"400px", margin:"20px"}}
                defaultValue=""
                onChange={(e)=>setCallDesc(e.target.value)}
              />


                  </DialogContent>

                  <DialogActions>
                    <Button type="text" onClick={()=>setOpenAddCall(false)}>Close</Button>
                    <Button type="text" onClick={()=>{addCallProcess("12345",{receipent:callContactName, date: callDate, time: callTime, description: callDesc});setOpenAddCall(false); fetchCallsProcess("12345");}}>Add</Button>
                  </DialogActions>
                </Dialog>

            <Container maxWidth={true} fullWidth style={{width:"100%"}}>
              <div style={{display:"flex", alignContent:"flex-end", width:"100%", alignItems:"flex-end", justifyContent:"flex-end"}}>
              <Button variant="contained" onClick={()=>setOpenAddCall(true)}>ADD CALL</Button>
              </div>
              <Table fullWidth style={{width:"100%"}}>
                <TableRow style={{width:"100%"}}>
                  <TableCell><h3>TO</h3></TableCell>
                <TableCell><h3>Date</h3></TableCell>
                <TableCell><h3>Time</h3></TableCell>
                <TableCell><h3>Description</h3></TableCell>
                </TableRow>

                {userCalls.calls.length>0?(<>
                {
                  userCalls.calls.map((call)=>{
                    return (
                      <TableRow>
                        <TableCell>{call.receipent}</TableCell>
                        <TableCell>{call.date}</TableCell>
                        <TableCell>{call.time}</TableCell>
                        <TableCell sx={{width:"20%"}}>{call.description}</TableCell>
                      </TableRow>
                    )
                  })
                }
                </>):(null)}
              </Table>


            </Container>
          </TabPanel>

          <TabPanel value={value} index={2}>
          <Dialog open={openAddTask}>
                  <DialogTitle>
                    Add Task
                  </DialogTitle>

                  <DialogContent>
                  
                
                  

                <Autocomplete options={savedUsers.users}
              getOptionLabel={(opt)=>(opt.first_name+" "+opt.last_name)}
              style={{width:"400px", margin:"20px"}}
              renderInput={(param)=>{
                return (<TextField  {...param} label="Assigned to" variant="outlined"/>)
              }}
              onChange={(e,opt)=>setTaskContactName(opt.first_name+" "+opt.last_name)}
              >

              </Autocomplete>

              <div style={{display:"flex", width:"100%", justifyContent:"space-around"}}>
              <TextField style={{margin:"20px"}}
                id="date"
                label="Date"
                type="date"
                defaultValue="2021-05-24"
                onChange={(e)=>{setTaskDate(e.target.value)}}
                InputLabelProps={{
                  shrink: true,
                }}
              />

                <TextField style={{margin:"20px"}}
                    id="time"
                    label="Time"
                    type="time"
                    defaultValue="07:30"
                    onChange={(e)=>setTaskTime(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />

              </div>

              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                style={{width:"400px", margin:"20px"}}
                defaultValue=""
                onChange={(e)=>setTaskDesc(e.target.value)}
              />


                  </DialogContent>

                  <DialogActions>
                    <Button type="text" onClick={()=>setOpenAddTask(false)}>Close</Button>
                    <Button type="text" onClick={()=>{addTaskProcess("12345",{receipent:taskContactName, date: taskDate, time:taskTime, description: taskDesc});setOpenAddTask(false); fetchTasksProcess("12345");}}>Add</Button>
                  </DialogActions>
                </Dialog>

            <Container maxWidth={true} fullWidth style={{width:"100%"}}>
              <div style={{display:"flex", alignContent:"flex-end", width:"100%", alignItems:"flex-end", justifyContent:"flex-end"}}>
              <Button variant="contained" onClick={()=>setOpenAddTask(true)}>ADD TASK</Button>
              </div>
              <Table fullWidth style={{width:"100%"}}>
                <TableRow style={{width:"100%"}}>
                  <TableCell><h3>Assigned to</h3></TableCell>
                <TableCell><h3>Date</h3></TableCell>
                <TableCell><h3>Time</h3></TableCell>
                <TableCell><h3>Description</h3></TableCell>
                </TableRow>

                {userTasks.tasks.length>0?(<>
                {
                  userTasks.tasks.map((task)=>{
                    return (
                      <TableRow>
                        <TableCell>{task.receipent}</TableCell>
                        <TableCell>{task.date}</TableCell>
                        <TableCell>{task.time}</TableCell>
                        <TableCell sx={{width:"20%"}}>{task.description}</TableCell>
                      </TableRow>
                    )
                  })
                }
                </>):(<>No tasks...</>)}
              </Table>


            </Container>
          </TabPanel>
          
          
        </Container>
      </Box>
    </>
  );
};

const mapStateToProps=(state)=>{
  return {
    userContactsEmail: state.userContactsEmail,
    savedUsers: state.savedUsers,
    addCallRef: state.addCallRef,
    userCalls: state.fetchCallsList,
    addTaskRef: state.addTaskRef,
    userTasks: state.fetchTasksList
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    userEmailContactsFetch:(user_id)=>dispatch(fetchEmailContacts(user_id)),
    addUserEmailContact:(user_id,email_to_add)=> dispatch(addEmailContacts(user_id,email_to_add)),
    fetchSavedUsersProcess:()=>dispatch(fetchSavedUsers()),
    addCallProcess:(user_id,callInfo)=>dispatch(addCall(user_id,callInfo)),
    fetchCallsProcess:(user_id)=>dispatch(fetchCalls(user_id)),
    addTaskProcess: (user_id,taskInfo)=>dispatch(addTask(user_id,taskInfo)),
    fetchTasksProcess:(user_id)=>dispatch(fetchTasks(user_id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Services);
