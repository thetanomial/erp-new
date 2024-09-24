import { createContext, useEffect, useReducer } from "react"
import reducer from "./authReducer"
import { getCurrentUser } from "../api/authService"

export const AuthContext = createContext()

const initialState = {
    currrentUser : {},
    loading : true,
    errorText : "",
    alertText : ""
    
}


const AuthProvider = ({children})=>{

    const [state,dispatch] = useReducer(reducer,initialState)


    
    useEffect(() => {
        const fetchCurrentUser = async () => {
            const token = localStorage.getItem('token'); // Get token from localStorage
            if (token) { // Only fetch user if token exists
                try {
                    dispatch({
                        type : "SET_CURRENT_USER_BEGIN",
                        
                    })
                    const user = await getCurrentUser(); // Fetch current user
                    dispatch({
                        type: "SET_CURRENT_USER",
                        payload: user
                    });

                    dispatch({
                        type : "SET_CURRENT_USER_SUCCESS",

                    })
                } catch (error) {
                    console.error("Failed to fetch current user:", error);
                   
                }
            }else{
                dispatch({
                    type : "SET_CURRENT_USER_FAILURE",
                    
                })
            }
        };

        fetchCurrentUser(); // Call the function to fetch the user
    }, []);
    return <AuthContext.Provider value={{state,dispatch}}>

        {children}
    </AuthContext.Provider>
}

export default AuthProvider;