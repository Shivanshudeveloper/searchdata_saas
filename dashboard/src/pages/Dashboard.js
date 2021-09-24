import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Box, Container, Grid, IconButton, Table, TableCell, TableRow, Typography } from "@material-ui/core";
import LatestOrders from "src/components/dashboard//LatestOrders";
import OrderStatus from "src/components/dashboard//OrderStatus";
import SubscriptionOrders from "src/components/dashboard//SubscriptionOrders";

import { LinearProgress } from "@material-ui/core";


import { connect } from "react-redux";
import { fetchSavedUsers } from "src/redux/fetchSavedUsers/fetchSavedUsersActions";
import Delete from "@material-ui/icons/Delete";
import { deleteUsers } from "src/redux/deleteUsers/deleteUsersActions";


const Dashboard = ({savedUsers,fetchSavedUsersProcess, deleteUser}) => {
  const [level,setLevel]=useState(0)
  useEffect(()=>{
    const timer = setInterval(()=>{
      setLevel((newLvl)=>(newLvl>=100) ? 0:( newLvl+10))
    },500);

    fetchSavedUsersProcess()

    return()=>{
      clearInterval(timer)
    }

  },[])

  return (
  <>
    <Helmet>
      <title>Dashboard | Client Portal</title>
    </Helmet>
    
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        padding: "30px",
      }}
    >
      <Container maxWidth={false}>
        <Typography variant="h4" sx={{ my: "20px" }}>
          Saved List
        </Typography>
        {console.log(savedUsers.users)}
        {/* <Grid container spacing={3}>
          <Grid item xs={12}>
            <LatestOrders />
          </Grid>
        </Grid> */}
        <Table>
          <TableRow>
            <TableCell><h3>ID</h3></TableCell>
            <TableCell><h3>NAME</h3></TableCell>
            <TableCell><h3>EMAIL</h3></TableCell>
            <TableCell><h3>LINKEDIN</h3></TableCell>
            <TableCell><h3>COUNTRY</h3></TableCell>
            <TableCell></TableCell>
          </TableRow>
          {savedUsers.users.length>0?(
            <>
            {savedUsers.users?.map((user,index)=>{

               return ( <TableRow>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.linkedin}</TableCell>
                    <TableCell>{user.country}</TableCell>
                    <TableCell><IconButton onClick={()=>{savedUsers.users.splice(index,1);deleteUser({user_id:user.id})}}><Delete/></IconButton></TableCell>
                </TableRow>)
            })}
            </>
          ):(
           <TableRow><TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell > <LinearProgress style={{width:"200px"}} /> </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell> </TableRow>
          )}
        </Table>
      </Container>
    </Box>
  </>
);}

const mapStateToProps=(state)=>{
  return {
    savedUsers: state.savedUsers
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    fetchSavedUsersProcess:()=>dispatch(fetchSavedUsers()),
    deleteUser:(userdata)=>dispatch(deleteUsers(userdata))
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
