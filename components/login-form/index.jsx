import {Formik, Form, Field} from 'formik'
import useMedia from 'use-media'
import Alert from '@material-ui/lab/Alert';
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import useLocale from '../../hooks/locale'
import FieldError from '../field-error'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import React, { useState } from 'react'
import { UserSchema } from '../../schemas/user'
import { authorize } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthErrors, selectAuthLoading } from '../../selectors/session'

function LoginForm(props) {
    const { authError, authServerError } = useSelector(selectAuthErrors)
    const { loading } = useSelector(selectAuthLoading)

    const initialValues = { 
      email: '', 
      password: '',
    }

    const dispatch = useDispatch()
    const { login } = useLocale()
    const isXs = useMedia({maxWidth: '600px'});
    const l = login

    return (
        <React.Fragment>
        <section className="login-form">
            <Container>
                <Grid container justify="center">

                    <Grid  md="3" xs="12" >
                    <Card>
                        <CardContent>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={UserSchema}
                        onSubmit={(values, actions) => {
                            dispatch(authorize(values.email, values.password))
                        }}
                        render={formikBag => (
                        <Form>
                        <Grid container spacing={3}>
                            
                        <Grid item md={12}>
                            <h3>
                                {login.subtitle}
                            </h3>
                        </Grid>
                        
                        

                            <Grid item md={12} xs={12}>
                                <h3>Ingresa a la plataforma</h3>
                            </Grid>
                            
                            <Grid item md={12} xs={12}>
                                {authError && <Alert severity="error" fullWidth>{l.authError}</Alert>}
                                {authServerError && <Alert severity="error" fullWidth>{l.serverError}</Alert>}
                            </Grid>

                            
                            <Grid item md={12} xs={12}>
                            <Field
                                name="email"
                                render={({ field, form, meta }) => (
                                <FormControl fullWidth>
                                    <TextField 
                                    value={field.value} 
                                    label={l.email.label}
                                    {...field}
                                    />
                                    <FieldError>{meta.touched && meta.error && meta.error}</FieldError>
                                </FormControl>
                                )}
                            />
                            </Grid>
                            
                            <Grid item md={12} xs={12}>
                            <Field
                                name="password"
                                render={({ field, form, meta }) => (
                                <FormControl fullWidth>
                                    <TextField 
                                    type="password"
                                    value={field.value} 
                                    label={l.password.label} 
                                    id={l.password.label} 
                                    {...field}
                                    />
                                    <FieldError>{meta.touched && meta.error && meta.error}</FieldError>
                                    </FormControl>
                                )}
                            />
                            </Grid>
                            
                            <Grid item xs={12} md={12}>
                            {!loading ? <Button size={'large'} fullWidth={isXs} variant="contained" color="primary" type="submit">{l.login.label} </Button> :<CircularProgress />}  
                            </Grid>
                            
                            </Grid>
                            
                        </Form>
                        )}
                    />
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
            </Container>
            </section>
            <style jsx>{`
            .login-form{
                margin: auto;
                margin-top: 70px;
            }
        `}</style>
        </React.Fragment>
      );
}

export default LoginForm