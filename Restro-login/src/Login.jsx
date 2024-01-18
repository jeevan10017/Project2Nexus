import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'bootstrap';
import './Signup.css';

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', {email,password})
        .then(result=>{
            console.log(result)
            if(result.data==='success'){
                navigate('/restropage')  
            }
            else{
                Alert('Invalid credentials')
            }
        
         })
        .catch(err=> console.log(err))
      }
    
    
      return (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title text-center">Login</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Login
                    </button>
                  </form>
                  <p className="mt-3 text-center havena">
                    Don't have an account? <a href="/register" >Register</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Login