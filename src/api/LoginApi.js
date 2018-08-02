import request from "@/services/http";

export function login(query) {
    return request({
       url: 'login',
       method: 'post',
       params: query
    });
}
