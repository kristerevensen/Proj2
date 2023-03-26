import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'

export default function DefaultLayout() {
  const {currentUser, userToken} = useStateContext();

  if(!userToken) {
    return <Navigate to= 'login' /> 
  }

  const login = (ev) => {
    ev.preventDefault();
    localStorage.setItem('token', userToken);
  }

  const logout = (ev) => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('currentUser');
    window.location.reload();
  }
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  )

}
