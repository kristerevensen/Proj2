import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'

export default function DefaultLayout() {
  const {currentUser, userToken, setCurrentUser, setUserToken} = useStateContext();

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
    axiosClient.post('http://' + process.env.REACT_APP_API_URL + '/api/logout')
        .then(res => {
          setCurrentUser({});
          setUserToken(null);
        });
  }
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  )

}
