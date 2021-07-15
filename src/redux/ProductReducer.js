import db, { storage, firebase } from "../firebase/fbConfig";

const SET_PRODUCT = 'SET_PRODUCT'
const SET_IMAGES = 'SET_IMAGES'
const REMOVE_IMAGE = 'REMOVE_IMAGE'
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'
const SET_UPLOAD_MESSAGE = 'SET_UPLOAD_MESSAGE'
const UNSET_PRODUCT = 'UNSET_PRODUCT'

const initialState = {
    product: null,
    errorMessage: '',
    succesMessage: '',
    images: []

}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case UNSET_PRODUCT:
            return {
                ...state,
                product: null
            }
        case SET_IMAGES:
            return {
                ...state,
                images: [...state.images, action.payload]
            }
        case REMOVE_IMAGE: {
            let imagesCopy = state.images.filter(item => item.name !== action.payload.name)
            return {
                ...state,
                images: imagesCopy
            }
        }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload
            }
        case SET_UPLOAD_MESSAGE:
            return {
                ...state,
                succesMessage: action.payload
            }
        default:
            return state;
    }
}

const setProductData = (payload) => {
    return {
        type: "SET_PRODUCT",
        payload
    }
}
export const setImages = (payload) => {
    return {
        type: "SET_IMAGES",
        payload
    }
}
export const removeImage = (payload) => {
    return {
        type: "REMOVE_IMAGE",
        payload
    }
}
const setErrorMessage = (payload) => {
    return {
        type: "SET_ERROR_MESSAGE",
        payload
    }
}
export const unsetProduct = () => {
    return {
        type: "UNSET_PRODUCT"
    }
}
const setUploadMessage = (payload) => {
    return {
        type: "SET_UPLOAD_MESSAGE",
        payload
    }
}

export const getProductData = (id, category) => {
    return async (dispatch) => {
        const docRef = db.collection(category).doc(id);
        await docRef.get().then((doc) => {
            if (doc.exists) {
                dispatch(setProductData(doc.data()))
                dispatch(setErrorMessage(''))
            } else {

                dispatch(setErrorMessage('პროდუქტი არ მოიძებნა!'))
            }
        }).catch((error) => {
            dispatch(setErrorMessage('დაფიქსირდა შეცდომა. კიდევ სცადეთ.'))
        });
    }
}


export const uploadProductImage = (uid, category, productId, files) => {
    return (dispatch) => {
        try {
            const docRef = db.collection(category).doc(productId);
            const storageRef = storage.ref(`images/${productId}`);
            files.map((file => {
                const fileRef = storageRef.child(file.name)
                fileRef.put(file).then(() => {
                    fileRef.getDownloadURL().then(function (url) {
                        docRef.set(
                            {
                                images: firebase.firestore.FieldValue.arrayUnion({ url: url })
                            },
                            { merge: true }
                        )
                    });
                })


            }))
            dispatch(setUploadMessage('სურათები წარმატებით დაემატა.'))
        }
        catch (err) {
            console.log(err)
            dispatch(setUploadMessage('სურათების ატვირთვა ვერ მოხერხდა'))
        }
    }
}

export default ProductReducer