import {combineReducers} from "redux";
import GoogleMapApiReducer from "./googlemapapi/GoogleMapApiReducer";
import LanguageReducer from "./language/LanguageReducer";
import WebsiteReducer from "./website/WebsiteReducer";
import JobReducer from "./job/JobReducer";
import JobSingleReducer from "./job/JobSingleReducer";
import CategoryReducer from "./store/category/CategoryReducer";

const RootReducer = combineReducers({
    website:WebsiteReducer,
    job:JobReducer,
    jobSingle:JobSingleReducer,
    googleMapApi: GoogleMapApiReducer,
    language: LanguageReducer,
    category: CategoryReducer,
})

export default RootReducer;
