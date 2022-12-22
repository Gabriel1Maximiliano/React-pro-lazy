
import  '../styles/styles.css'
import { ErrorMessage, Field, Form,Formik } from 'formik';
import * as Yup from 'yup';



export const FormikYupPage = () => {


  
    
  
  return (
    <div>
      <h1>Formik Yup Page</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType:''
        }}
        onSubmit={(values: any) => {
          console.log(values);
        } }
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Deve tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(15, 'Deve tener 10 caracteres o menos')
            .required('Requerido'),
          email: Yup.string().email('formato inválido').required('es requierido'),
          terms: Yup.boolean()
                    .oneOf([true],' Debe aceptar la condiciones'),

              jobType:Yup.string()
              .required('requerido')
              .notOneOf(['it-jr'],'Opción no disponible')      

        })} 
      >
        {
           () =>(
  
            <Form>
            
                <label htmlFor='firstName'>First Name</label>
            
                <Field  name='firstName' type='text' ></Field>
                <ErrorMessage name='firstName' component='span' />
            
                  <label htmlFor='lastName'>Last Name</label>
            
                  <Field  name='lastName' type='text' ></Field>
                <ErrorMessage name='lastName' component='span' />

                <label htmlFor='job-type' >Job Type</label>
            
            <Field  name='jobType' as='select' >
              <option value="">Pick Up Something</option>
              <option value="developer">developer</option>
              <option value="designer">designer</option>
              <option value="it-senior">it-senior</option>
              <option value="it-jr">it-jr</option>
            </Field>
           <ErrorMessage name='jobType' component='span' />
           
                 <label htmlFor='email'>Email</label>
            
                 <Field  name='email' type='text' ></Field>
                <ErrorMessage name='email' component='span' />

                <label >Terms and conditions  <Field  name='terms' type='checkbox'></Field></label>
            
            
           <ErrorMessage name='terms' component='span' />
                 
               <button type='submit' >Submit</button>
               </Form>
             )
        }
      </Formik>
    </div>
) }
/**
 * //{
//  
</div>

 */

  

