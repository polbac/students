import Head from 'next/head'
import {Provider} from 'react-redux';


import AppHeader from '../../../components/app-header'
import Protected from '../../../components/protected'
import StudentEdit from '../../../components/student-edit'
import useLocale from '../../../hooks/locale'
import store from '../../../store/store'
import apiClient from '../../../lib/client'

export default function StudentEditPage(props) {
  const { dashboard } = useLocale()
  const { id } = props
  return (
    <div className="container">

   <Provider store={store}>
      <Head>
          <title>{dashboard.title}</title>
        </Head>

      <AppHeader />
      <Protected>
          <StudentEdit studentId={id} />
      </Protected>
    </Provider>
  </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.query.id
    }
  }
}