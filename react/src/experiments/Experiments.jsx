import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar'

export default function Experiments() {
  return (
      <>
        <TopBar />
        <Outlet />
      </>
    )
}
