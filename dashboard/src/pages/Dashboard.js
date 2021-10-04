import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Box, Container, Grid, IconButton, Table, TableCell, TableRow, Typography, Button } from "@material-ui/core";
import LatestOrders from "src/components/dashboard//LatestOrders";
import OrderStatus from "src/components/dashboard//OrderStatus";
import SubscriptionOrders from "src/components/dashboard//SubscriptionOrders";
import UserView from "./UserView"

import { LinearProgress } from "@material-ui/core";


import { connect } from "react-redux";
import { fetchSavedUsers } from "src/redux/fetchSavedUsers/fetchSavedUsersActions";
import Delete from "@material-ui/icons/Delete";
import { deleteUsers } from "src/redux/deleteUsers/deleteUsersActions";


const Dashboard = ({savedUsers,fetchSavedUsersProcess, deleteUser}) => {
  const [level,setLevel]=useState(0)
  const [userViewMode, setUserViewMode] = useState(false)
  const [userDetails, setUserDetails] = useState(null)
  useEffect(()=>{
    const timer = setInterval(()=>{
      setLevel((newLvl)=>(newLvl>=100) ? 0:( newLvl+10))
    },500);

    fetchSavedUsersProcess()

    return()=>{
      clearInterval(timer)
    }

  },[])

  const handleExportCSV=(users)=>{
    const csvString = [
      [
        "First Name",
        "Last Name",
        "Email",
        "Gender",
        "Date of Birth",
        "LinkedIn URL",
        
        "Facebook URL",
        "GitHub URL",
        "Work Email",
        "Mobile",
        "Industry",				
    "Job Title",					
    "Company",					
    "Company Location",					
    "User Location",					
    "Locality",					
    "City",					
    "Region",					
    "Country",					
    "Continent",				
    "Address",					
    "Postal Code",					
    "Inferred Salary",					
    "Inferred Years Experience",					
    "Summary"
      ],
      ...savedUsers.users.map(userInfo => [
        (userInfo.userInfoCompressed.first_name?userInfo.first_name:"N/A"),
        (userInfo.userInfoCompressed.last_name?userInfo.userInfoCompressed.last_name:"N/A"),
        (userInfo.userInfoCompressed && userInfo.userInfoCompressed.emails && userInfo.userInfoCompressed.emails.length>0 ? userInfo.userInfoCompressed.emails[0].address:"N/A"),
        (userInfo.userInfoCompressed.gender?userInfo.userInfoCompressed.gender:"N/A"),
        (userInfo.userInfoCompressed.birth_date?userInfo.userInfoCompressed.birth_date:"N/A"),
        (userInfo.userInfoCompressed.linkedin_url?userInfo.userInfoCompressed.linkedin_url:"N/A"),
        (userInfo.userInfoCompressed.facebook_url?userInfo.userInfoCompressed.facebook_url:"N/A"),
        (userInfo.userInfoCompressed.github_url?userInfo.userInfoCompressed.github_url:"N/A"),
        (userInfo.userInfoCompressed.work_email?userInfo.userInfoCompressed.work_email:"N/A"),
        (userInfo.userInfoCompressed.mobile_phone?userInfo.userInfoCompressed.mobile_phone:"N/A"),
        (userInfo.userInfoCompressed.industry?userInfo.userInfoCompressed.industry:"N/A"),
        (userInfo.userInfoCompressed.job_title?userInfo.userInfoCompressed.job_title:"N/A"),
        (userInfo.userInfoCompressed.job_company_name?userInfo.userInfoCompressed.job_company_name:"N/A"),
        (userInfo.userInfoCompressed.job_company_location_name?userInfo.userInfoCompressed.job_company_location_name:"N/A"),
        (userInfo.userInfoCompressed.location_name?userInfo.userInfoCompressed.facebook_url:"N/A"),
        (userInfo.userInfoCompressed.location_locality?userInfo.userInfoCompressed.location_locality:"N/A"),
        (userInfo.userInfoCompressed.location_metro?userInfo.userInfoCompressed.location_metro:"N/A"),
        (userInfo.userInfoCompressed.location_region?userInfo.userInfoCompressed.location_region:"N/A"),
        (userInfo.userInfoCompressed.location_country?userInfo.userInfoCompressed.location_country:"N/A"),
        (userInfo.userInfoCompressed.location_continent?userInfo.userInfoCompressed.location_continent:"N/A"),
        (userInfo.userInfoCompressed.location_street_address+userInfo.userInfoCompressed.location_address_line_2?userInfo.userInfoCompressed.location_street_address+userInfo.userInfoCompressed.location_address_line_2:"N/A"),
        (userInfo.userInfoCompressed.location_postal_code?userInfo.userInfoCompressed.location_postal_code:"N/A"),
        (userInfo.userInfoCompressed.inferred_salary?userInfo.userInfoCompressed.inferred_salary:"N/A"),
        (userInfo.userInfoCompressed.inferred_years_experience?userInfo.userInfoCompressed.inferred_years_experience:"N/A"),
        (userInfo.userInfoCompressed.summary?userInfo.userInfoCompressed.summary:"N/A")
      ])
    ] .map(e => e.join(",")) 
    .join("\n");


  let csvContent = "data:text/csv;charset=utf-8," 
    + csvString;

    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri)
  }

  const handleExportCSVUser=(userInfo)=>{
    const csvString = [
  [
    "First Name",
    "Last Name",
    "Email",
    "Gender",
    "Date of Birth",
    "LinkedIn URL",
    
    "Facebook URL",
    "GitHub URL",
    "Work Email",
    "Mobile",
    "Industry",				
"Job Title",					
"Company",					
"Company Location",					
"User Location",					
"Locality",					
"City",					
"Region",					
"Country",					
"Continent",				
"Address",					
"Postal Code",					
"Inferred Salary",					
"Inferred Years Experience",					
"Summary"
  ],
  [
    (userInfo.first_name?userInfo.first_name:"N/A"),
    (userInfo.last_name?userInfo.last_name:"N/A"),
    (userInfo && userInfo.emails && userInfo.emails.length>0 ? userInfo.emails[0].address:"N/A"),
    (userInfo.gender?userInfo.gender:"N/A"),
    (userInfo.birth_date?userInfo.birth_date:"N/A"),
    (userInfo.linkedin_url?userInfo.linkedin_url:"N/A"),
    (userInfo.facebook_url?userInfo.facebook_url:"N/A"),
    (userInfo.github_url?userInfo.github_url:"N/A"),
    (userInfo.work_email?userInfo.work_email:"N/A"),
    (userInfo.mobile_phone?userInfo.mobile_phone:(userInfo.phone_numbers.length>0?userInfo.phone_numbers[0]:"N/A")),
    (userInfo.industry?userInfo.industry:"N/A"),
    (userInfo.job_title?userInfo.job_title:"N/A"),
    (userInfo.job_company_name?userInfo.job_company_name:"N/A"),
    (userInfo.job_company_location_name?userInfo.job_company_location_name:"N/A"),
    (userInfo.location_name?userInfo.facebook_url:"N/A"),
    (userInfo.location_locality?userInfo.location_locality:"N/A"),
    (userInfo.location_metro?userInfo.location_metro:"N/A"),
    (userInfo.location_region?userInfo.location_region:"N/A"),
    (userInfo.location_country?userInfo.location_country:"N/A"),
    (userInfo.location_continent?userInfo.location_continent:"N/A"),
    (userInfo.location_street_address+userInfo.location_address_line_2?userInfo.location_street_address+userInfo.location_address_line_2:"N/A"),
    (userInfo.location_postal_code?userInfo.location_postal_code:"N/A"),
    (userInfo.inferred_salary?userInfo.inferred_salary:"N/A"),
    (userInfo.inferred_years_experience?userInfo.inferred_years_experience:"N/A"),
    (userInfo.summary?userInfo.summary:"N/A")
  ]
] .map(e => e.join(",")) 
.join("\n");


let csvContent = "data:text/csv;charset=utf-8," 
+ csvString;

var encodedUri = encodeURI(csvContent);
window.open(encodedUri)
  }

  return (
  <>
   {userViewMode?<UserView userInfo={userDetails}/>:(
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
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <Typography variant="h4" sx={{ my: "10px" }}>
          Saved List
        </Typography>
     
        <Button size="medium" sx={{backgroundColor:"green"}} variant="contained" onClick={()=>handleExportCSV()}>EXPORT ALL</Button>
        </div>
        {console.log(savedUsers.users)}
        {/* <Grid container spacing={3}>
          <Grid item xs={12}>
            <LatestOrders />
          </Grid>
        </Grid> */}
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
          {savedUsers.users.length>0?(
            <>
            {savedUsers.users?.map((user,index)=>{

               return ( <TableRow>
                    <TableCell>{user.first_name}</TableCell>
                    <TableCell>{user.last_name}</TableCell>
                    <TableCell>{user.company}</TableCell>
                    <TableCell>{user.designation}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.userInfoCompressed.phone_numbers.length>0?user.userInfoCompressed.phone_numbers:(user.userInfoCompressed.mobile_phone?user.userInfoCompressed.mobile_phone:"N/A")}</TableCell>
                    <TableCell>{user.linkedin}</TableCell>
                    <TableCell>{user.country}</TableCell>
                    <TableCell><Button variant="contained" onClick={()=>{setUserDetails(user.userInfoCompressed); setUserViewMode(true)}}>View</Button></TableCell>
                    <TableCell><Button variant="contained" onClick={()=>{handleExportCSVUser(user.userInfoCompressed)}}>Export</Button></TableCell>
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

   )}
    
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
