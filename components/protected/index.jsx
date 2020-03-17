import LoginForm from '../login-form'
import { useSelector } from 'react-redux'
import { isAuthorized } from '../../selectors/session'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSession } from '../../store/actions'

function Protected({ children }) {
    const authorized = useSelector(isAuthorized)
    const dispatch = useDispatch()

    useEffect(() => {
        const email = localStorage.getItem('email')
        const token = localStorage.getItem('token')

        if (email && token) {
            dispatch(setSession(email, token))
        }

    })
    
    return authorized ? 
        children : 
        <LoginForm />
}

export default Protected