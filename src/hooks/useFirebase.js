import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword , signOut, onAuthStateChanged } from "firebase/auth";


// initialize FIREBASE APP
initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    const registerUser = (email, password) =>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) =>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const destination = location?. state?. from || '/';
              history.replace(destination)
              setAuthError('');
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                
                setAuthError(error.message);
              })
            .finally(() => setIsLoading(false));
    }

    // observe user is present or users state
    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
                setUser(user);
            } else {
              setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribed;
    }, [])

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
    }

    return{
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logOut,
        
    }
}
export default useFirebase;