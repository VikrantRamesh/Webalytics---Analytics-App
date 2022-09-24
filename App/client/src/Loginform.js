import React, { useState } from 'react';
import './Form.css';
const FormLogin = ( ) => {


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
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
          />

        </div>
        <button className='form-input-btn' type='submit'>
        
          Login
        </button>
        </form>
        </div>
        </div>
  );
};
export default FormLogin;
