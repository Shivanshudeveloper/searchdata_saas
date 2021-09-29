import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import { auth } from 'src/firebase';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: props.currUserFirstName,
    lastName: props.currUserLastName,
    email: props.currUserEmail,
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });
  const [changeDispNameError,setChangeDispNameError] = useState("")
  const [toChangeEmail, setToChangeEmail] = useState(false)

  const user = auth.currentUser

  const handleChangeDispName=()=>{
    // const credential = firebase.auth.EmailAuthProvider.credential(user.email)
    // user.reauthenticateWithCredential(credential).then(()=>{
      user.updateProfile({
        displayName: ((values.firstName || values.lastName)?((values.firstName?values.firstName:props.currUserFirstName)+" "+(values.lastName?values.lastName:props.currUserLastName)):(props.currUserFirstName+" "+props.currUserLastName))
      }).then(()=>{
        setChangeDispNameError("none");
        window.location.reload(false)
        console.log("changed display name")
      }).catch((err)=>{ setChangeDispNameError(err.message); console.log(err.message)})
    // }).catch((err)=>{setChangePassError(err.message); console.log("ERROR: ",err.message)})

  }

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName || props.currUserFirstName || ""}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName || props.currUserLastName || ""}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                disabled
                onChange={(e)=>{ handleChange(e)}}
                required
                value={values.email || props.currUserEmail || ""}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={()=>handleChangeDispName()}
          >
            Save details
          </Button>
          {console.log("ERROR", changeDispNameError)}
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
