function reducer (state,action){

    switch(action.type){

        case "LOGIN_USER_BEGIN" :
            return {
                ...state,
                loading : true
            }
        case "LOGIN_USER_SUCCESS":
           
            return {
                ...state,
                loading :false,
                currentUser : action.payload.user,
                alertText : action.payload.message
            }

            case "SET_CURRENT_USER_BEGIN":
                return {
                    ...state,
                    loading : true
                }
                case "SET_CURRENT_USER_SUCCESS":
                    return {
                        ...state,
                        loading : false
                    }    
                    case "SET_CURRENT_USER_FAILURE":
                        return {
                            ...state,
                            loading : false
                        }  
        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser : action.payload,
                loading : false
            }
        
        case "LOGIN_USER_FAILURE":

        return {
            ...state,
            loading: false,
            currentUser : {},
            errorText : action.payload.message,
        }

        case "LOGOUT_USER":
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser : {},
                loading :false
            }
        

        default:
            return state
    }
}

export default reducer