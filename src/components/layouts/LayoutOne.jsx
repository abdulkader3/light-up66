import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'

export const LayoutOne = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
