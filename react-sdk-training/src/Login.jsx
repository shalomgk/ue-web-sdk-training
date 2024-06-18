import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
function Login() {
 
  const navigate = useNavigate();

  const handleLogin = () => {
    const emailInput = document.getElementById('email').value;
    console.log('Email: ', emailInput);
    if (emailInput) {
      // To set the identifier as the email entered by the user
      //window.ue.setUserIdentifier(emailInput);
      navigate('/home');
    }
  }
  return (
    <div>
       <div className="input-section">
          <label className="form-label" htmlFor="fname">Email:</label>
          <input className="form-control" type="email" id="email" name="email" /><br />
          <input type='text' id="simple-text-field" name='simple-text-field' /><br />
          <label className="form-label" htmlFor="lname">Password</label>
          <input className="form-control" type="password" id="password" name="password" /><br />
          <button onClick={handleLogin} className="btn btn-primary">Login</button>
   
        </div>
    </div>
  );
}

export default Login;