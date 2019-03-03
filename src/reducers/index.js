import { combineReducers } from 'redux'

import common from "./common";
import countries from "./countries";

export default combineReducers({
    common,
    countries
})