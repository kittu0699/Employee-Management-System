import React from 'react'
import { useAuth } from '../context/authContext.jsx'
import AdminSideBar from '../components/dashboard/AdminSideBar.jsx'
import Navbar from '../components/dashboard/Navbar.jsx'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  
  const {user} = useAuth()
  
  return (
   <div className='flex'> 
       <AdminSideBar />
       <div className='flex-1 ml-75 bg-gray-100 h-screen'>
        <Navbar />
       <Outlet />
       </div>
   </div>
  )
}

export default AdminDashboard