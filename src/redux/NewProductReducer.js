import db, { firebase } from '../firebase/fbConfig'


const SET_ERROR = 'SET_ERROR'
const SET_DATA = 'SET_DATA'
const SET_SPECIFICATIONS = 'SET_SPECIFICATIONS'
const SET_CATEGORY = 'SET_CATEGORY'
const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS'

const initialState = {
    addSuccess: false,
    data: null,
    category: null,
    error: ''

}

const NewProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case SET_SPECIFICATIONS:
            {
                let updatedData = { ...state.data }
                updatedData['specifications'] = { ...action.payload }

                return {
                    ...state,
                    data: updatedData
                }
            }
        case SET_DATA: {
            let updatedData = { ...state.data, ...action.payload }
            return {
                ...state,
                data: updatedData
            }
        }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                addSuccess: action.payload
            }

        default:
            return state;
    }

}

export const setAddSuccess = (payload) => {
    return {
        type: 'ADD_PRODUCT_SUCCESS',
        payload
    }
}
export const setError = (payload) => {
    return {
        type: 'SET_ERROR',
        payload
    }
}
export const setData = (payload) => {
    return {
        type: 'SET_DATA',
        payload
    }
}
export const setCategory = (payload) => {
    return {
        type: 'SET_CATEGORY',
        payload
    }
}
export const setSpecifications = (payload) => {
    return {
        type: 'SET_SPECIFICATIONS',
        payload
    }
}


export const setNewProduct = (newProduct, uid, author) => {
    return (dispatch) => {
        console.log(newProduct)
        let category = newProduct.category
        try {
            db.collection(category).add({
                data: newProduct,
                uid,
                author,
                created: firebase.firestore.FieldValue.serverTimestamp()
            })
                .then(function (docRef) {
                    db.collection(category).doc(docRef.id).set({
                        id: docRef.id
                    },
                        { merge: true })
                    db.collection('users').doc(uid).set({
                        products: firebase.firestore.FieldValue.arrayUnion({ id: docRef.id, category, tittle: newProduct.tittle, created: firebase.firestore.Timestamp.now() })
                    },
                        { merge: true }
                    )
                }
                )

            dispatch(setAddSuccess(true))
        } catch (err) {
            dispatch(setError('პროდუქტის დამატება ვერ მოხერხდა!'))
        }
    }

}

export default NewProductReducer

