import { useSelector, useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl'
import LinearProgress from '@material-ui/core/LinearProgress';
import MenuItem from '@material-ui/core/MenuItem'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import isEqual from 'is-equal'
import {
    Formik,
    Form,
    Field,
  } from 'formik'
import { selectFilters } from '../../selectors/students'
import { selectOptions } from '../../selectors/options'
import { setFilterList, fetchList } from '../../store/actions'
import useLocale from '../../hooks/locale'

export default function StudentsListFilter() {
    const filters = useSelector(selectFilters)
    const options = useSelector(selectOptions)

    const dispatch = useDispatch()
    let { list: { name, email, career, country, seeAll } } = useLocale()

    if (options.careers !== null) {
        options.careers = [{ id: null, name: seeAll}, ...options.careers]
    }

    if (options.countries !== null) {
        options.countries = [{ id: null, name: seeAll}, ...options.countries]
    }
    
    const initialValues = { ...filters }

    return (
        <section className='filter'>
            <Card>
                <CardContent>
                    <Typography >
                        Filtros
                    </Typography>
                    <Formik
                        initialValues={initialValues}
                        validateOnChange={true}
                        validate={values => {
                            if(!isEqual(values, filters)) {
                                dispatch(setFilterList(values.name, values.email, values.career, values.country))
                                dispatch(fetchList())
                            }
                        }}
                        render={formikBag => (
                            <Form>
                                <Grid container  spacing={3} direction="row"alignItems="flex-end">                                    <Grid item spacing={0} xs="12" md="3">
                                        <Field
                                        name="name"
                                        render={({ field, form, meta }) => (
                                            <FormControl fullWidth>
                                            <TextField 
                                                size="small"
                                                value={field.value} 
                                                label={name}
                                                {...field}
                                            />
                                            </FormControl>
                                        )}
                                        />
                                    </Grid>
                                    <Grid item spacing={0} xs="12" md="3">
                                        <Field
                                        name="email"
                                        render={({ field, form, meta }) => (
                                            <FormControl fullWidth>
                                            <TextField 
                                                size="small"
                                                value={field.value} 
                                                label={email}
                                                {...field}
                                            />
                                            </FormControl>
                                        )}
                                        />
                                    </Grid>
                                    
                                    {/* Careers */}
                                    <Grid  item spacing={0} xs="12" md="3">
                                        {options.careers ? (
                                            <Field
                                                name="career"
                                                render={({ field, form, meta }) => (
                                                <FormControl fullWidth>
                                                    <TextField
                                                    label={career}
                                                    id="career"
                                                    select
                                                    {...field}
                                                    >
                                                    {options.careers.map(option => (
                                                    <MenuItem key={option.id} value={option.id}>
                                                        {option.name}
                                                    </MenuItem>
                                                    ))}
                                                    </TextField>

                                                    </FormControl>
                                                )}
                                            />
                                        ): <LinearProgress color="primary" />}
                                    </Grid>


                                    {/* Countries */}
                                    <Grid  item spacing={0} xs="12" md="3">
                                        {options.countries ? (
                                            <Field
                                                name="country"
                                                render={({ field, form, meta }) => (
                                                <FormControl fullWidth>
                                                    <TextField
                                                    label={country}
                                                    id="country"
                                                    select
                                                    {...field}
                                                    >
                                                    {options.countries.map(option => (
                                                        <MenuItem key={option.id} value={option.id}>
                                                            {option.name}
                                                        </MenuItem>
                                                    ))}
                                                    </TextField>

                                                    </FormControl>
                                                )}
                                            />
                                        ): <LinearProgress color="primary" />}
                                    </Grid>


                                </Grid> 
                            </Form>
                            )}
                    />
            </CardContent>
            </Card>
            <style jsx>{`
            .filter {
                margin-bottom:20px;
            }
            `}</style>
        </section>
    )
}