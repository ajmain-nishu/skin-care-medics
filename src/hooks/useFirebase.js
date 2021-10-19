import {getAuth, GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut} from 'firebase/auth'
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init';


initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loginError, setLoginError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
            console.log(result.user)
        })
        .catch(error => {
            setError(error.message)
        })
    }
    const handleEmail = e => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }
    const handleName = e => {
        setName(e.target.value)
        console.log(e.target.value)
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, {displayName: name})
        .then(result => { })
    }
    const handleLogin = e => {
        
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(loginError => {
            setLoginError('Please correct email or password')
        })
        e.preventDefault()
    }
    const handleRegistration = e => {
        e.preventDefault()
        if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return
        }
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            setError('')
            setUserName()
        })
        .catch(error => {
            setError(error.message)
        })
    }
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user)
            }
        })
    }, [])
    return {
        user,
        error,
        signInUsingGoogle,
        handleEmail,
        handlePassword,
        handleLogin,
        handleRegistration,
        handleName,
        loginError,
        logOut
    }
};





export default useFirebase;