import React from 'react';
import ReactDOM from 'react-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { login } from './scripts/User';
import Dashboard from './dashboard/Dashboard';


const useStyles = {
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
  
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
  },
};

class SignIn extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
         email : '',
         password : '',
         message : ''
       }

       this.classes = {props}
    }

    render() {

      return (
          <Grid container component="main" style = {{height: '100vh'}}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} style ={{backgroundImage: 'url(https://source.unsplash.com/random)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'}} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <div style ={{display: 'flex',
              flexDirection: 'column',
              textAlign : 'center', width : '90%', margin : '30px auto'}}>
                <Avatar>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <div style ={{width: '100%'}} noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value = {this.state.email}
                    onChange = {(e) => {
                      this.setState({email : e.target.value})
                    }}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value = {this.state.password}
                    onChange = {(e) => {this.setState({password : e.target.value})}}
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={this.classes.submit}
                    onClick = {() => {
                       login(this.state.email, this.state.password, (result) => {
                         if(result == null) this.setState({message : 'Login failed, incorrect email or password'})
                         else ReactDOM.render(<Dashboard userData = {result} />, document.getElementById('root'))
                       })
                    }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                  <p>{this.state.message}</p>
                </div>
              </div>
            </Grid>
          </Grid>
        );
    }
}

export default withStyles(useStyles)(SignIn)