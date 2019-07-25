import callApi from './../utils/apiCaler';
import Promise from 'bluebird';
import Config from './../config/env';

export const GetProducts = () => {
    return new Promise((resolve, reject) => {
        return callApi(Config.api.path.base.products, 'GET', {}, {})
            .then(Data => {
                return resolve(Data);
            })
            .catch(err => reject(err));
    });
};
export const GetNews = () => {
    return new Promise((resolve, reject) => {
        return callApi(Config.api.path.base.news, 'GET', {}, {})
            .then(Data => {
                return resolve(Data);
            })
            .catch(err => reject(err));
    });
};