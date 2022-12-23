
import { Form, Formik } from 'formik';
import { useForm } from '../hooks/useForm'
import  '../styles/styles.css'
import * as Yup from 'yup';
import { MyTextInput } from '../components';




export const RegisterFormikPage = () => {


  return (
    <div>
    <Formik
    initialValues={{
      name: '',
      email: '',
      password1: '',
      password2:''
    }}
    onSubmit={(values: any) => {
      console.log(values);
    } }
    validationSchema={Yup.object({
      name: Yup.string()
        .min(2, 'Debe tener 3 caracteres o mas')
        .required('Requerido'),
      email: Yup.string().email('formato inválido').required('es requierido'),
      password1: Yup.string()
      .min(6,'Minimo 6 letras')
      .required('Requerido'),
      password2:Yup.string()
      .oneOf([Yup.ref('password1')],'Las contraseñas no son iguales')
  
         
    })} 
  >
    {
      ({handleReset}) =>(
        <Form>
          <MyTextInput
           label='Nombre'
           name='name' 
           placeholder='Escriba su nombre'/>
           <MyTextInput
           label='Email'
           name='email'
           type='email' 
           placeholder='Escriba su email'/>
            <MyTextInput
           label='Password'
           name='password1'
           type='password' 
           placeholder='Escriba su password'/>
           <MyTextInput
           label='Password'
           name='password2'
           type='password' 
           placeholder='Escriba su password'/>
          <button type='submit' >Create</button>
          <button type='button' onClick={handleReset} >Reset Form</button>
        </Form>
      
    )}
  </Formik>
    </div>
  )
}
