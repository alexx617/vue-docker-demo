// 接口请求
import axios from 'axios'
import qs from 'qs'
import NProgress from 'nprogress'
// import utils from 'utils/utils';

let baseURL = '';
let api = '';
// process.env.NODE_ENV !== 'development' ? baseURL = process.env.BASE_API : api = '/api';

export function fetch(opt) {
    console.log(opt);

    let ContentType = 'application/json;charset=UTF-8';
    if (opt.ContentType === 'form') {
        ContentType = 'application/x-www-form-urlencoded';
    } else if (opt.ContentType === 'form-data') {
        ContentType = 'multipart/form-data';
    }
    var dataList = {
        method: opt.method,
        url: `${api}${opt.url}`,
        timeout: 5000,
        baseURL: baseURL,
        headers: {
            'Content-Type': ContentType,
            'token': sessionStorage.token || ''
        }
    }
    if (['post', 'put'].includes(opt.method)) {
        opt.ContentType === 'form' ? dataList.data = qs.stringify(opt.data) : dataList.data = opt.data;
    } else {
        dataList.params = opt.data;
    }
    return new Promise((resolve, reject) => {
        axios(dataList)
            .then(res => {
                let body = res.data
                if (body.code == 200 || body.code == 201) {
                    reslove(body)
                } else {
                    reject(body)
                }
            })
            .catch(error => {
                reject(error.data)
            })
    })
}

// 发送请求前处理数据
axios.interceptors.request.use(config => {
    NProgress.start();
    return config;
}, error => {
    NProgress.done()
    return Promise.reject(error);
});

// 返回响应请求后处理数据
axios.interceptors.response.use(res => {
    NProgress.done()
    // let results
    // res.data.status > 0 ? results = res : results = Promise.reject(res)
    // return results;
    return res
}, error => {
    NProgress.done()
    let errorCode = error.response.status;
    if (errorCode === 401) {
        // utils.$go('login');
    } else if ([404, 405, 500, 504].includes(errorCode)) {
        error.response.data = {
            msg: '网络错误,请稍后重试!'
        };
    }
    return Promise.reject(error.response)
});

function set_method(m = get) {
    return m
}

export default {
    //
    test_list(data, method) {
        return fetch({
            method: 'post',
            url: `/api/users/login`,
            data
        })
    },
    test_list2(data, method) {
        return fetch({
            ContentType: 'form',
            method: set_method(method),
            url: `/api/json2`,
            data
        })
    },
}