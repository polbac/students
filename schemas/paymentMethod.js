import * as Yup from 'yup';
import useLocale from '../hooks/locale'

const { paymentMethodForm: { form } } = useLocale()

const PaymentMethodSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, form.name.error)
        .max(50, form.name.error)
        .required(form.name.error),
    career: Yup.number()
        .positive(form.career.error)
        .required(form.career.error),
    birth_date: Yup.date()
        .required(form.birthdate.error),
    country: Yup.number()
        .positive(form.country.error)
        .required(form.country.error),
    city: Yup.string()
        .required(form.city.error),
    phone_number: Yup.string()
        .required(form.phone.error),
    email: Yup.string()
        .email(form.email.error)
        .required(form.email.error),
    payment_method: Yup.number()
        .positive(form.paymentMethod.error)
        .required(form.paymentMethod.error),
})

export { PaymentMethodSchema }