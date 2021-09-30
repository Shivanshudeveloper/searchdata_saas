import { Helmet } from "react-helmet";
import {useEffect,useState} from "react"
import SettingsNotifications from "src/components/settings/SettingsNotifications";
import SettingsPassword from "src/components/settings/SettingsPassword";
import { Box, Container, Grid } from "@material-ui/core";
import AccountProfile from "src/components/account/AccountProfile";
import AccountProfileDetails from "src/components/account/AccountProfileDetails";
import {auth} from "../firebase/index"
import SettingsEmail from "src/components/settings/SettingsEmail";

const Account = () => {
  const [currUserDisplayName,setCurrUserDisplayName] = useState(null)
  const [currUserEmail,setCurrUserEmail] = useState(null)
  useEffect(()=>{
   auth.onAuthStateChanged((user)=>{
     if(user)
     {setCurrUserDisplayName(user.displayName)
    setCurrUserEmail(user.email)}
     else
     {
       console.log("NOT SIGNED IN!")
     }
   })
  },[])
  
  return (
  <>
    <Helmet>
      <title>Account | Client Portal</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <AccountProfile currUserDisplayName={currUserDisplayName}  />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <AccountProfileDetails currUserFirstName={currUserDisplayName?.split(" ")[0]} currUserLastName={currUserDisplayName?.split(" ")[1]} currUserEmail={currUserEmail} />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ pt: 3 }}>
          <SettingsPassword />
        </Box>
        <Box sx={{ pt: 3 }}>
          <SettingsEmail />
        </Box>
      </Container>
    </Box>
  </>
);}

export default Account;
