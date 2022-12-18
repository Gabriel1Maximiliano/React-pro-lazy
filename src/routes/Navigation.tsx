import React from 'react'
import { BrowserRouter,NavLink,Routes,Route, Navigate } from "react-router-dom";
import logo from '../logo.svg';


export const Navigation = () => {
  return (
    <BrowserRouter>
    <div className="main-layout" >
        <img src={logo} alt="logo" width='300px' />
        <ul>
            <li>
                <NavLink to="/home" className={({isActive}) => isActive ? 'nav-active':'' }>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) => isActive ? 'nav-active':'' }>About</NavLink>
            </li>
            <li>
                <NavLink to="/users" className={({isActive}) => isActive ? 'nav-active':'' }>Users</NavLink>
            </li>
        </ul>
        <Routes>
            <Route path='about' element={<h1>Abaout</h1>} />
            <Route path='users' element={<h1>Usres</h1>} />
            <Route path='/home' element={<h1>Home</h1>} />
            <Route path='/*' element={<Navigate to='/home' replace />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}
