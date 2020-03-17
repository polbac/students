import * as Yup from 'yup';
import useLocale from '../hooks/locale'

const { login } = useLocale()

const UserSchema = Yup.object().shape({
    email: Yup.string()
        .email(login.email.error)
        .required(login.email.error),
    password: Yup.string()
        .required(login.password.error),
})

export { UserSchema }