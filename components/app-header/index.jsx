import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { isLoading } from '../../selectors/loader'
import useLocale from '../../hooks/locale'
import { ThemeContext } from '../../context/theme'

function AppHeader() {
    const loading = useSelector(isLoading)
    const { dashboard } = useLocale()
    const { texts } = useContext(ThemeContext)
    return (
        <header className='header'>
            <AppBar position="fixed">
                <Toolbar>
                    <h1 style={{ fontSize: texts.sizeTitle1}}>
                    {dashboard.title}
                    </h1>
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