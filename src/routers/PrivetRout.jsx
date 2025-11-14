import React, { use } from 'react';
// import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const PrivetRout = ({children}) => {
    const {user} = use(AuthContext)

    if(user){
        return children
    }
    return <Navigate to={'/login'}> </Navigate>
};

export default PrivetRout;