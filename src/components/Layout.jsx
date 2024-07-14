/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className='flex flex-row'>
      <Outlet />
    </div>
  )
}

export default Layout