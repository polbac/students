import * as Yup from 'yup';
import useLocale from '../hooks/locale'

const { paymentMethodForm: { form } } = useLocale()

const PaymentMethodSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, form.name.error)
        .max(50, form.name.error)
        .required(form.name.error),
    career: Yup.string()
        .required(form.email.error),
    birthdate: Yup.date()
        .required(form.birthdate.error),
    country: Yup.string()
        .required(form.country.error),
    city: Yup.string()
        .required(form.city.error),
    phone: Yup.string()
        .required(form.phone.error),
    email: Yup.string()
        .email('Invalid email')
        .required(form.email.error),
})

export { PaymentMethodSchema }