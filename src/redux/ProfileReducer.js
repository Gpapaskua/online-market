import db, { storage } from '../firebase/fbConfig'
import { firebase } from '../firebase/fbConfig'

const SET_ADS = 'SET_ADS'
const SET_MESSAGE = 'SET_MESSAGE'


const initialState = {
    ads: [],
    message: ''
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADS:
            return {
                ...state,
                ads: action.payload
            }
        case SET_MESSAGE:
            return {
                ...state,
                message: action.payload
            }

        default:
            return state;
    }

}
const setAds = (payload) => {
    return {
        type: 'SET_ADS',
        payload
    }
}
const setMessage = (payload) => {
    return {
        type: 'SET_MESSAGE',
        payload
    }
}

export const setMyAds = (userId) => async dispatch => {
    try {
        await db.collection('users').doc(userId).get()
            .then((resp) => {
                dispatch(setAds(resp.data().products))
            })


    }
    catch (err) {
        dispatch(setMessage('დაფიქსირდა შეცდომა!'))
    }
}
export const deleteProduct = (uid, category, productId, tittle, created) => async dispatch => {
    try {
        await db.collection(category).doc(productId).delete()
            .then(() => {
                db.collection('users').doc(uid).set({
                    products: firebase.firestore.FieldValue.arrayRemove({ category, id: productId, tittle, created })
                },
                    { merge: true })
                storage.ref(`images/${productId}`).delete()
                    .then(() => {

                    })
                    .catch((err) => {

                    })
            })
            .catch(((err) => {
                console.log(err)
                dispatch(setMessage('დაფიქსირდა შეცდომა!'))
            }))

    }
    catch (err) {
        console.log(err)
    }
}


export default ProfileReducer

