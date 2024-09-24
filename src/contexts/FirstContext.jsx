import React, { createContext, useEffect, useReducer } from "react";
import reducer from "./firstReducer"; // Assuming you have defined the reducer correctly
import { fetchPosts, getCurrentUser, loginUser } from "../api/fetchService";


export const logoutUser = ()=>{
    localStorage.removeItem('localToken');

    
}

// Initial state with a default movie
const initialState = {
    movies: [{
        id: 1,
        name: "Kabhi Khushi Kabhi Gham"
    }],
    posts : [],
    loading: false,
    error : "",
    currentUser : {

    }
};

// Create the context
export const FirstContext = createContext();

// Context provider component
const FirstContextProvider = ({ children }) => {
    // Correctly use useReducer to return an array
    const [state, dispatch] = useReducer(reducer, initialState);


   




 


    useEffect(()=>{

        const fetchCurrentUserCall = async()=>{
            try {
                dispatch({
                    type : "SET_LOADING",
                    payload : true
                })
                const userDetails = await getCurrentUser()
                
                dispatch({
                    type : "SET_CURRENT_USER",
                    payload : userDetails.user
                })

                dispatch({
                    type : "SET_LOADING",
                    payload : false
                })
                // console.log(userDetails)
            } catch (error) {
                
            }
        }
        const getPosts = async()=>{
            try {
                dispatch({
                    type  : "SET_LOADING", payload : true
                })
                const data = await fetchPosts()
                dispatch({
                    type : "POPULATE_POSTS",
                    payload : data
                })
                dispatch({
                    type  : "SET_LOADING", payload : false
                })
                console.log(data)
            } catch (error) {
                
            }
        }

        fetchCurrentUserCall()
        getPosts()

        
    },[])

    return (
        <FirstContext.Provider value={{ state, dispatch }}>
            {children}
        </FirstContext.Provider>
    );
};

export default FirstContextProvider;
