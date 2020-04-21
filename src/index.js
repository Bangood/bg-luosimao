const sendAPI = "https://sms-api.luosimao.com/v1/send.json";
const sendBatchAPI = "https://sms-api.luosimao.com/v1/send_batch.json";
import Axios from 'axios';
import QueryString from 'querystring'
export class BangoodLuosimao {
    constructor(key) {
        this.key = key;
    }
    async sendSms(mobile, message) {
        const data = {
            mobile,
            message
        }
        return await this.postToLuosimao(sendAPI, data)
    }
    
    async postToLuosimao(apiUrl, data) {
        const content = QueryString.stringify(data);
        const config = {
            method: 'POST',
            auth: {
                username: 'api',
                password: this.key
            },
            agent: false,
            rejectUnauthorized: false,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': content.length
            }
        }
        return await Axios.post(apiUrl, content, config);
    }
}