import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';




const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)


    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }




    useEffect(()=>{
    const unsubscrib = onAuthStateChanged(auth, (currenUser)=>{
        setUser(currenUser)
    })
    return ()=>{
        unsubscrib()
    }
 }, [])



    const authInfo = {
        user,
        createUser,
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;