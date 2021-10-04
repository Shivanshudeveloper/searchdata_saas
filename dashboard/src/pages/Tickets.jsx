import React, { useEffect, useState } from "react";

import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Typography,
  TableCell,
  Table,
  LinearProgress,
  IconButton,
  TableRow,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Snackbar
} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import CSVReader from 'react-csv-reader'
import { FileDrop } from 'react-file-drop'
import {connect} from "react-redux";
import {fetchEnrichCSV} from "src/redux/fetchEnrichCSV/fetchEnrichCSVActions"
import {addEnrichCSV} from "src/redux/addEnrichCSV/addEnrichCSVActions"

import {auth} from "../firebase/index"
import CloseIcon from "@material-ui/icons/Close";



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

const Tickets = ({addUserEnrichCSV,addEnrichCSVRef, userEnrichCSV, fetchUserEnrichCSV}) => {
  const [csvdata, setcsvdata] = useState([])
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [openCSV,setOpenCSV] = useState(false)
  const [currUserId,setCurrUserId] = useState(false)
  const [enrichedCSV, setEnrichedCSV] = useState([])
  const [openSnack, setOpenSnack] = useState(false)

  const user = auth.currentUser

  useEffect(()=>{
    
     setCurrUserId(sessionStorage.userId); fetchUserEnrichCSV(sessionStorage.userId); setEnrichedCSV(userEnrichCSV.enrich_csv)
  },[])

  const handleDelete=(index)=>{
    userEnrichCSV.enrich_csv.slice(index,1);
  }

  const samplecsvString = [
    [
      "First Name",
	
     "Last Name",
        
      "Company",
        
      "Designation",
        
      "Email",
        
     "LinkedIn Username",
        
      "Country"
    ],
  ].map(e => e.join(",")) 
  .join("\n");

  let samplecsvContent = "data:text/csv;charset=utf-8," 
    + samplecsvString;

  var sampleencodedUri = encodeURI(samplecsvContent);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
    
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
              Enrich
            </Typography>
            <Button size="medium" sx={{backgroundColor:"green"}} variant="contained" onClick={()=>{setOpenCSV(true)}}>IMPORT DATA</Button>
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
              <Tab label="Overview" {...a11yProps(0)} />
              <Tab label="CSV Enrichment" {...a11yProps(1)} />
              <Tab label="API Enrichment" {...a11yProps(2)} />
              <Tab label="CRM Enrichment" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            
          
        
       
              <Table>
                <TableRow>
                  <TableCell><h3>First Name</h3></TableCell>
                  <TableCell><h3>Last Name</h3></TableCell>
                  <TableCell><h3>Company</h3></TableCell>
                  <TableCell><h3>Designation</h3></TableCell>
                  
                  
                  <TableCell><h3>Email</h3></TableCell>
                  <TableCell><h3>Phone</h3></TableCell>
                  <TableCell><h3>LinkedIn Username</h3></TableCell>
                  <TableCell><h3>Country</h3></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>

               {userEnrichCSV && userEnrichCSV.enrich_csv &&  userEnrichCSV.enrich_csv.length>0?(
                 <>
                {
                  userEnrichCSV.enrich_csv.map((el,index)=>{
                        // {console.log(el)}
                    return <>{el.enrich_csv.slice(1).map((elem)=>{
                      return (
                      <TableRow>
                        <TableCell>{ elem[0] || "N/A" }</TableCell>
                        <TableCell>{ elem[1] || "N/A" }</TableCell>
                        <TableCell>{elem[12] || "N/A" }</TableCell>
                        <TableCell>{ elem[11] || "N/A" }</TableCell>

                        <TableCell> { elem[2] || "N/A" } </TableCell>
                        <TableCell> { elem[9] || "N/A" } </TableCell>
                        <TableCell>{ elem[5] || "N/A" }</TableCell>
                        <TableCell>{ elem[15] || "N/A" }</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      )
                    })}</>

                  })
                }
                 </>
               ):(null)}

                  
            
                
              </Table>

              <Dialog open={openCSV}>

                <DialogContent>
                  <div style={{width:"100%", display:"flex", justifyContent:"center", marginBottom:"20px"}}>
                  <Button variant = "contained"  onClick={()=>window.open(sampleencodedUri)}> Download Sample CSV </Button>
                  </div>

                <CSVReader onFileLoaded={(data, fileInfo) => setcsvdata(data)} />
                 <div style={{display:"flex", justifyContent:"center",marginTop:"20px" }}> 
                 <Button variant="contained" onClick={()=>{addUserEnrichCSV(user.uid,{enrich_csv: csvdata}); setInterval(()=>{window.location.reload(false)},3000)}}>Upload</Button> 
                 
                 </div>
                 {addEnrichCSVRef.refNo?(<div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}><Typography variant="h6">{addEnrichCSVRef.refNo}</Typography></div>):(null)}
                </DialogContent>

                <DialogActions>
                    <Button type="text" onClick={()=>setOpenCSV(false)}>Close</Button>
                </DialogActions>

              </Dialog>

              <Snackbar anchorOrigin={{vertical:"bottom", horizontal:"left"}}
            open={((addEnrichCSVRef.refNo ) || (addEnrichCSVRef.error)) && openSnack}
            autoHideDuration={1000}
            onClose={(event,reason)=>{ return reason=="clickaway"?(null):setOpenSnack(false)}}
            message={addEnrichCSVRef.error || "SAVED"}
            action={<React.Fragment>
              <IconButton onClick={()=>setOpenSnack(false)}><CloseIcon style={{backgroundColor:"black"}}/></IconButton>
              </React.Fragment>}
            />

          </TabPanel>


          <TabPanel value={value} index={1}>
            
          </TabPanel>

          <TabPanel value={value} index={2}>
            
          </TabPanel>

          <TabPanel value={value} index={3}>
            
          </TabPanel>


        </Container>
      </Box>
    </>
  );
};

const mapStateToProps=(state)=>{
  return {
    userEnrichCSV: state.fetchEnrichCSV,
    addEnrichCSVRef: state.addEnrichCSVRef
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    fetchUserEnrichCSV:(user_id)=>dispatch(fetchEnrichCSV(user_id)),
    addUserEnrichCSV:(user_id,enrich_csv)=>dispatch(addEnrichCSV(user_id,enrich_csv))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tickets);

