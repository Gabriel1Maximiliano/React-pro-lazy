
import { BrowserRouter,NavLink,Routes,Route, Navigate } from "react-router-dom";
import { RegisterPage ,
    FormikYupPage,
    FormikComponentPage,
    FormikPage,
    FormikAbstractPage} from '../03-forms/pages';
import logo from '../logo.svg';



export const Navigation = () => {
  return (
    <BrowserRouter>
    <div className="main-layout" >
        <img src={logo} alt="logo" width='300px' />
        <ul>
            <li>
                <NavLink to="/register" className={({isActive}) => isActive ? 'nav-active':'' }>Register Page</NavLink>
            </li>
            <li>
                <NavLink to="/formikbasic" className={({isActive}) => isActive ? 'nav-active':'' }>Formik</NavLink>
            </li>
            <li>
                <NavLink to="/formikyuppage" className={({isActive}) => isActive ? 'nav-active':'' }>Formik Yup Page</NavLink>
            </li>
            <li>
                <NavLink to="/formicomponentpage" className={({isActive}) => isActive ? 'nav-active':'' }>Formik Component Page</NavLink>
            </li>
            <li>
                <NavLink to="/formicoabstractpage" className={({isActive}) => isActive ? 'nav-active':'' }>Formik Abstract Page</NavLink>
            </li>
        </ul>
        <Routes>
            <Route path='register' element={<RegisterPage/>} />
            <Route path='formikbasic' element={<FormikPage/>} />
            <Route path='formikyuppage' element={<FormikYupPage/>} />
            <Route path='formicomponentpage' element={<FormikComponentPage/>} />
            <Route path='formicoabstractpage' element={<FormikAbstractPage/>} />
            <Route path='/*' element={<Navigate to='/lazy3' replace />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}
