import db from "../firebase/fbConfig"
import { firebase } from "../firebase/fbConfig"


const SET_MOBILE_PHONES = 'SET_MOBILE_PHONES'
const CLEAR_PRODUCTS = 'CLEAR_PRODUCTS'
const SET_SEARCH_STRING = 'SET_SEARCH_STRING'
const SET_RECENT_PRODUCTS = 'SET_RECENT_PRODUCTS'
const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'
const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS'
const SET_IS_LOADED = 'SET_IS_LOADED'
const SET_FAVORITES = 'SET_FAVORITES'
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'
const UNSET_ERROR_MESSAGE = 'UNSET_ERROR_MESSAGE'
const ADD_FAVORITE_MESSAGE = 'ADD_FAVORITE_MESSAGE'


const initialState = {
    products: [],
    errorMessage: '',
    recentProducts: null,
    searchResults: [],
    isLoaded: false,
    addFavoriteMessage: '',
    favorites: [],
    searchString: '',
    categories: [
        'mobile',
        'headphones',
        'desktopPC',
        'tv',
        'video',
        'laptops',
        'tablets',
        'smart-watches',
        'loud-speakers',
        'photo-cameras',
        'mp3-players',
        'drones',
        'computer-parts',
        'music-technic',
        'tv-equipment',
        'home-technic',
        'memory-cards'
    ]
}

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOBILE_PHONES:
            return {
                ...state, recentProducts: [...action.payload, state.recentProducts.mobiles = action.payload]
            }
        case SET_RECENT_PRODUCTS:
            {
                let arr = { ...state.recentProducts }
                let index = action.category
                arr[index] = action.data
                return {
                    ...state,
                    recentProducts: arr
                }
            }
        case SET_SEARCH_RESULTS:
            {

                return {
                    ...state,
                    searchResults: [...state.searchResults, action.payload]
                }
            }
        case CLEAR_PRODUCTS:
            return {
                ...state,
                products: []
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload
            }
        case UNSET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: ''
            }
        case CLEAR_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: []
            }
        case SET_SEARCH_STRING:
            return {
                ...state,
                searchString: action.payload
            }
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case SET_IS_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            }
        case ADD_FAVORITE_MESSAGE:
            return {
                ...state,
                addFavoriteMessage: action.payload
            }
        case SET_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            }
        default:
            return state;
    }
}

export const setSearchString = (payload) => {
    return {
        type: 'SET_SEARCH_STRING',
        payload
    }
}
const setAddFavoriteMessage = (payload) => {
    return {
        type: 'ADD_FAVORITE_MESSAGE',
        payload
    }
}

const setRecentProducts = (category, data) => {
    return {
        type: 'SET_RECENT_PRODUCTS',
        category,
        data
    }
}

const setProducts = (payload) => {
    return {
        type: 'SET_PRODUCTS',
        payload
    }
}
const setErrorMessage = (payload) => {
    return {
        type: 'SET_ERROR_MESSAGE',
        payload
    }
}
export const unsetErrorMessage = () => {
    return {
        type: 'SET_ERROR_MESSAGE',

    }
}
export const clearProducts = () => {
    return {
        type: 'CLEAR_PRODUCTS',

    }
}
export const clearSearchResults = () => {
    return {
        type: 'CLEAR_SEARCH_RESULTS',

    }
}
const setIsLoaded = (payload) => {
    return {
        type: 'SET_IS_LOADED',
        payload
    }
}
const setFavorites = (payload) => {
    return {
        type: 'SET_FAVORITES',
        payload
    }
}
const setSearchResults = (payload) => {
    return {
        type: 'SET_SEARCH_RESULTS',
        payload
    }
}


export const getRecentProducts = (categories) => {
    return async (dispatch) => {
        categories.forEach((cat) => {
            const categoryRef = db.collection(cat)
            categoryRef.limit(8).get()
                .then((resp) => {
                    const data = resp.docs.map(doc => doc.data())
                    dispatch(setRecentProducts(cat, data))
                })
        })


    }
}

export const getProducts = (category) => {
    return (dispatch) => {
        try {
            db.collection(category).onSnapshot((snap) => {
                const data = snap.docs.map(doc => doc.data())
                if (data === undefined || data.length == 0) {
                    dispatch(setErrorMessage('განცხადებები არ მოიძებნა!'))
                }
                dispatch(setProducts(data))
                dispatch(setIsLoaded(true))
            })
        }
        catch (error) {
            console.log('sdasdas')
            dispatch(setErrorMessage('განცხადებები არ მოიძებნა!'))
        }
    }
}
export const AddFavorite = (uid, productId, category, tittle, created, author) => {
    return (dispatch) => {
        try {
            db.collection('users').doc(uid).set({
                favorites: firebase.firestore.FieldValue.arrayUnion({ id: productId, category, tittle, created, author })
            },
                { merge: true })
            dispatch(getFavorites(uid))
        }
        catch (error) {
            dispatch(setAddFavoriteMessage('ფავორიტებში დამატება ვერ მოხერხდა'))
        }
    }

}
export const removeFavorite = (uid, productId, category, tittle, author, created) => {
    console.log(uid, productId, category, tittle)
    return (dispatch) => {
        try {
            db.collection('users').doc(uid).set({
                favorites: firebase.firestore.FieldValue.arrayRemove({ category, id: productId, tittle, author, created })
            },
                { merge: true })
        }
        catch (error) {
            dispatch(setAddFavoriteMessage('ფავორიტებში დამატება ვერ მოხერხდა'))
        }
    }

}
export const getFavorites = (uid) => {
    return (dispatch) => {
        try {
            db.collection('users').doc(uid).get().then((doc) => {
                if (doc.exists) {
                    dispatch(setFavorites(doc.data().favorites))

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })

        }
        catch (error) {

        }
    }

}
export const searchProduct = (categories, searchString) => {
    return async (dispatch) => {
        categories.map((cat) => {
            db.collection(cat).where('data.tittle', '>=', searchString).where('data.tittle', '<=', searchString + '\uf8ff').get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        dispatch(setSearchResults(doc.data()))
                    });
                })
                .catch((error) => {

                });

        })

    }
}

export default ProductsReducer

