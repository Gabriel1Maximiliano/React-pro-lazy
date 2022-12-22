
import  '../styles/styles.css'
import { ErrorMessage, Form,Formik } from 'formik';
import * as Yup from 'yup';

import { MyCheckBox,MyTextInput,MySelect } from '../components'


export const FormikAbstractPage = () => {
    
  return (
    <div>
      <h1>FormikAbstractPage</h1>
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
              <MyTextInput 
              label="First Name" 
              name="firstName" 
              placeholder='escriba su nombre'
              />
                <MyTextInput 
              label="Last Name" 
              name="lastName" 
              placeholder='escriba su apellido'
              />
            <MySelect  name='jobType' as='select' label={'Job type'} >
              <option value="">Pick Up Something</option>
              <option value="developer">developer</option>
              <option value="designer">designer</option>
              <option value="it-senior">it-senior</option>
              <option value="it-jr">it-jr</option>
            </MySelect>
           <ErrorMessage name='jobType' component='span' />
           
           <MyTextInput 
              label="Email" 
              name="email" 
              type='email'
              placeholder='escriba su email'
              />
                
            <MyCheckBox label='Terms and conditions' name='terms'/>
                
                 
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

  

