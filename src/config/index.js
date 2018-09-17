import utils from "./utils";

const KEY_PERSIST_STORE = 'react-template-v16.5.1';
const API_URL = process.env.REACT_APP_API_URL;
const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;
const BASE_PATH =  process.env.REACT_APP_PUBLIC_URL.split(window.location.origin).slice(0).join("");


export default {
    KEY_PERSIST_STORE,
    API_URL,
    PUBLIC_URL,
    BASE_PATH,
    utils
}

export {
    KEY_PERSIST_STORE,
    API_URL,
    PUBLIC_URL,
    BASE_PATH,
    utils
}