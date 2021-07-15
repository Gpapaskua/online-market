import { auth, provider } from "../firebase/fbConfig"
const SET_REGISTRATION_SUCCES = 'SET_REGISTRATION_SUCCES'
const UNSET_USER = 'UNSET_USER'
const SET_USER = 'SET_USER'
const SET_ERROR = 'SET_ERROR'
const SET_PASSWORD_RESET = 'SET_PASSWORD_RESET'
const SET_IS_LOGGED = 'SET_IS_LOGGED'
const SET_UPDATE_NAME = 'SET_UPDATE_NAME'
const SET_EMAIL_VERIFICATION = 'SET_EMAIL_VERIFICATION'


const initialState = {
    currentUser: null,
    registrationSucces: false,
    isLogged: false,
    error: '',
    passwordReset: '',
    emailVerification: '',
    updateNameMessage: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGISTRATION_SUCCES:
            return {
                ...state,
                registrationSucces: action.payload
            }
        case UNSET_USER:
            return {
                ...state,
                currentUser: null,
                isLogged: false
            }
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case SET_EMAIL_VERIFICATION:
            return {
                ...state,
                emailVerification: action.payload
            }
        case SET_PASSWORD_RESET:
            return {
                ...state,
                passwordReset: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SET_IS_LOGGED:
            return {
                ...state,
                isLogged: action.payload
            }
        case SET_UPDATE_NAME:
            return {
                ...state,
                updateNameMessage: action.payload
            }
        default:
            return state;
    }
}

export const setUser = (payload) => {
    return {
        type: "SET_USER",
        payload
    }
}
export const setRegistrationSuccess = (payload) => {
    return {
        type: "SET_REGISTRATION_SUCCES",
        payload
    }
}
export const setPasswordResetMessage = (payload) => {
    return {
        type: "SET_PASSWORD_RESET",
        payload
    }
}
export const setLoading = (payload) => {
    return {
        type: "SET_LOADING",
        payload
    }
}
export const setError = (payload) => {
    return {
        type: "SET_ERROR",
        payload
    }
}
export const unsetUser = () => {
    return {
        type: "UNSET_USER"
    }
}
const setIsLogged = (payload) => {
    return {
        type: "SET_IS_LOGGED",
        payload
    }
}
const setEmailVerification = (payload) => {
    return {
        type: "SET_EMAIL_VERIFICATION",
        payload
    }
}
const setUpdateNameMessage = (payload) => {
    return {
        type: "SET_UPDATE_NAME",
        payload
    }
}

export const signUp = (formData) => async dispatch => {

    try {
        auth.createUserWithEmailAndPassword(formData.email, formData.password)
            .then((resp) => {
                dispatch(setRegistrationSuccess(true))
                dispatch(setUser(resp.user.uid, resp.user.email))
                dispatch(setIsLogged(true))
            })
            .catch(function (error) {
                dispatch(setError('დაფიქსირდა შეცდომა!'))
            });
    } catch (err) {
        dispatch(setError('დაფიქსირდა შეცდომა!'))
    }


}
export const signIn = (email, password) => async dispatch => {
    try {
        auth.signInWithEmailAndPassword(email, password)
            .then((resp) => {
                console.log('here')
                dispatch(setUser(resp.user.uid, resp.user.email))
                dispatch(setIsLogged(true))
                dispatch(setError(''))
            })
            .catch((error) => {
                dispatch(setError('იმეილი ან პაროლი არასწორია!'))
            });
    } catch (err) {
        dispatch(setError('დაფიქსირდა შეცდომა, მოგვიანებით სცადეთ.'))
    }
}

export const signInWithGoogle = () => {
    return (dispatch) => {
        auth.signInWithPopup(provider).then((resp) => {
            dispatch(setUser(resp.user))
            dispatch(setIsLogged(true))
        })
            .catch((error) => alert(error.message))
    }
}
export const sendPasswordResetEmail = (email) => {
    return (dispatch) => {
        auth.sendPasswordResetEmail(email)
            .then(() => {
                dispatch(setPasswordResetMessage('პაროლის შესაცვლელად შეამოწმეთ თქვენი იმეილი.'))
            })
            .catch((error) => {
                dispatch(setPasswordResetMessage('დაფიქსირდა შეცდომა!'))
            });
    }
}

export const getUser = () => {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUser(user));
                dispatch(setIsLogged(true));
            }
        })
    }
}

export const logOut = () => async dispatch => {
    try {
        auth.signOut()
            .then(() => {
                dispatch(unsetUser())
                dispatch(setIsLogged(false))
            })
            .catch((err) => {
                console.log(err)
            });
    } catch (err) {
        console.log(err)
    }
}
export const updateDisplayName = (name) => async dispatch => {
    try {
        const user = auth.currentUser;
        user.updateProfile({
            displayName: name
        }).then(() => {
            dispatch(setUpdateNameMessage('სახელის შეცვლა დასრულდა წარმატებით'))
        }).catch((error) => {
            dispatch(setUpdateNameMessage('სახელის შეცვლა ვერ მოხერხდა'))
        });
    }
    catch (err) {
        dispatch(setUpdateNameMessage('დაფიქსირდა შეცდომა!'))
    }
}
export const verifyEmail = () => async dispatch => {
    try {
        const user = auth.currentUser
        await user.sendEmailVerification();
        dispatch(setEmailVerification('შეამოწმეთ მეილი.'))
    }
    catch (err) {
        dispatch(setEmailVerification('დაფიქსირდა შეცდომა!'))
    }
}

export default authReducer
