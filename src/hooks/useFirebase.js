import initializeFirebase from '../Pages/Login/Firebase/firebase.init'
import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";


// Initialize firebase app
initializeFirebase();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    // const [token, setToken] = useState('');

    /* ================================
    Register User 
    ================================*/
    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);

                // Save user to the database
                saveUser(email, name, 'POST');
                // Send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });

                navigate('/');
            })
            .catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    /* ================================
    Login User 
    ================================*/
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }
    /* ================================
    Login with google 
    ================================*/
    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
                const user = result.user;
                // Save user to the database
                saveUser(user.email, user.displayName, 'PUT');
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    /* ================================
    Observe user state 
    ================================*/
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
               /*  getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    }) */

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    /* ================================
    User Log Out 
    ================================*/
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    // Check Admin
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data.admin))
    }, [user.email])
   /*  useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]); */




    return {
        user,
        isLoading,
        authError,
        isAdmin,
        // token,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut
    }
}
export default useFirebase;