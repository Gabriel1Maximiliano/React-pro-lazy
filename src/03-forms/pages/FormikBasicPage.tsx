
import  '../styles/styles.css'
import { FormikErrors, useFormik } from 'formik';

interface FormValues {
  firstName:string,
  lastName:string,
  email:string
}
const validate = ( { firstName,lastName,email }:FormValues )=>{

  const errors:FormikErrors<FormValues> ={};
  if(!firstName){
    errors.firstName ='Require'
  }else if( firstName.length > 15 ){
       errors.firstName = 'Must be 15 characters or less';
  }
  if(!lastName){
    errors.lastName ='Require'
  }else if( lastName.length > 10 ){
       errors.lastName = 'Must be 10 characters or less';
  }
  if (!email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }
   return errors;
}
export const FormikPage = () => {
  const formik = useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      email:''
    },
    onSubmit: values=>{
      console.log(values)
    },
    validate:validate

  })

  
  return (
    <div>
      <h1>Formik Basic</h1>
      <form onSubmit={formik.handleSubmit} noValidate  >

        <label htmlFor='firstName'>First Name</label>

        <input 
        type="text"
        name='firstName' 
        onChange={ formik.handleChange }
        value={ formik.values.firstName }
        onBlur={ formik.handleBlur }  
        />

         { formik.touched &&  formik.errors.firstName  &&  <span>{formik.errors.firstName}</span>}

         <label htmlFor='lastName'>Last Name</label>

        <input type="text"
        name='lastName' 
        onChange={ formik.handleChange }
        value={ formik.values.lastName }
        onBlur={ formik.handleBlur }  />

        {formik.touched && formik.errors.lastName  &&  <span>{formik.errors.lastName}</span>}

        <label htmlFor='email'>Email</label>

        <input type="text"
        name='email' 
        onChange={ formik.handleChange }
        value={ formik.touched && formik.values.email }
        onBlur={ formik.handleBlur }  />

           {formik.errors.email  &&  <span>{formik.errors.email}</span>}
        
      <button type='submit' >Submit</button>
      </form>
    </div>
  )
}
