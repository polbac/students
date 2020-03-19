import CleanHeader from '../components/clean-header'
import ErrorPage from '../components/fetch-error'
import Container from '@material-ui/core/Container'

function Error() {
    return (
        <React.Fragment>
            <CleanHeader/>
            <Container maxWidth="md" className='container'>
                <ErrorPage />
            </Container>
        </React.Fragment>
    )
  }
  export default Error