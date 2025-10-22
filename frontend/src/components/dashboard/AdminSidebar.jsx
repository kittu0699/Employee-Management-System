import React from 'react'
import {NavLink} from "react-router-dom"
import {FaBuilding, FaCalendarAlt, FaCogs, FaMoneyBillWave, FaTachometerAlt, FaUsers} from "react-icons/fa"

const AdminSideBar = () => {
  return (
    <div  className='bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-75'>
        <div className='bg-teal-600 h-12 flex items-center justify-center'>
            <h3 className='text-2xl text-center font-pacifico'>Employee MS</h3>
        </div>
        <div className='px-4'>
            <NavLink to="/admin-dashboard" 
            className={({isActive}) => `${isActive ? "bg-teal-500" : " "} flex items-center space-x-4 py-3 px-8 rounded`} end>
                <FaTachometerAlt />
                <span>Dashboard</span>
            </NavLink>
            <NavLink to="/admin-dashboard"
            className="flex items-center space-x-4 py-3 px-8 rounded">
                <FaUsers />
                <span>Employees</span>
            </NavLink>
            <NavLink to="/admin-dashboard/departments"
           className={({isActive}) => `${isActive ? "bg-teal-500" : " "} flex items-center space-x-4 py-3 px-8 rounded`}>
                <FaBuilding />
                <span>Departments</span>
            </NavLink>
            <NavLink to="/admin-dashboard"
            className="flex items-center space-x-4 py-3 px-8 rounded">
                <FaCalendarAlt />
                <span>Leave</span>
            </NavLink>
            <NavLink to="/admin-dashboard"
            className="flex items-center space-x-4 py-3 px-8 rounded">
                <FaMoneyBillWave />
                <span>Salary</span>
            </NavLink>
            <NavLink to="/admin-dashboard"
            className="flex items-center space-x-4 py-3 px-8 rounded">
                <FaCogs />
                <span>Setting</span>
            </NavLink>
            
        </div>
    </div>
  )
}

export default AdminSideBar