
import  '../styles/styles.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';



export const FormikComponentPage = () => {


  const { handleSubmit,errors,touched,getFieldProps} = useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      email:''
    },
    onSubmit: values=>{
      console.log(values)
    },
    validationSchema:Yup.object({
      firstName: Yup.string()
      .max(15,'Deve tener 15 caracteres o menos')
      .required('Requerido'),
      lastName: Yup.string()
      .max(15,'Deve tener 10 caracteres o menos')
      .required('Requerido'),
      email: Yup.string().email('formato inválido').required('es requierido')


    })

  })

  
  return (
    <div>
      <h1>FormiComponentPage</h1>
      <form onSubmit={handleSubmit} noValidate  >

        <label htmlFor='firstName'>First Name</label>

        <input  type="text" {...getFieldProps('firstName' )}/>

         { touched &&  errors.firstName  &&  <span>{errors.firstName}</span>}

         <label htmlFor='lastName'>Last Name</label>

        <input type="text" {...getFieldProps('lastName' )}  />

        {<span>touch.errors.lastName  &&  {errors.lastName}</span>}

        <label htmlFor='email'>Email</label>

        <input type="text" {...getFieldProps('email' )}  />

           {errors.email  &&  <span>{errors.email}</span>}
        
      <button type='submit' >Submit</button>
      </form>
    </div>

  )
}
