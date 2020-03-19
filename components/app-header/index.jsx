import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isLoading } from '../../selectors/loader'
import useLocale from '../../hooks/locale'
import { ThemeContext } from '../../context/theme'
import Button from '@material-ui/core/Button'
import { unsetSession } from '../../store/actions'


function AppHeader() {
    const loading = useSelector(isLoading)
    const { dashboard } = useLocale()
    const { texts } = useContext(ThemeContext)
    const dispatch = useDispatch()

    return (
        <header className='header'>
            <AppBar position="fixed">
                <Toolbar>
                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <h1 style={{ fontSize: texts.sizeTitle1}}>
                            {dashboard.title}
                            </h1>
                        </Grid>
                        <Grid item md={6} container direction="row" justify="flex-end">
                              <Button onClick={() => dispatch(unsetSession())} size="small" color="primary" variant="contained">
                              SALIR
                            </Button>
                        </Grid>
                        </Grid>
                </Toolbar>
                {loading ? <LinearProgress /> : null}
            </AppBar>
            <style jsx>{`
                .header{
                    margin-bottom: 80px;
                }
            `}</style>
        </header>
    )
}

export default AppHeader