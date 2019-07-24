import axios from 'axios';
import Configs from './../config/env';

export default function callApi(endpoint, method = 'GET', body, headers = {}) {
    let base = Configs.api.host.base;
    if (endpoint.substring(0, base.length).indexOf(base) === -1) {
        endpoint = `${base}/${endpoint}`;
    }

    const newHeaders = Object.assign(
        {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        },
        headers
    );

    return axios({
        method,
        url: endpoint,
        data: body,
        headers: newHeaders
    })
        .then(res => res.data)
        .catch(err => err);
}