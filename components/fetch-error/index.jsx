import Container from '@material-ui/core/Container';
import useLocale from '../../hooks/locale'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
function FetchError() {
    const { error: { title } } = useLocale()
    return (
    <Container maxWidth="md" className='container'>
        <SentimentVeryDissatisfiedIcon fontSize="large"/>
        <h3> {title}</h3>
    </Container>
    )
}

export default FetchError