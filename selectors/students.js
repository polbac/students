export const selectList = store => store.list.students
export const selectEdit = store => ({
    student: store.edit.student,
    careers: store.edit.careers,
    countries: store.edit.countries,
    paymentMethodOptions: store.edit.paymentMethodOptions,
})
export const selectFilters = store => ({
    name: store.list.filters.name,
    email: store.list.filters.email,
    career: store.list.filters.career,
    country: store.list.filters.country,
})