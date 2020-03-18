import Router from 'next/router'
import apiClient from '../lib/client'

export const SHOW_MAIN_ERROR = "SHOW_MAIN_ERROR"

export const SHOW_MAIN_LOADER = "SHOW_MAIN_LOADER"
export const HIDE_MAIN_LOADER = "HIDE_MAIN_LOADER"

export const SET_SESSION = "SET_SESSION"
export const UNSET_SESSION = "UNSET_SESSION"
export const AUTH_NOT_FOUND = "AUTH_NOT_FOUND"
export const AUTH_SERVER_ERROR = "AUTH_SERVER_ERROR"
export const AUTH_LOADING = "AUTH_LOADING"
export const AUTH_NOT_LOADING = "AUTH_NOT_LOADING"

export const FETCH_LIST = "FETCH_LIST"
export const SET_LIST = "SET_LIST"
export const SET_LIST_FILTER = "SET_LIST_FILTER"

export const SET_EDIT = "SET_EDIT"
export const UNSET_EDIT = "UNSET_EDIT"
export const SAVE_STUDENT = "SAVE_STUDENT"

export const FETCH_OPTIONS = "FETCH_OPTIONS"
export const SET_OPTIONS = "SET_OPTIONS"

export const authorize = (email, password) => dispatch => {
    dispatch(authSetLoading())

    apiClient
        .post('auth/login', {
            email,
            password,
        })
        .then(async res => {
            const session = await res.json()
            
            dispatch(authUnsetLoading())

            if (session.success) {
                const { body: { session: { email, token } } } = session
                dispatch(setSession(email, token))
                dispatch(saveSession(email, token))
                return
            }

            dispatch(authNotFound())
            
        })
        .catch(err => {
            dispatch(authUnsetLoading())
            dispatch(authServerError())
        })
    
}

export const saveStudent = student => dispatch => {
    apiClient
        .put(`student/${student.id}`, student)
        .then(res => {
            Router.push('/dashboard')
        })
        .catch(err => {

        })
    
}

const shouldFetchOptions = (getState) => {
    const { options: { careers, countries, paymentMethodOptions } } = getState()
    
    if (!careers || !countries || !paymentMethodOptions) {
        return true
    }

    return false
}

export const fetchStudentEdit = id => (dispatch, getState) => {
    if (shouldFetchOptions(getState)) {
        dispatch(fetchOptions()) 
    }

    dispatch(showMainLoader())

    apiClient
        .get(`student/${id}`)
        .then(async res => {
            dispatch(hideMainLoader())
            const studentResponse = await res.json()
            const { body: { student, countries, careers, paymentMethodOptions }} = studentResponse
            dispatch(setStudentEdit(student, countries, careers, paymentMethodOptions))
        })
        .catch(err => {
            console.log(err)
            dispatch(hideMainLoader())
            dispatch(showMainError())
        })
}

export const fetchList = () => (dispatch, getState) => {
    dispatch(showMainLoader())

    if (shouldFetchOptions(getState)) {
        dispatch(fetchOptions()) 
    }
    
    const { list: { filters }} = getState()
    apiClient
        .get('student', filters, true)
        .then(async res => {
            dispatch(hideMainLoader())
            const studentsJson = await res.json()
            const { body: { students } } = studentsJson
            dispatch(setList(students))
        })
        .catch(err => {
            console.log(err)
            dispatch(hideMainLoader())
            dispatch(showMainError())
        })
}

export const setList = students => ({
    type: SET_LIST,
    students,
})

export const setStudentEdit = (student, countries, careers, paymentMethodOptions) => ({
    type: SET_EDIT,
    student, 
    countries, 
    careers, 
    paymentMethodOptions
})

export const unsetStudentEdit = () => ({
    type: UNSET_EDIT,
})


export const saveSession = (email, token) => {
    localStorage.setItem('email', email)
    localStorage.setItem('token', token)
}


export const setSession = (email, token) => ({
    type: SET_SESSION,
    email,
    token,
})

export const unsetSession = () => dispatch => {
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    dispatch({
        type: UNSET_SESSION
    })
}

export const fetchOptions = () => dispatch => {
    dispatch(showMainLoader())
    apiClient
        .get('options', {}, true)
        .then(async res => {
            const responseJson = await res.json()
            const { body: { countries, careers, paymentMethodOptions } } = responseJson
            dispatch(setOptions(countries, careers, paymentMethodOptions))
        })
        .catch(err => console.log(err))
}

export const setOptions = (countries, careers, paymentMethodOptions) => ({
    type: SET_OPTIONS,
    countries, careers, paymentMethodOptions
})


export const authNotFound = () => ({
    type: AUTH_NOT_FOUND,
})

export const authServerError = () => ({
    type: AUTH_SERVER_ERROR,
})

export const authSetLoading = () => ({
    type: AUTH_LOADING,
})

export const authUnsetLoading = () => ({
    type: AUTH_NOT_LOADING,
})

export const showMainLoader = () => ({
    type: SHOW_MAIN_LOADER,
})

export const hideMainLoader = () => ({
    type: HIDE_MAIN_LOADER,
})

export const setFilterList = (name, email, career, country) => ({
    type: SET_LIST_FILTER,
    name, email, career, country
})

export const showMainError = () => ({
    type: SHOW_MAIN_ERROR
})