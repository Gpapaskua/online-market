import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import ProductsReducer from './ProductsReducer'
import reduxThunk from 'redux-thunk'
import authReducer from "./authReducer";
import NewProductReducer from "./NewProductReducer";
import ProductReducer from "./ProductReducer";
import ProfileReducer from "./ProfileReducer";



const rootReducer = combineReducers({
    products: ProductsReducer,
    auth: authReducer,
    newProduct: NewProductReducer,
    product: ProductReducer,
    profile: ProfileReducer,
    form: formReducer
})
const store = createStore(
    rootReducer,
    {},
    applyMiddleware(reduxThunk)
);



export default store;