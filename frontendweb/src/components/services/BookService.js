import axios from "axios";

const baseUrl = "/api/v1"

var getConfig = {
    method: 'get',
    headers: {}
};

export const get = (url) => {
    return axios({ ...getConfig, url: baseUrl + url })
}