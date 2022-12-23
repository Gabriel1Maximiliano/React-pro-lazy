import * as Yup from 'yup';
import { Form, Formik } from "formik";
import { MySelect } from "../components";
import  formData  from "../components/data/custom-form.json";
import { MyTextInput } from '../components/MyTextInput';


const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {}

for (const input of formData) {
    initialValues[ input.name ] = input.value;

    if ( !input.validations ) continue;

    let schema = Yup.string()

    for (const rule of input.validations ) {
        if ( rule.type === 'required' ) {
            schema = schema.required('Este campo es requerido');
        }

        if ( rule.type === 'minLength' ) {
            schema = schema.min( (rule as any).value || 2, `Mínimo de ${ (rule as any).value || 2 } caracteres`);
        }

        if ( rule.type === 'email' ) {
            schema = schema.email( `Revise el formato del email`);
        }

        // ... otras reglas
    }

    requiredFields[input.name] = schema;
}
const validationSchema = Yup.object({ ...requiredFields });
export const DinamicForm = () => {
    console.log(formData)
  return (
    <div>
        <h1>DinamicForm</h1>
        <Formik  initialValues={initialValues}
               validationSchema={ validationSchema }
         onSubmit={ (values)=> {
              console.log(values)
          } }>
            {(formik) =>(
                <Form>
               {
                formData.map(({type,name,placeholder,label,options},index) => {
                    if( type==='input' || type==='password' || type==='email' ){

                        return <MyTextInput label={label} name={name}placeholder={placeholder} type={type as any} key={`${name} ${index}`}/>
                    }else if(type==='select'){
                        return <MySelect label={label} name={name} key={name}>
                            <option key={name}>Select a game</option>
                            {
                                options?.map(option=>(
                                    <option key={ option.id } value={option.label }>{ option.label }</option>
                                ))
                            }
                        </MySelect>
                    }
                })
               }
        <input type="submit" />
                </Form>
            ) }
        </Formik>
    </div>
  )
}
