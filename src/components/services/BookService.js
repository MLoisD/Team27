import axios from "axios";

const baseUrl = "http://localhost:5000/api/v1"

var getConfig = {
    method: 'get',
    headers: {}
};

export const get = (url) => {
    return axios({ ...getConfig, url: baseUrl + url })
}