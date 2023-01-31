import {
    createSlice
} from '@reduxjs/toolkit'


//initial state setup 

const initialState = {
    auth: false,
    auth_details: {},
    loading: false,
    token: "",
    sessionError: false
}

//create Reducer

const AuthReducer = createSlice({
    name: 'AUTH',
    initialState,
    reducers: {
        Auth_Success: (state, action) => {
            window.localStorage.setItem('auth', true)
            window.localStorage.setItem('user', JSON.stringify(action.payload.user))
            window.localStorage.setItem('token', JSON.stringify(action.payload.token))
            return {
                ...state,
                auth: true,
                auth_details: action.payload.user,
                token: action.payload.token
            }
        },
        Auth_Restore: (state, action) => {
            return {
                ...state,
                auth: true,
                auth_details: action.payload.user,
                token: action.payload.token
            }
        },
        SignOut: (state, action) => {
            localStorage.setItem('token', null)
            localStorage.setItem('auth', false)
            localStorage.setItem('user', null)
            localStorage.clear()
            return {
                ...state,
                auth: false,
                auth_details: {},
                token: "",
                sessionError: true
            }
        }
    }
})

export const {
    Auth_Success,
    Auth_Restore,
    SignOut
} = AuthReducer.actions;
export default AuthReducer.reducer