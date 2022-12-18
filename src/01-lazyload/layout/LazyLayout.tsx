import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import { LazyPage1 } from '../components/LazyPage1';
import { LazyPage2 } from '../components/LazyPage2';
import { LazyPage3 } from '../components/LazyPage3';

export const LazyLayout = () => {
  return (
    <div>
        <h1>LazyLayout</h1>
        <ul>
            <li>
                <NavLink to='lazy1'> Lazy 1</NavLink>
            </li>
            <li>
                <NavLink to='lazy2'> Lazy 2</NavLink>
            </li>
            <li>
                <NavLink to='lazy3'> Lazy 3</NavLink>
            </li>
        </ul>
        <Routes>
            <Route path='lazy1' element={<LazyPage1 />}></Route>
            <Route path='lazy2' element={<LazyPage2 />}></Route>
            <Route path='lazy3' element={<LazyPage3 />}></Route>
            <Route path='*' element={<span>Not Found</span>}></Route>
        </Routes>
    </div>
  )
}
export default LazyLayout;