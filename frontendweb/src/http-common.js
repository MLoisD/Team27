import axios from "axios";

export default axios.create({
  baseURL: "/api",
  headers: {
    "Content-type": "application/json"

  }

});

const BASE_URL = "/api";

export function httpPost(url,param){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(param)
    };
    return fetch(BASE_URL+url,requestOptions)
}
export function httpPostwithToken(url,param){
    param['userId'] = localStorage.getItem("user_id");
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' ,
            "Authorization":"Bearer "+localStorage.getItem("token")
        },
        body: JSON.stringify(param)
    };
    return fetch(BASE_URL+url,requestOptions)

}