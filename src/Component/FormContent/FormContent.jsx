import React, { useContext } from 'react'
import './FormContent.scss'
import { ErrorMessage, Field, Form, Formik, getIn, useField } from 'formik';
import * as Yup from 'yup';
import ContextInput from '../../Context/ContextInput';
function FormContent() {
    const { entranceContext, setEntranceContext } = useContext(ContextInput);
    function getStyles(errors, fieldName) {
        if (getIn(errors, fieldName)) {
          return {
            border: '1px solid red'
          }
        }
      }
    return (
        <div className="Formik">
            <div className="Formik__container">
                <div className='Form__header'>
                    <div className='Form__header--item'>
                        <p className=''>Entrance</p>
                    </div>
                </div>
                <div className='Form__content'>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Error: enter your email';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Error: the field is filled in incorrectly';
                            }
                            if (!values.password) {
                                errors.password = 'Error: enter your password';
                            } else if (
                                // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.password)
                                values.password == 1234
                            ) {
                                errors.password = 'Error: the field is filled in incorrectly';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setEntranceContext({'booleanInput':true})

                        }}
                        helperText=""
                    >
                        <Form >
                            <div className='Form__item'>
                                <label htmlFor="email" className='Form__item--lable'>Email <span>*</span></label>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="jane@acme.com"
                                    type="email"
                                    className="Field--item"
                                />
                                <div className="Form__item--error">
                                    <ErrorMessage name='email' />
                                </div>
                            </div>
                            <div className='Form__item'>
                                <label htmlFor="password" className='Form__item--lable'>Password <span>*</span></label>
                                <Field
                                    id="password"
                                    name="password"
                                    type="password"
                                    // style={getStyles(formProps.errors, 'example')}
                                    className={`input-form ${Formik.touched && Formik.errors ? 'Field--item--error' : "Field--item"}`}
                                    // className="Field--item"
                                    // className={input-form ${formik.touched.lastName && formik.errors.lastName ? 'input-form__invalid' : "Field--item"}}

                                />
                                <div className="Form__item--error">
                                    <ErrorMessage name='password' />
                                </div>
                            </div>
                            <div className='Form__submit'>
                                <button className='Form__submit--btn' type="submit" 
                                // onClick={() => setEntranceContext({'booleanInput':true})}
                                >Enter</button>
                            </div>
                        </Form>
                    </Formik>
                </div>

            </div>
        </div>
    )
}

export default FormContent