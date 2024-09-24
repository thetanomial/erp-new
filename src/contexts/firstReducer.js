function reducer(state, action) {
    switch (action.type) {

      case "SET_LOADING":
        return {
            ...state,
            loading : action.payload
        }
      case "SET_CURRENT_USER" : 
        return { 
            ...state,
            currentUser : action.payload
        } 
      case "LOGOUT_USER" : 
        return {
            ...state,
            currentUser : {}
        }
      case "ADD_MOVIE":
        return {
          ...state, // keep the rest of the state unchanged
          movies: [
            ...state.movies, // spread the existing movies
            action.payload,  // add the new movie from action.payload
          ],
        };
       case "POPULATE_POSTS" : 
        return {
            ...state,
            posts : action.payload
        }
        
      default:
        return state; // return the state unchanged for other action types
    }
  }
  

  export default reducer