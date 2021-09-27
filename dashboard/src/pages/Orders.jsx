import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { v4 as uuid } from "uuid";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableRow,
  TableCell,
  TableHead,
  LinearProgress,
  Snackbar,
  TablePagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { CircularProgress } from "@material-ui/core";
import OrderDetails from "src/components/orders//OrderDetails";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close"
import PropTypes from "prop-types";
import FilterListIcon from '@material-ui/icons/FilterList';
import axios from "axios";
import { fetchUsers } from "src/redux/index";
import { saveUsers } from "src/redux/saveUsers/saveUsersActions";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";


const Orders = ({usersList,fetchUsersProcess,saveUserProcess, userSaveRef}) => {
  const [value, setValue] = useState(0);
  const [users,setUsers] = useState([]);

  const [nameSearch, setNameSearch] = useState("")
  const [emailSearch, setEmailSearch] = useState("")
  const [linkedinSearch, setLinkedinSearch] = useState("")
  const [idSearch, setIdSearch] = useState("")
  const [countrySearch, setCountrySearch] = useState("")

    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(10)
    const [page,setPage] = useState(1)
    const [rowsPerPage,setRowsPerPage] = useState(10)
    

  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const orders = [
    {
      id: uuid(),
      ref: "CDD1044",
      amount: 16.76,
      customer: {
        name: "Adam Denisov",
        title: "Employee",
        company: "Apple Cop.",
        location: "Mountview California"
      },
      createdAt: 1554670800000,
      status: "delivered",
    },
    {
      id: uuid(),
      ref: "CDD1044",
      amount: 16.76,
      customer: {
        name: "Adam Denisov",
        title: "Employee",
        company: "Apple Cop.",
        location: "Mountview California"
      },
      createdAt: 1554670800000,
      status: "delivered",
    },
    {
      id: uuid(),
      ref: "CDD1044",
      amount: 16.76,
      customer: {
        name: "Adam Denisov",
        title: "Employee",
        company: "Apple Cop.",
        location: "Mountview California"
      },
      createdAt: 1554670800000,
      status: "delivered",
    },
    {
      id: uuid(),
      ref: "CDD1044",
      amount: 16.76,
      customer: {
        name: "Adam Denisov",
        title: "Employee",
        company: "Apple Cop.",
        location: "Mountview California"
      },
      createdAt: 1554670800000,
      status: "delivered",
    },
    {
      id: uuid(),
      ref: "CDD1044",
      amount: 16.76,
      customer: {
        name: "Adam Denisov",
        title: "Employee",
        company: "Apple Cop.",
        location: "Mountview California"
      },
      createdAt: 1554670800000,
      status: "delivered",
    },
    {
      id: uuid(),
      ref: "CDD1044",
      amount: 16.76,
      customer: {
        name: "Adam Denisov",
        title: "Employee",
        company: "Apple Cop.",
        location: "Mountview California"
      },
      createdAt: 1554670800000,
      status: "delivered",
    },
    {
      id: uuid(),
      ref: "CDD1044",
      amount: 16.76,
      customer: {
        name: "Adam Denisov",
        title: "Employee",
        company: "Apple Cop.",
        location: "Mountview California"
      },
      createdAt: 1554670800000,
      status: "delivered",
    },
    {
      id: uuid(),
      ref: "CDD1044",
      amount: 16.76,
      customer: {
        name: "Adam Denisov",
        title: "Employee",
        company: "Apple Cop.",
        location: "Mountview California"
      },
      createdAt: 1554670800000,
      status: "delivered",
    },
    {
      id: uuid(),
      ref: "CDD1044",
      amount: 16.76,
      customer: {
        name: "Adam Denisov",
        title: "Employee",
        company: "Apple Cop.",
        location: "Mountview California"
      },
      createdAt: 1554670800000,
      status: "delivered",
    },
    {
      id: uuid(),
      ref: "CDD1044",
      amount: 16.76,
      customer: {
        name: "Adam Denisov",
        title: "Employee",
        company: "Apple Cop.",
        location: "Mountview California"
      },
      createdAt: 1554670800000,
      status: "delivered",
    },
    {
      id: uuid(),
      ref: "CDD1044",
      amount: 16.76,
      customer: {
        name: "Adam Denisov",
        title: "Employee",
        company: "Apple Cop.",
        location: "Mountview California"
      },
      createdAt: 1554670800000,
      status: "delivered",
    },
    {
      id: uuid(),
      ref: "CDD1044",
      amount: 16.76,
      customer: {
        name: "Adam Denisov",
        title: "Employee",
        company: "Apple Cop.",
        location: "Mountview California"
      },
      createdAt: 1554670800000,
      status: "delivered",
    },
  ];

  const [open, setOpen] = React.useState(false);
 
  const [openSnack,setOpenSnack] = useState(true)


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
  

    fetchUsersProcess()

  
  },[])



  return (
    <>
      <Dialog
        open={open}
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Apply Filters</DialogTitle>
        <DialogContent>
          <div >
            <TextField id="outlined-basic" style={{ marginBottom: '18px' }} defaultValue="Name" value={nameSearch} onChange={(e)=>setNameSearch(e.target.value)} fullWidth label="Name" variant="outlined" />
            <TextField id="outlined-basic" style={{ marginBottom: '18px' }} defaultValue="LinkeIn" value={linkedinSearch} onChange={(e)=>setLinkedinSearch(e.target.value)} fullWidth label="Linkedin" variant="outlined" />
            <TextField id="outlined-basic" style={{ marginBottom: '18px' }} defaultValue="ID" value={idSearch} onChange={(e)=>setIdSearch(e.target.value)} fullWidth label="ID" variant="outlined" />
            <TextField id="outlined-basic" style={{ marginBottom: '18px' }} defaultValue="Country" value={countrySearch} onChange={(e)=>setCountrySearch(e.target.value)} fullWidth label="Country" variant="outlined" />
            <TextField id="outlined-basic" style={{ marginBottom: '18px' }} defaultValue="Email" value={emailSearch} onChange={(e)=>setEmailSearch(e.target.value)}  fullWidth label="Email" variant="outlined" />
            {/* <TextField id="outlined-basic" style={{ marginBottom: '18px' }} fullWidth label="Industry" variant="outlined" /> */}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={()=>{handleClose(); setNameSearch(""); setLinkedinSearch(""); setEmailSearch(""); setIdSearch(""); setCountrySearch("");}} color="primary">
            Clear Filters
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Apply Filter
          </Button>
        </DialogActions>
      </Dialog>


      <Helmet>
        <title>Search | Client Portal</title>
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
              Search
            </Typography>
            <div>
              <TextField label="Search" variant="filled" size="small" />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </div>
          </div>
          

          <Button 
            variant="contained"
            style={{ float: 'right', marginRight: '35px', marginTop: '20px' }}
            color="primary"
            startIcon={<FilterListIcon />}
            onClick={handleClickOpen}
          >
            Filter
          </Button>



          <Table >
              <TableCell><h3>Full Name</h3> </TableCell>
              <TableCell><h3>ID</h3> </TableCell>
              <TableCell><h3>Email</h3> </TableCell>
              <TableCell><h3>LinkedIn Username</h3> </TableCell>
              <TableCell style={{}}><h3>Country</h3></TableCell>
              <TableCell></TableCell>
              {usersList.users.length>0?(<>
                {usersList.users.filter((elem)=>elem.full_name?.includes(nameSearch) && elem.linkedin_username?.includes(linkedinSearch) && elem.location_country?.includes(countrySearch) && elem.id.includes(idSearch) && (elem && elem.emails && elem.emails.length>0 ? (elem.emails[0].address.includes(emailSearch)):(emailSearch?false:true))).slice(start,end).map((user)=><TableRow> 
                    <TableCell>{user.full_name.includes("")?user.full_name:"mkm"}</TableCell>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user && user.emails && user.emails.length>0 ?(<>{user.emails[0].address}</>):(<>NULL</>)}</TableCell>
                    <TableCell>{user.linkedin_username}</TableCell>
                    <TableCell>{user.location_country}</TableCell>
                    <TableCell><Button onClick={()=>{setOpenSnack(true);saveUserProcess({user_id: user.id, full_name: user.full_name, country: user.location_country,linkedin: user.linkedin_username, email: (user && user.emails && user.emails.length>0 ?user.emails[0].address:"N/A")})}} variant="contained">SAVE</Button></TableCell>
                </TableRow>)}
              </>):(<TableRow><TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell > <LinearProgress style={{width:"200px"}} /> </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell> </TableRow>)}
             
              <TableRow fullWidth style={{width:"100%"}}>
                <TableCell>
              <div style={{display:"flex", flexDirection:"row", margin:"20px"}}>
                <IconButton onClick={()=>{ setStart(Math.max(0,start-rowsPerPage));  setEnd(Math.max(rowsPerPage,end-rowsPerPage)); }}><ArrowBackIos/></IconButton  > <IconButton onClick={()=>{setStart(Math.min(usersList.users.filter((elem)=>elem.full_name?.includes(nameSearch) && elem.linkedin_username?.includes(linkedinSearch) && elem.location_country?.includes(countrySearch) && elem.id.includes(idSearch) && (elem && elem.emails && elem.emails.length>0 ? (elem.emails[0].address.includes(emailSearch)):(emailSearch?false:true))).length-rowsPerPage,start+rowsPerPage));  setEnd(Math.min(usersList.users.filter((elem)=>elem.full_name?.includes(nameSearch) && elem.linkedin_username?.includes(linkedinSearch) && elem.location_country?.includes(countrySearch) && elem.id.includes(idSearch) && (elem && elem.emails && elem.emails.length>0 ? (elem.emails[0].address.includes(emailSearch)):(emailSearch?false:true))).length,end+rowsPerPage));}}><ArrowForwardIos/></IconButton>
              
              </div>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Rows per page</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={rowsPerPage}
          onChange={(e)=>{ setRowsPerPage(e.target.value); setStart(0); setEnd(e.target.value);}}
          label="Rows per page"
        >
          
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl></TableCell>
              </TableRow>
              
              {/* <TablePagination component="div" count={10} page={page} onPageChange={(e,np)=>{  setPage(np)}} rowsPerPage={10} onRowsPerPageChange={()=>{}} /> */}
          </Table>
            <Snackbar anchorOrigin={{vertical:"bottom", horizontal:"left"}}
            open={((userSaveRef.refNo ) || (userSaveRef.error))&&openSnack}
            autoHideDuration={1000}
            onClose={(event,reason)=>{ return reason=="clickaway"?(null):setOpenSnack(false)}}
            message={userSaveRef.error || "SAVED"}
            action={<React.Fragment>
              <IconButton onClick={()=>setOpenSnack(false)}><CloseIcon color="white"/></IconButton>
              </React.Fragment>}
            />

        </Container>
      </Box>
    </>
  );
};



const mapStateToProps=(state)=>{
  return {
    usersList: state.usersList,
    userSaveRef: state.saveUserRef
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    fetchUsersProcess: ()=>dispatch(fetchUsers()),
    saveUserProcess:(user_id)=>dispatch(saveUsers(user_id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Orders);
