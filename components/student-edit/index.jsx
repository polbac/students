import 'date-fns'
import { PaymentMethodSchema } from '../../schemas/paymentMethod'
import {
  Formik,
  Form,
  Field,
} from 'formik'
import useLocale from '../../hooks/locale'
import { useEffect, useContext } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import useMedia from 'use-media'
import Alert from '@material-ui/lab/Alert';
import FormControl from '@material-ui/core/FormControl'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress'
import FieldError from '../field-error'
import { fetchStudentEdit, saveStudent, unsetStudentEdit } from '../../store/actions'
import { selectEdit } from '../../selectors/students'
import { selectOptions } from '../../selectors/options'
import { selectMainError } from '../../selectors/error'
import FetchError from '../fetch-error'
import {ThemeContext } from '../../context/theme'

const PAYMENT_METHOD_CC_ID = 1

function StudentEdit({ studentId }) {
  const dispatch = useDispatch()
  const { student } = useSelector(selectEdit)
  const { countries, careers, paymentMethodOptions } = useSelector(selectOptions)
  const mainError = useSelector(selectMainError)
  const isXs = useMedia({maxWidth: '600px'});
  const { edit, paymentMethodForm: { form } } = useLocale()
  const { paymentMethodForm } = useLocale()
  const serverError = false
  const { texts } = useContext(ThemeContext)

  useEffect(() => {
      dispatch(fetchStudentEdit(studentId))
      return () => dispatch(unsetStudentEdit(studentId))
  }, [])

  if (mainError) {
      return <FetchError />
  }

  if (!student || !countries || !careers || !paymentMethodOptions) {
    return <React.Fragment />
  }

  const installments = [1, 3, 6]

  const initialValues = { 
    id: student[0].id, 
    name: student[0].name, 
    email: student[0].email, 
    career: student[0].career.id,
    birth_date: student[0].birth_date,
    country: student[0].country.id,
    city: student[0].city,
    phone_number: student[0].phone_number,
    payment_method: student[0].payment_method,
    installments: student[0].installments,
  }


  const l = form
  
  return (
    <React.Fragment>
      <section className="edit-container">
        <Container maxWidth="md" >
            <Grid md="12">
            <h2 style={{ fontSize: texts.sizeTitle2}}>{edit.title}</h2>
            </Grid>
            <Grid md="12">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Formik
                initialValues={initialValues}
                validationSchema={PaymentMethodSchema}
                onSubmit={(values, actions) => {
                  dispatch(saveStudent(values))
                }}
                render={formikBag => (
                  <Form>
                  <Grid container spacing={3}>
                  
                  {serverError && <Alert severity="error" fullWidth>{paymentMethodForm.serverError}</Alert>}

                  <Grid item md={12}>
                      <h4>
                        {edit.personal}
                      </h4>
                  </Grid>
                    
                    <Grid item md={12} xs={12}>
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
                    
                    <Grid item md={12} xs={12}>
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

                    <Grid item md={12} xs={12}>
                      <Field
                        name="birth_date"
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
                            onChange={value => {
                                form.setFieldValue("birth_date", value)
                              }}
                          />
                          <FieldError>{meta.touched && meta.error && meta.error}</FieldError>
                            </FormControl>
                        )}
                      />
                    </Grid>
                    <Grid item md={12} xs={12}>
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
                    <Grid item md={12} xs={12}>
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
                    <Grid item md={12} xs={12}>
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


                    <Grid item md={12} xs={12}>
                        <h4>
                          {edit.payment}
                        </h4>
                    </Grid>

                    <Grid item md={12} xs={12}>
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
                      <Grid item md={12} xs={12}>
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
                    

                      {!formikBag.isSubmitting ? (
                        <Grid xs={12} md={12} container direction="row" item justify="flex-end" spacing={isXs ? 0 : 3}>
                          <Grid item md={3} xs={12}>
                            <Button size={'large'} fullWidth={true} variant="contained" color="primary" type="submit">Guardar</Button>
                          </Grid>
                          <Grid item md={3} xs={12}>
                            <Link href="/dashboard">
                              <Button size={'large'} fullWidth={true} variant="contained" color="secondary" type="button">Cancelar</Button>
                            </Link>
                          </Grid>
                        </Grid>
                      )
                        : <Grid direction="row" container justify="flex-end">
                            <Grid item >
                              <CircularProgress />
                            </Grid>
                        </Grid>}  
                    </Grid>
                    
                  </Form>
                )}
              />
            
          </MuiPickersUtilsProvider>
          </Grid>
        </Container>
      </section>
      <style jsx>{`
                h2{
                    padding-top: 20px;
                    padding-bottom: 20px;
                }
                .edit-container{
                  margin-bottom: 50px;
                }
            `}</style>
    </React.Fragment>
  )
}

export default StudentEdit