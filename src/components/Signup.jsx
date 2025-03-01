import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const handleSubmitSignup=(event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(name,email,password);


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
      
         
          <div className="bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmitSignup} className="card-body">
                <h2 className='text-center text-2xl font-semibold'>Please Signup</h2>
              <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <input type="text"name='name' className="input" placeholder="Name" />
                <label className="fieldset-label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                <button className="btn btn-neutral mt-4">Signup</button>
              </fieldset>
              <div>
                <p className='text-center'><small>Already Have an account? Please <Link to='/login' className='text-red-500 mr-2'>Login</Link>Fast.</small></p>
            </div>
            </form>
          </div>
        </div>
      
    );
};

export default Signup;