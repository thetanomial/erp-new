import React, { useContext } from 'react'
import { logout } from '../../api/authService'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

const Dashboard = () => {


    const navigate = useNavigate()
    const {dispatch, state} = useContext(AuthContext)
    
  return (
    <div>Dashboard,

        <h4>Welcome {state.currentUser.name}</h4> 


        <button onClick={()=>{
            dispatch({
                type : "LOGOUT_USER"
            })

            navigate('/login')
        }}>Logout</button>
    </div>
  )
}

export default Dashboard