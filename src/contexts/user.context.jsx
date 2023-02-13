import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// As the actual value you want to access
export const UserContext = createContext({

    // Set initial value for context
 //   currentUser: null, // object
 //   setCurrentUser: () => null // empty funtion
});


// Provider = is the actual component
export const UserProvider = ( { children }) => {

    // Store user 
     const [currentUser, setCurrentUser] = useState(null); 

    const value = { currentUser, setCurrentUser };

    useEffect( () => {
        const unsubscribe = onAuthStateChangedListener( (user) => {
            if(user) { 
                 createUserDocumentFromAuth(user);
            }
          setCurrentUser(user);
        });

        return unsubscribe

    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

    // Children = everything between <UserContent.Provider>


}  


/* 

const userReducer = (state, action) => {
    return {
        currentUser: 
    }
}

*/

//<UserProvider>
 //   <App /> -- children
// </UserProvider>