import { SET_OPTIONS, FETCH_OPTIONS, SET_EDIT, UNSET_EDIT, SHOW_MAIN_LOADER, HIDE_MAIN_LOADER, SET_SESSION, UNSET_SESSION, AUTH_NOT_FOUND, AUTH_SERVER_ERROR, AUTH_LOADING, AUTH_NOT_LOADING, SET_LIST, SET_LIST_FILTER } from './actions'

const initSession = {
    token: null,
    email: '',
    authorized: false,
    authError: false,
    authServerError: false,
    loading: false
}

const initList = {
    students: [],
    filters: {
        name: '',
        email: '',
        career: null,
        country: null
    },
    serverError: false
}

const initLoader = {
    loading: false,
}

const initEdit = {
    student: null,
    careers: null,
    countries: null,
    paymentMethodOptions: null,
}

const initOptions = {
    careers: null,
    countries: null,
    paymentMethodOptions: null,
}

const optionsReducer = (state = initOptions, action) => {
    switch (action.type) {
        case SET_OPTIONS:
            return {
                careers: action.careers,
                countries: action.countries,
                paymentMethodOptions: action.paymentMethodOptions,
            }
        default:
            return {
                ...state
            }
    }
}
const editReducer = (state = initEdit, action) => {
    switch (action.type) {
        case SET_EDIT:
            return {
                student: action.student,
                careers: action.careers,
                countries: action.countries,
                paymentMethodOptions: action.paymentMethodOptions,
            }
        case UNSET_EDIT:
            return {
                student: null,
                careers: null,
                countries: null,
                paymentMethodOptions: null,
            }            
        default:
            return {
                ...state
            }
    }
}

const loaderReducer = (state = initLoader, action) => {
    switch (action.type) {
        case SHOW_MAIN_LOADER:
            return {
                loading: true,
            }
        case HIDE_MAIN_LOADER:
            return {
                loading: false,
            }            
        default:
            return {
                ...state
            }
    }
}

const listReducer = (state = initList, action) => {
    switch (action.type) {
        case SET_LIST:
            return {
                ...state,
                serverError: false,
                students: action.students
            }

        case SET_LIST_FILTER:
            return {
                ...state,
                filters: {
                    name: action.name,
                    email: action.email,
                    career: action.career,
                    country: action.country
                }
            }
        default:
            return {
                ...state
            }
    }
}

const sessionReducer = (state = initSession, action) => {
    switch (action.type) {
        case SET_SESSION:
            return {
                ...state,
                email: action.email,
                token: action.token,
                authorized: true,
                authError: false,
                authServerError: false,
                loading: false,
            };
        case UNSET_SESSION:
            return {
                ...state,
                email: '',
                token: null,
                authorized: false,
                authError: false,
                authServerError: false,
            }
        case AUTH_SERVER_ERROR:
            return {
                ...state,
                authError: false,
                authServerError: true,
            }
        case AUTH_NOT_FOUND:
            return {
                ...state,
                authError: true,
                authServerError: false,
            }
        case AUTH_LOADING:
            return {
                ...state,
                authError: false,
                authServerError: false,
                loading: true,
            }
        case AUTH_NOT_LOADING:
            return {
                ...state,
                loading: false,
            }
            
        default:
            return {
                ...state
            }
    }
};

export {
    sessionReducer,
    listReducer,
    loaderReducer,
    editReducer,
    optionsReducer,
}