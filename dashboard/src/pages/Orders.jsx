import React, { useState } from "react";
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
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import OrderDetails from "src/components/orders//OrderDetails";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";
import FilterListIcon from '@material-ui/icons/FilterList';
import axios from "axios";
import { fetchUsers } from "src/redux/index";


const Orders = ({usersList,fetchUsersProcess}) => {
  const [value, setValue] = useState(0);
  const [users,setUsers] = useState([])

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <>
    <Button style={{margin:"20px"}} variant="contained" onClick={()=>fetchUsersProcess()}>LOAD DATA</Button>

   
  
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
            <TextField id="outlined-basic" style={{ marginBottom: '18px' }} fullWidth label="Name" variant="outlined" />
            <TextField id="outlined-basic" style={{ marginBottom: '18px' }} fullWidth label="Job Title" variant="outlined" />
            <TextField id="outlined-basic" style={{ marginBottom: '18px' }} fullWidth label="Company Name" variant="outlined" />
            <TextField id="outlined-basic" style={{ marginBottom: '18px' }} fullWidth label="Location" variant="outlined" />
            <TextField id="outlined-basic" style={{ marginBottom: '18px' }} fullWidth label="Employee" variant="outlined" />
            <TextField id="outlined-basic" style={{ marginBottom: '18px' }} fullWidth label="Industry" variant="outlined" />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Apply Filter
          </Button>
        </DialogActions>
      </Dialog>


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



          <Table>
              <TableCell><h3>Full Name</h3> </TableCell>
              <TableCell><h3>ID</h3> </TableCell>
              <TableCell><h3>LinkedIn Username</h3> </TableCell>
              <TableCell style={{}}><h3>Country</h3></TableCell>
              {usersList.users.length>0?(<>
                {usersList.users?.map((user)=><TableRow> 
                    <TableCell>{user.full_name}</TableCell>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.linkedin_username}</TableCell>
                    <TableCell>{user.location_country}</TableCell>
                </TableRow>)}
              </>):(null)}

          </Table>


        </Container>
      </Box>
    </>
  );
};


const mapStateToProps=(state)=>{
  return {
    usersList: state.usersList
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    fetchUsersProcess: ()=>dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Orders);
