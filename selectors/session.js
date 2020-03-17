export const isAuthorized = store => store.session.authorized

export const selectToken = store => store.session.token

export const selectAuthErrors = store => ({
    authError: store.session.authError,
    authServerError: store.session.authServerError,
})

export const selectAuthLoading = store => ({
    loading: store.session.loading,
})
