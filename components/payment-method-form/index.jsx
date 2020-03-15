import 'date-fns'
import { PaymentMethodSchema } from '../../schemas/paymentMethod'

import {
    Formik,
    Form,
    Field,
  } from 'formik'

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

function PaymentMethodForm(props) {
  const { countries, careers } = props
  const [ done, setDone] = useState(false)

    const initialValues = { 
      name: '', 
      email: '',
      career: '',
      birthdate: new Date(),
      country: '',
      city: '',
      phone: '',
    }
    const { paymentMethodForm: { form } } = useLocale()
    const { paymentMethodForm} = useLocale()

    const date = new Date()
    const l = form

    if (done) {
      
      return (
        <React.Fragment>
          <h3>{paymentMethodForm.success}</h3>
          <Funny />
        </React.Fragment>
      )
    }

    return (
        <React.Fragment>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Formik
                initialValues={initialValues}
                validationSchema={PaymentMethodSchema}
                onSubmit={(values, actions) => {
                  actions.setSubmitting(true);
                  apiClient.post('student', values)
                    .then(b => console.log(b))
                    .catch(err => console.log('err', err))

                }}
                render={formikBag => (
                  <Form>
                  <Grid container spacing={3}>
                  <h3>
                    {paymentMethodForm.subtitle}
                  </h3>
                    <Grid item xs={6}>
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
                    
                    <Grid item xs={6}>
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

                    <Grid item xs={12}>
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

                    <Grid item xs={6}>
                      <Field
                        name="birdate"
                        render={({ field, form, meta }) => (
                          <FormControl fullWidth>
                          <KeyboardDatePicker
                            disableToolbar
                            format="MM/dd/yyyy"
                            label={l.birthdate.label}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                            {...field}
                          />
                          <FieldError>{meta.touched && meta.error && meta.error}</FieldError>
                            </FormControl>
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        name="phone"
                        render={({ field, form, meta }) => (
                          <FormControl fullWidth>
                            <TextField value={field.value} label={l.phone.label} id={l.email.label} {...field} aria-describedby={l.email.label} />
                            <FieldError>{meta.touched && meta.error && meta.error}</FieldError>
                            </FormControl>
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
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
                    <Grid item xs={6}>
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
                    
                    <Grid item>
                      {!form.isSubmitting ? <Button variant="contained" color="primary" type="submit">Enviar</Button> :<CircularProgress />}  
                    </Grid>
                    </Grid>
                  </Form>
                )}
              />
            
          </MuiPickersUtilsProvider>
        </React.Fragment>
      );
}

export default PaymentMethodForm