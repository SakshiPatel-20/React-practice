
import React from 'react';
import LoginForm from '../LoginForm';

const Login = ({ onLogin }) => { 
  return (
    <>
      <LoginForm onLogin={onLogin} /> 
    </>
  );
};

export default Login;
