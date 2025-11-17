import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from './../firebase/firebase.config';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';




const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)


    const createUser = (email, password, name, imageUrl)=>{
        // return createUserWithEmailAndPassword(auth, email, password)






        const createUasrONRegester = async()=>{
            createUserWithEmailAndPassword(auth, email, password)
            .then(async (result) => {
                console.log(result.user)
                
                const user = result.user
                await updateProfile(user,{
                    displayName:name,
                    photoURL:imageUrl
                })

                fetch("http://localhost:3000/users",{
                    method:"POST",
                    headers :{
                        "content-type" : "application/json"
                    },
                    body: await JSON.stringify({
                        email:email,
                        displayName:user.displayName,
                        photoURL: user.photoURL,

                    })
                })
                    .then(res=> res.json())
                    .then(data => {
                        console.log(data, "--------------------")
                    })

            })
            .catch(error => {
                console.log(error)
            })
        }

        return createUasrONRegester()


    }


    const singinUser =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }



    const loginONGoogle = (googleProvider)=>{
        signInWithPopup(auth, googleProvider)

        .then(async(result) =>{
                console.log(result)

                fetch("http://localhost:3000/users",{
                    method:"POST",
                    headers :{
                        "content-type" : "application/json"
                    },
                    body: await JSON.stringify({
                        email:result.user.email,
                        displayName:result.user.displayName,
                        photoURL: result.user.photoURL,

                    })
                })
                    .then(res=> res.json())
                    .then(data => {
                        console.log(data, "--------------------")
                    })

                toast.success("Sing In with Google Successfully")
                // setUser()
            })
            .catch((error) => {
                console.log(error)
                toast.info("Have an Error")
            })
    }


    const signOutUser = ()=>{
        signOut(auth)
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
        singinUser,
        loginONGoogle,
        signOutUser,

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;