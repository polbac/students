import 'date-fns'
import { PaymentMethodSchema } from '../../schemas/paymentMethod'

import {
    Formik,
    Form,
    Field,
  } from 'formik'

import useMedia from 'use-media'

import Alert from '@material-ui/lab/Alert';
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import apiClient from '../../lib/client'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import useLocale from '../../hooks/locale'
import FieldError from '../field-error'
import Funny from '../funny'
import React, { useState } from 'react'

const PAYMENT_METHOD_CC_ID = 1

function PaymentMethodForm(props) {
    let { countries, careers, paymentMethodOptions } = props

    const [ done, setDone] = useState(false)
    const [ serverError, setServerError] = useState(false)

    const initialValues = { 
      name: '', 
      email: '',
      career: -1,
      birth_date: new Date(),
      country: -1,
      city: "",
      phone_number: '',
      payment_method: -1,
      installments: 1
    }

    const installments = [1, 3, 6]
    const { paymentMethodForm: { form } } = useLocale()
    const { paymentMethodForm } = useLocale()
    const isXs = useMedia({maxWidth: '600px'});
    const date = new Date()
    const l = form

    if (done) {      
      return <SuccessMessage />
    }

    return (
        <React.Fragment>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Formik
                initialValues={initialValues}
                validationSchema={PaymentMethodSchema}
                onSubmit={(values, actions) => {
                  actions.setSubmitting(true);
                  setServerError(false)
                  apiClient.post('student/form', values)
                    .then(res => {
                      if (!res.ok) {
                        setServerError(true)
                        actions.setSubmitting(false)
                        return
                      }
                      setDone(true)
                    })
                    .catch(err => {
                      setServerError(true)
                      actions.setSubmitting(false)
                    })

                }}
                render={formikBag => (
                  <Form>
                  <Grid container spacing={3}>
                    
                  <Grid item md={12}>
                      <h3>
                        {paymentMethodForm.subtitle}
                      </h3>
                  </Grid>
                  
                  {serverError && <Alert severity="error" fullWidth>{paymentMethodForm.serverError}</Alert>}

                  <Grid item md={12}>
                      <h4>
                        {paymentMethodForm.personal}
                      </h4>
                  </Grid>
                    
                    <Grid item md={6} xs={12}>
                      <Field
                        name="name"
                        render={({ field, form, meta }) => (
                          <FormControl fullWidth>
                            <TextField 
                              value={field.value} 
                              label={l.name.label}
                              {...field}
                            />
                            <FieldError>{meta.touched && meta.error && meta.error}</FieldError>
                          </FormControl>
                        )}
                      />
                    </Grid>
                    
                    <Grid item md={6} xs={12}>
                      <Field
                        name="email"
                        render={({ field, form, meta }) => (
                          <FormControl fullWidth>
                            <TextField 
                              value={field.value} 
                              label={l.email.label} 
                              id={l.email.label} 
                              {...field}
                            />
                            <FieldError>{meta.touched && meta.error && meta.error}</FieldError>
                            </FormControl>
                        )}
                      />
                    </Grid>

                    <Grid item md={12} xs={12}>
                    <Field
                      name="career"
                      render={({ field, form, meta }) => (
                        <FormControl fullWidth>
                          <TextField
                          label={l.career.label}
                          id="career"
                          select
                          {...field}
                          >
                          {careers.map(option => (
                            <MenuItem key={option.id} value={option.id}>
                              {option.name}
                            </MenuItem>
                          ))}
                          </TextField>
                          <FieldError>{meta.touched && meta.error && meta.error}</FieldError>
                          </FormControl>
                      )}
                    />
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <Field
                        name="birth_date"
                        render={({ field, form, meta }) => (
                          <FormControl fullWidth>
                          <KeyboardDatePicker
                            variant="inline"
                            disableToolbar
                            format="MM/dd/yyyy"
                            label={l.birthdate.label}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                            name="birth_date"
                            value={field.value}
                            onChange={value => {
                              form.setFieldValue("birth_date", value)
                            }}
                          />
                          <FieldError>{meta.touched && meta.error && meta.error}</FieldError>
                            </FormControl>
                        )}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Field
                        name="phone_number"
                        render={({ field, form, meta }) => (
                          <FormControl fullWidth>
                            <TextField value={field.value} label={l.phone.label} id={l.email.label} {...field} aria-describedby={l.email.label} />
                            <FieldError>{meta.touched && meta.error && meta.error}</FieldError>
                            </FormControl>
                        )}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Field
                        name="country"
                        render={({ field, form, meta }) => (
                          <FormControl fullWidth>
                            <TextField
                            label={l.country.label}
                            value={field.value}
                            select
                            {...field}
                            >
                            {countries.map(option => (
                              <MenuItem key={option.id} value={option.id}>
                                {option.name}
                              </MenuItem>
                            ))}
                            </TextField>
                            <FieldError>{meta.touched && meta.error && meta.error}</FieldError>
                            </FormControl>
                        )}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                    <Field
                      name="city"
                      render={({ field, form, meta }) => (
                        <FormControl fullWidth>
                          <TextField label={l.city.label} id="city" {...field} aria-describedby={l.city.label} />
                          <FieldError>{meta.touched && meta.error && meta.error}</FieldError>
                          </FormControl>
                      )}
                    />
                    </Grid>


                    <Grid item lg={12} xs={12}>
                        <h4>
                          {paymentMethodForm.payment}
                        </h4>
                    </Grid>

                    <Grid item lg={12} xs={12}>
                      <Field
                          name="payment_method"
                          render={({ field, form, meta }) => (
                            <FormControl fullWidth>
                              <TextField
                              label={l.paymentMethod.label}
                              value={field.value}
                              select
                              {...field}
                              >
                              {paymentMethodOptions.map(option => (
                                <MenuItem key={option.id} value={option.id}>
                                  {option.name}
                                </MenuItem>
                              ))}
                              </TextField>
                              <FieldError>{meta.touched && meta.error && meta.error}</FieldError>
                              </FormControl>
                          )}
                        />
                    </Grid>

                    {formikBag.values.payment_method === PAYMENT_METHOD_CC_ID && (
                      <Grid item lg={12} xs={12}>
                        <Field
                            name="installments"
                            render={({ field, form, meta }) => (
                              <FormControl fullWidth>
                                <TextField
                                label={l.installments.label}
                                value={field.value}
                                select
                                {...field}
                                >
                                {installments.map(value => (
                                  <MenuItem key={value} value={value}>
                                    {value}
                                  </MenuItem>
                                ))}
                                </TextField>
                                <FieldError>{meta.touched && meta.error && meta.error}</FieldError>
                                </FormControl>
                            )}
                          />
                      </Grid>
                    )}
                    
                    <Grid item lg={12} xs={12}>
                      {!formikBag.isSubmitting ? <Button size={'large'} fullWidth={isXs} variant="contained" color="primary" type="submit">Enviar</Button> :<CircularProgress />}  
                    </Grid>
                    
                    </Grid>
                    
                  </Form>
                )}
              />
            
          </MuiPickersUtilsProvider>
        </React.Fragment>
      );
}

function SuccessMessage() {
  const { paymentMethodForm } = useLocale()
  return (
    <React.Fragment>
    <h3 className='success-text'>{paymentMethodForm.success}</h3>
    <Funny />
    <style jsx>{`
      .success-text{
        margin-bottom: 50px;
      }
    `}</style>
  </React.Fragment>
  )
}

export default PaymentMethodForm