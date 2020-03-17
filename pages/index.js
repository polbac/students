import Head from 'next/head'
import Container from '@material-ui/core/Container'
import PaymentMethodForm from '../components/payment-method-form'
import CleanHeader from '../components/clean-header'
import useLocale from '../hooks/locale'
import apiClient from '../lib/client'

export default function Home({ countries, careers, paymentMethodOptions }) {
  const { paymentMethodForm } = useLocale()

  return (
    <div className="container">
    <Head>
    <title>Acámica - {paymentMethodForm.title}</title>
    </Head>
    <CleanHeader />
    <Container maxWidth="sm">
      <h1>
        {paymentMethodForm.title}
      </h1>
      <hr/>

      <PaymentMethodForm countries={countries} careers={careers} paymentMethodOptions={paymentMethodOptions} />
      
    </Container>
      
  </div>
  )
}

export async function getServerSideProps(context) {
  const countriesRequest = await apiClient.get('country')
  const countries = await countriesRequest.json()

  const careersRequest = await apiClient.get('career')
  const careers = await careersRequest.json()

  const paymentMethodOptionsRequest = await apiClient.get('payment-method-option')
  const paymentMethodOptions = await paymentMethodOptionsRequest.json()
  
  return {
    props: {
      countries: countries.body.countries,
      careers: careers.body.careers,
      paymentMethodOptions: paymentMethodOptions.body.paymentMethodOptions,
    }
  }
}