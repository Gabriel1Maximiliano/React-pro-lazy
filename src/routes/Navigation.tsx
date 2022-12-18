import React, { Suspense } from 'react'
import { BrowserRouter,NavLink,Routes,Route, Navigate } from "react-router-dom";
import { LazyPage1 } from '../01-lazyload/components/LazyPage1';
import { LazyPage2 } from '../01-lazyload/components/LazyPage2';
import { LazyPage3 } from '../01-lazyload/components/LazyPage3';
import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
<Suspense fallback={ <h1>Loading..</h1> } >    
    <BrowserRouter>
    <div className="main-layout" >
        <img src={logo} alt="logo" width='300px' />
        <ul>
            {
                routes.map(el=>(
                    <li key={el.to} >
                    <NavLink to={el.to} className={({isActive}) => isActive ? 'nav-active':'' }>{el.name}</NavLink>
                </li>
                ))
            }
           
           
        </ul>
        <Routes>
            {
                routes.map(el=>(

                    <Route key={ el.to }path={el.path} element={<el.Component/>} />
                ))
            }
           
            <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
        </Routes>
    </div>
    </BrowserRouter>
</Suspense>
  )
}
