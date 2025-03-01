import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Home = () => {
    const {name}=useContext(AuthContext)
    return (
        <div>
            <h2>this is home page</h2>
            <h2>My name is : {name}</h2>
        </div>
    );
};

export default Home;