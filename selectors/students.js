export const selectList = store => store.list.students
export const selectEdit = store => ({
    student: store.edit.student,
    careers: store.edit.careers,
    countries: store.edit.countries,
    paymentMethodOptions: store.edit.paymentMethodOptions,
})