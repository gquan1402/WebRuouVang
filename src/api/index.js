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
export const GetBills = () => {
    return new Promise((resolve, reject) => {
        return callApi(Config.api.path.base.bill, 'GET', {}, {})
            .then(Data => {
                return resolve(Data);
            })
            .catch(err => reject(err));
    });
};
export const GetAdmin = () => {
    return new Promise((resolve, reject) => {
        return callApi(Config.api.path.base.admin, 'GET', {}, {})
            .then(Data => {
                return resolve(Data);
            })
            .catch(err => reject(err));
    });
};
export const GetSales = () => {
    return new Promise((resolve, reject) => {
        return callApi(Config.api.path.base.sale, 'GET', {}, {})
            .then(Data => {
                return resolve(Data);
            })
            .catch(err => reject(err));
    });
};
export const deleteBills = (id) => {
    return new Promise((resolve, reject) => {
        return callApi(Config.api.path.base.bill + "/" + id, 'DELETE', {}, {})
            .then(Data => {
                return resolve(Data);
            })
            .catch(err => reject(err));
    });
};
export const deleteAdmin = (id) => {
    return new Promise((resolve, reject) => {
        return callApi(Config.api.path.base.admin + "/" + id, 'DELETE', {}, {})
            .then(Data => {
                return resolve(Data);
            })
            .catch(err => reject(err));
    });
};
export const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        return callApi(Config.api.path.base.products + "/" + id, 'DELETE', {}, {})
            .then(Data => {
                return resolve(Data);
            })
            .catch(err => reject(err));
    });
};
export const doneBills = (id) => {
    let body = {
        bill_status: true,
    }
    return new Promise((resolve, reject) => {
        return callApi(Config.api.path.base.bill + "/" + id, 'PUT', body, {})
            .then(Data => {
                return resolve(Data);
            })
            .catch(err => reject(err));
    });
};
export const deleteNews = (id) => {
    let body = {
        bill_status: true,
    }
    return new Promise((resolve, reject) => {
        return callApi(Config.api.path.base.news + "/" + id, 'DELETE', body, {})
            .then(Data => {
                return resolve(Data);
            })
            .catch(err => reject(err));
    });
};
export const addNews = (news_title, news_image, news_daypost, news_editer, news_content) => {
    let body = {
        news_title, news_image, news_daypost, news_editer, news_content
    }
    return new Promise((resolve, reject) => {
        return callApi(Config.api.path.base.news, 'POST', body, {})
            .then(Data => {
                return resolve(Data);
            })
            .catch(err => reject(err));
    });
};
export const addAdmin = (admin_name, admin_phone, admin_email, admin_address, admin_password, admin_username) => {
    let body = {
        admin_name, admin_phone, admin_email, admin_address, admin_password, admin_username
    }
    return new Promise((resolve, reject) => {
        return callApi(Config.api.path.base.admin, 'POST', body, {})
            .then(Data => {
                return resolve(Data);
            })
            .catch(err => reject(err));
    });
};
export const editAdmin = (admin_name, admin_phone, admin_email, admin_address, admin_password, admin_username, id) => {
    let body = {
        admin_name, admin_phone, admin_email, admin_address, admin_password, admin_username
    }
    return new Promise((resolve, reject) => {
        return callApi(Config.api.path.base.admin + "/" + id, 'PUT', body, {})
            .then(Data => {
                return resolve(Data);
            })
            .catch(err => reject(err));
    });
};
export const editSales = (sale_name, sale_discount, sale_dateBegin, sale_dateEnd, sale_status) => {
    let body = {
        sale_name, sale_discount, sale_dateBegin, sale_dateEnd, sale_status
    }
    return new Promise((resolve, reject) => {
        return callApi(Config.api.path.base.sale + "/5d22214bfb6fc00e79b61f07", 'PUT', body, {})
            .then(Data => {
                return resolve(Data);
            })
            .catch(err => reject(err));
    });
};
export const AddBill = (bill_datetime, Product, bill_cost, bill_status, customer_name, customer_phone, customer_email, custumer_address) => {
    let body = {
        bill_datetime,
        Product,
        bill_cost,
        bill_status,
        customer_name,
        customer_phone,
        customer_email,
        custumer_address
    }
    return new Promise((resolve, reject) => {
        return callApi(Config.api.path.base.bill, 'POST', body, {})
            .then(Data => {
                return resolve(Data);
            })
            .catch(err => reject(err));
    });
}
export const AddProducts = (product_name, product_cost, product_capacity, product_concentration, product_cost_unit, product_image, product_describe, product_temperature, Sale_id, category_id, supplier_id) => {
    let body = {
        product_name,
        product_cost,
        product_capacity,
        product_concentration,
        product_cost_unit,
        product_image,
        product_describe,
        product_temperature,
        Sale_id,
        category_id,
        supplier_id
    }
    return new Promise((resolve, reject) => {
        return callApi(Config.api.path.base.products, 'POST', body, {})
            .then(Data => {
                return resolve(Data);
            })
            .catch(err => reject(err));
    });
};
export const editProducts = (product_name, product_cost, product_capacity, product_concentration, product_cost_unit, product_image, product_describe, product_temperature, Sale_id, category_id, supplier_id, id) => {
    let body = {
        product_name,
        product_cost,
        product_capacity,
        product_concentration,
        product_cost_unit,
        product_image,
        product_describe,
        product_temperature,
        Sale_id,
        category_id,
        supplier_id
    }
    return new Promise((resolve, reject) => {
        return callApi(Config.api.path.base.products + "/" + id, 'PUT', body, {})
            .then(Data => {
                return resolve(Data);
            })
            .catch(err => reject(err));
    });
};