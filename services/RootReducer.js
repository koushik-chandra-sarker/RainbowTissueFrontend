import {combineReducers} from "redux";
import GoogleMapApiReducer from "./googlemapapi/GoogleMapApiReducer";
import LanguageReducer from "./language/LanguageReducer";
import WebsiteReducer from "./website/WebsiteReducer";
import JobReducer from "./job/JobReducer";
import JobSingleReducer from "./job/JobSingleReducer";
import CategoryReducer from "./store/category/CategoryReducer";
import ProductsReducer from "./store/product/ProductsReducer";
import ProductReducer from "./store/product/ProductReducer";
import IsLoginReducer from "./login/IsLoginReducer";
import CartListReducer from "./store/cart/CartListReducer";
import SimilarProductReducer from "./store/product/SimilarProductReducer";

const RootReducer = combineReducers({
    website:WebsiteReducer,
    job:JobReducer,
    jobSingle:JobSingleReducer,
    googleMapApi: GoogleMapApiReducer,
    language: LanguageReducer,
    category: CategoryReducer,
    product: ProductReducer,
    IsLoggedIn: IsLoginReducer,
    products: ProductsReducer,
    similarProducts: SimilarProductReducer,
    cartList: CartListReducer,
})

export default RootReducer;
