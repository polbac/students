import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useSelector } from 'react-redux'
import { isLoading } from '../../selectors/loader'
import useLocale from '../../hooks/locale'

function AppHeader() {
    const loading = useSelector(isLoading)
    const { dashboard } = useLocale()
    return (
        <header className='header'>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" >
                    {dashboard.title}
                    </Typography>
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