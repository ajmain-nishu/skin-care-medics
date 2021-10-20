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



    const [isLoading, setIsLoading] = useState(true)


    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    // google sign in
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // google and email sign in
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleName = e => {
        setName(e.target.value)
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, {displayName: name})
        .then(result => { })
    }

    // email log in in
    const handleLogin = e => {

        setIsLoading(true)


        signInWithEmailAndPassword(auth, email, password)
        .then(result => result.user)
        .catch(loginError => setLoginError('Please correct email or password'))
        
        
        .finally(() => setIsLoading(false))




        e.preventDefault()
    }

    // email registration
    const handleRegistration = e => {
        e.preventDefault()
        if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return
        }
        
        // create registration
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            setError('')
            setUserName()
        })
        .catch(error => setError(error.message))
    }

    // log out
    const logOut = () => {


        setIsLoading(true)

        signOut(auth)
        .then(() => setUser({}))


        .finally(() => setIsLoading(false))
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user)
            }
            else {
                setUser({})
            }



            setIsLoading(false)


        })
        return () => unsubscribed
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
        logOut,
        isLoading
    }
};





export default useFirebase;