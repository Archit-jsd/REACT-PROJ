import React from 'react';
import { setUserToken } from '../../features/authSlice.js';
import { getToken, storeToken } from '../../services/LocalStorageService';
import { useLoginUserMutation } from '../../services/userAuthApi';
import { TextField, Button, Box, Alert, Typography, CircularProgress, colors } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import './login.css'; // Import CSS file for styling

const LoginPage = () => {
    const mystyle={

        backgroundImage:`url('./image/loginback.jpg')`,
        backgroundposition: 'center',
        height:'90vh',
        display: 'flex',
        justifycontent: 'center',
        alignitems:'center',

    }

    const [server_error, setServerError] = useState({})
    const navigate = useNavigate();
    const [loginUser, { isLoading }] = useLoginUserMutation()
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const actualData = {
        email: data.get('email'),
        password: data.get('password'),
      }
      const res = await loginUser(actualData)
      if (res.error) {

        setServerError(res.error.data.errors)
      }
      if (res.data) {
        storeToken(res.data.token)
        let { access_token } = getToken()
        dispatch(setUserToken({ access_token: access_token }))
        navigate('/cam')
      }
    }
    let { access_token } = getToken()
    useEffect(() => {
      dispatch(setUserToken({ access_token: access_token }))
    }, [access_token, dispatch])
     return<>
      <div className="login-page"style={mystyle}>
      {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}
         {server_error.email ? console.log(server_error.email[0]) : ""}
         {server_error.password ? console.log(server_error.password[0]) : ""}
        <div className="login-form"id='login-form'>
        <img src="./image/inlogo.jpg" alt="Logo" className="login-logo" />
          <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
        <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
         {server_error.email ? <Typography style={{ fontS1ize: 2, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
           <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
          {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
          <Box textAlign='center'>
           {isLoading ? <CircularProgress /> : <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 , colors:'#ffffff'}}>Login</Button>}
          </Box>
       <NavLink to='/cam' >Register New User</NavLink>
           {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
      </Box>
      </div>
      </div>
     </>;
     // };
  // (
  //       <div className="login-page"style={mystyle}>a
  //       <div className="login-form">
  //           <img src="./image/inlogo.jpg" alt="Logo" className="login-logo" />
  //           <form onSubmit={handleSubmit}>
  //               <div>
  //                   <label>Email:</label>
  //                   <input
  //                   type="text"
  //                   value={email}
  //                   onChange={(e) => setEmail(e.target.value)}
  //                   />
  //                   {errors.email && <span>{errors.email}</span>}
  //               </div>
  //               <div>
  //                   <label>Password:</label>
  //                   <input
  //                   type="password"
  //                   value={password}
  //                   onChange={(e) => setPassword(e.target.value)}
  //                   />
  //                   {errors.password && <span>{errors.password}</span>}
  //               </div>
  //            <button type="submit" onSubmit={handleSubmit}>Login</button>
  //            </form>
  //            <a href="">Register New User</a>
  //        </div>
  //    </div>
  //  )
 };

export default LoginPage;