import React, { useState } from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';
import useApiCall from './hooks/useApiCall';

const FormLogin = ( ) => {

  const apiCaller = useApiCall();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async() => {
    const response = await apiCaller({endpoint: 'login', query: {}},{username, password}, 'POST', 'application/json');
    if(!response.error){
      navigate("/analytics"); // Change to appropriate route later
    }else{
      setError("Invalid Username/Passoword");
    }
  }



  return (
    <div className='form-container'>
      <span className='close-btn'>×</span>
      <div className='form-content-left'>
        <img className='form-img' src='img/img-2.svg' alt='analyzer' />
      </div>
      <div className='form-content-right'>
      <form className='form'>
        <h1>
          Login to your account
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username' 
            onChange = {(event) => setUsername(event.target.value)}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            onChange = {(event) => setPassword(event.target.value)}
          />
        {!error || <p>{error}</p> }
        </div>
        <button className='form-input-btn' type='button' onClick={handleLogin}>
          Login
        </button>
        </form>
        </div>
        </div>
  );
};
export default FormLogin;
