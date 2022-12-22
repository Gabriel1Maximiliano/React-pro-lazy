
import { useForm } from '../hooks/useForm'
import  '../styles/styles.css'


interface FormProps {
     name:string,
     email:string,
    password1:string,
    password2:string
}
const initialValues:FormProps ={
    name:'',
    email:'',
   password1:'',
   password2:''
} 

export const RegisterPage = () => {

    const {name,email,password1,password2 ,onSubmit,handleFromData } =useForm(initialValues);

  

  return (
    <div>
        <h1>RegisterPage</h1>
        <form onSubmit={ (e)=>onSubmit(e) } >
            <input type="text" 
            placeholder='Name'
            value={ name }
            name='name'
            onChange={ handleFromData }/>

             <input type="email" 
            placeholder='Email'
            value={ email }
            name='email'
            onChange={ (ev)=>handleFromData(ev) }/>

            <input type="password" 
            placeholder='Password'
            name='password1'
            value={ password1 }
            onChange={ handleFromData }/>

              <input type="password" 
            placeholder='Repeat Password'
            name='password2'
            value={ password2 }
            onChange={ handleFromData }/>
            
            <button type='submit' >Crear</button>

        </form>
    </div>
  )
}
