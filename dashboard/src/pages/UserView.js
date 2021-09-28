import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Box, Container, Grid, IconButton, Table, TableCell, TableRow, Typography, Button, TextField } from "@material-ui/core";
import LatestOrders from "src/components/dashboard//LatestOrders";
import OrderStatus from "src/components/dashboard//OrderStatus";
import SubscriptionOrders from "src/components/dashboard//SubscriptionOrders";

import { LinearProgress } from "@material-ui/core";


import { connect } from "react-redux";
import { fetchSavedUsers } from "src/redux/fetchSavedUsers/fetchSavedUsersActions";
import Delete from "@material-ui/icons/Delete";
import { deleteUsers } from "src/redux/deleteUsers/deleteUsersActions";


const UserView= ({userInfo,savedUsers,fetchSavedUsersProcess, deleteUser}) => {
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
        <Typography variant="h2" sx={{ my: "20px" }}>
          User Details
        </Typography>

        <Table>
          <TableRow>
            <TableCell><h3>First Name</h3></TableCell>
            <TableCell>{userInfo.first_name?userInfo.first_name:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Last Name</h3></TableCell>
            <TableCell>{userInfo.last_name?userInfo.last_name:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Email</h3></TableCell>
            <TableCell>{userInfo && userInfo.emails && userInfo.emails.length>0 ? userInfo.emails[0].address:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Gender</h3></TableCell>
            <TableCell>{userInfo.gender?userInfo.gender:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Birth Date</h3></TableCell>
            <TableCell>{userInfo.birth_date?userInfo.birth_date:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>LinkedIn URL</h3></TableCell>
            <TableCell>{userInfo.linkedin_url?userInfo.linkedin_url:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Facebook URL</h3></TableCell>
            <TableCell>{userInfo.facebook_url?userInfo.facebook_url:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>GitHub URL</h3></TableCell>
            <TableCell>{userInfo.github_url?userInfo.github_url:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Work Email</h3></TableCell>
            <TableCell>{userInfo.work_email?userInfo.work_email:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Mobile</h3></TableCell>
            <TableCell>{userInfo.mobile_phone?userInfo.mobile_phone:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Industry</h3></TableCell>
            <TableCell>{userInfo.industry?userInfo.industry:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Job Title</h3></TableCell>
            <TableCell>{userInfo.job_title?userInfo.job_title:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Company</h3></TableCell>
            <TableCell>{userInfo.job_company_name?userInfo.job_company_name:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Company Location</h3></TableCell>
            <TableCell>{userInfo.job_company_location_name?userInfo.job_company_location_name:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>User Location</h3></TableCell>
            <TableCell>{userInfo.location_name?userInfo.facebook_url:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Locality</h3></TableCell>
            <TableCell>{userInfo.location_locality?userInfo.location_locality:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>City</h3></TableCell>
            <TableCell>{userInfo.location_metro?userInfo.location_metro:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Region</h3></TableCell>
            <TableCell>{userInfo.location_region?userInfo.location_region:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Country</h3></TableCell>
            <TableCell>{userInfo.location_country?userInfo.location_country:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Continent</h3></TableCell>
            <TableCell>{userInfo.location_continent?userInfo.location_continent:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Address</h3></TableCell>
            <TableCell>{userInfo.location_street_address+userInfo.location_address_line_2?userInfo.location_street_address+userInfo.location_address_line_2:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Postal Code</h3></TableCell>
            <TableCell>{userInfo.location_postal_code?userInfo.location_postal_code:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Inferred Salary</h3></TableCell>
            <TableCell>{userInfo.inferred_salary?userInfo.inferred_salary:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Inferred Years Experience</h3></TableCell>
            <TableCell>{userInfo.inferred_years_experience?userInfo.inferred_years_experience:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

          <TableRow>
            <TableCell><h3>Summary</h3></TableCell>
            <TableCell>{userInfo.summary?userInfo.summary:"N/A"}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
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



export default connect(mapStateToProps,mapDispatchToProps)(UserView);
