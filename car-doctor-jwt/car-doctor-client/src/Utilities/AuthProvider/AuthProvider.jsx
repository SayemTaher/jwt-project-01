/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from 'axios';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [loader,setLoader] = useState(true)
    const [user,setUser] = useState(null)
    const googleAuthProvider = new GoogleAuthProvider()
    const gitHubAuthProvider = new GithubAuthProvider()

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User in the auth state changed', currentUser)
            setUser(currentUser)
            setLoader(false)
            if(currentUser){
                const loggedUser = {email: currentUser.email}
                axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials:true})
                .then(res => {
                    console.log(res.data)
                })
            }
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const createUser = (email, password, photoUrl, name) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Update profile after account creation
                return updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoUrl
                });
            });
    };

    const signIn = (email,password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle = ()=>{
        setLoader(true)
        return signInWithPopup(auth,googleAuthProvider)
    }
    const signInWithGitHub = () =>{
        setLoader(true)
        return signInWithPopup(auth,gitHubAuthProvider)
    }
    const logOut = () =>{
        setLoader(true)
        return signOut(auth)
    }
    const info = {
        loader,createUser,signIn,signInWithGoogle,signInWithGitHub,logOut,user
        
    }


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;