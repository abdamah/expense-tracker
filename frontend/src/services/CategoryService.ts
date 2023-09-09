import http from "./HttpService";

import {apiUrl} from "../config.json";

const endpoint = apiUrl + "/categories/";

function getCategories(){
    return http.get(endpoint);
}


export default {
    getCategories
}