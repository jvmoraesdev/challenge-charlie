import axios from "axios";
import config from "../config/config";

const instance = axios.create({
    baseURL: config.BING_API,
    headers: {
        // "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
        "Cache-Control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded",
    }
})

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'

export default {
    getBackgroundImage: () => new Promise((resolve, reject) => {
        instance.get('/HPImageArchive.aspx?format=js&idx=0&n=1')
            .then(response => {
                if (response.status !== 200) {
                    reject(new Error('Unable to get image from bing API'))
                }
                console.log(response.data)
                resolve(response.data)
            })
            .catch(error => {
                console.error('getBackgroundImage error ', error)
                reject(error)
            })
    })
}