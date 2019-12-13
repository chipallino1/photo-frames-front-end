import {ACCESS_TOKEN, API_BASE_URL} from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

export function getCurrentUser() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/users/me",
        method: 'GET'
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/users/create",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function getItems(pageNum) {
    return request({
        url: API_BASE_URL + "/photo-frames/allByName?name=&pageNumber=" + pageNum + "&offset=1",
        method: 'GET'
    });
}

export function getItem(id) {
    return request({
        url: API_BASE_URL + "/photo-frames/" + id,
        method: 'GET'
    });
}

export function getColors() {
    return request({
       url: API_BASE_URL + "/colors/",
       method: 'GET'
    });
}

export function getSizes() {
    return request({
        url: API_BASE_URL + "/sizes/",
        method: 'GET'
    });
}

export function getItemsByColor(color, pageNum) {
    return request({
        url: API_BASE_URL + "/photo-frames/allByColor?color="+color+"&pageNumber="+pageNum+"&offset=1",
        method: 'GET'
    });
}

export function getItemsBySize(size, pageNum) {
    return request({
        url: API_BASE_URL + "/photo-frames/allBySize?size="+size+"&pageNumber="+pageNum+"&offset=1",
        method: 'GET'
    });
}

export function getItemsByPopularity(pageNum) {
    return request({
        url: API_BASE_URL + "/photo-frames/allByNameOrderPopular?name=&pageNumber="+pageNum+"&offset=1",
        method: 'GET'
    });
}

export function getItemsWithDiscounts(pageNum) {
    return request({
        url: API_BASE_URL + "/photo-frames/allWithDiscounts?name=&pageNumber="+pageNum+"&offset=1",
        method: 'GET'
    });
}

export function getItemsCost(pageNum) {
    return request({
        url: API_BASE_URL + "/photo-frames/allOrderByCost?name=&pageNumber=" + pageNum + "&offset=1",
        method: 'GET'
    });
}

export function getItemsCostDesc(pageNum) {
    return request({
        url: API_BASE_URL + "/photo-frames/allOrderByCostDesc?name=&pageNumber=" + pageNum + "&offset=1",
        method: 'GET'
    });
}

export function createItem(dto) {
    return request({
        url: API_BASE_URL + "/photo-frames/create",
        method: 'POST',
        body: JSON.stringify(dto)
    })
}

export function updateItem(dto) {
    return request({
        url: API_BASE_URL + "/photo-frames/update",
        method: 'PUT',
        body: JSON.stringify(dto)
    })
}

export function deleteItem(id) {
    return request({
        url: API_BASE_URL + "/photo-frames/" + id,
        method: 'DELETE'
    })
}

export function createOrder(dto) {
    return request({
        url: API_BASE_URL + "/orders/create",
        method: 'POST',
        body: JSON.stringify(dto)
    })
}