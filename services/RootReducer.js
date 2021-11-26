import {combineReducers} from "redux";
import PropertyCategoryReducer from "./propertyCategory/PropertyCategoryReducer";
import GoogleMapApiReducer from "./googlemapapi/GoogleMapApiReducer";
import PropertyReducer from "./property/PropertyReducer";
import PropertiesReducer from "./property/PropertiesReducer";
import PropertyTypeReducer from "./propertyType/PropertyTypeReducer";
import PropertyStatusReducer from "./propertyStatus/PropertyStatusReducer";
import RandomPropertiesReducer from "./property/RandomPropertiesReducer";
import PropertyAreaReducer from "./propertyArea/PropertyAreaReducer";
import LanguageReducer from "./language/LanguageReducer";
import WebsiteReducer from "./website/WebsiteReducer";
import JobReducer from "./job/JobReducer";
import JobSingleReducer from "./job/JobSingleReducer";

const RootReducer = combineReducers({
    website:WebsiteReducer,
    property:PropertyReducer,
    properties:PropertiesReducer,
    job:JobReducer,
    jobSingle:JobSingleReducer,
    randomProperties:RandomPropertiesReducer,
    propertyCategory: PropertyCategoryReducer,
    propertyType: PropertyTypeReducer,
    propertyArea: PropertyAreaReducer,
    propertyStatus: PropertyStatusReducer,
    googleMapApi: GoogleMapApiReducer,
    language: LanguageReducer,
})

export default RootReducer;
