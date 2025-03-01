import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const {loginUser}=useContext(AuthContext);
    const handleSubmitLogin=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(name,email,password);
        loginUser(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user);
        })
        .catch(error=>{
          console.log(error.message);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
      
         
        <div className="bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmitLogin} className="card-body">
              <h2 className='text-center text-2xl font-semibold'>Please Login</h2>
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <div>
                <p className='text-center'><small>Are You New Here? Please <Link to='/signup' className='text-red-500 mr-2'>SignUp</Link>Fast.</small></p>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;