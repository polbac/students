import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isLoading } from '../../selectors/loader'
import { isAuthorized } from '../../selectors/session'
import useLocale from '../../hooks/locale'
import { ThemeContext } from '../../context/theme'
import Button from '@material-ui/core/Button'
import { unsetSession } from '../../store/actions'
import useMedia from 'use-media'

function AppHeader() {
    const loading = useSelector(isLoading)
    const authorized = useSelector(isAuthorized)
    
    const { dashboard } = useLocale()
    const { texts } = useContext(ThemeContext)
    const dispatch = useDispatch()
    const isXs = useMedia({maxWidth: '600px'});

    return (
        <header className='header'>
            <AppBar position="fixed">
                <Toolbar>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12} >
                            <h1 style={{ textAlign: isXs ? 'center' : 'flex-start', fontSize: texts.sizeTitle1}}>
                            {dashboard.title}
                            </h1>
                        </Grid>
                        {authorized && (
                            <Grid item md={6} container direction="row" justify={isXs ? 'center' : 'flex-end'} xs={12}>
                                <Button onClick={() => dispatch(unsetSession())} size="small" color="primary" variant="contained">
                                SALIR
                                </Button>
                            </Grid>
                        )}
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