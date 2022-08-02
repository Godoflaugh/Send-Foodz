import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import EmailIcon from '@mui/icons-material/Email';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'

function Login() {

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })
  const handleClickShowPassword = () => {

    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  }
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>


      <form >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} direction="column" alignItems="center">
            <Grid item xs={4}>

              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-username"
                  type={values.showUsername ? 'text' : 'username'}
                  value={values.username}
                  onChange={handleChange('username')}
                  endAdornment={
                    <InputAdornment position="end">
                      <PersonOutlineIcon></PersonOutlineIcon>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

            </Grid>
            <Grid item xs={4}>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  type={values.showEmail ? 'text' : 'email'}
                  value={values.email}
                  onChange={handleChange('email')}
                  endAdornment={
                    <InputAdornment position="end">
                      <EmailIcon></EmailIcon>
                    </InputAdornment>
                  } f
                  label="Password"
                />
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Button size="medium" variant="outlined"><Link to='/' >Submit</Link></Button>
            </Grid>
          </Grid>

        </Box>

      </form>

    </div>
  )
}

export default Login