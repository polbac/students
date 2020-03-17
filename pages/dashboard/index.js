import Head from 'next/head'
import {Provider} from 'react-redux';


import AppHeader from '../../components/app-header'
import Protected from '../../components/protected'
import StudentList from '../../components/student-list'
import useLocale from '../../hooks/locale'
import store from '../../store/store'

export default function DashboardPage({ countries, careers, paymentMethodOptions }) {
  const { dashboard } = useLocale()

  return (
    <div className="container">
   

   <Provider store={store}>
   <Head>
      <title>{dashboard.title}</title>
    </Head>

   <AppHeader />
      <Protected>
          <StudentList />
      </Protected>
    </Provider>
  </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      
    }
  }
}