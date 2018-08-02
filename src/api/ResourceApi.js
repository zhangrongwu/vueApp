
import request from "@/services/http";
export function getResourceList(query) {
    return request({
        url: '/article/list',
        method: 'get',
        params: query
      })
}

export function getBanner(query) {
    return request({
        url: '/lunbotu',
        method: 'get',
        params: query
    })
}

export function getResourceDetail(query) {
    return request({
        url: '/article/list',
        method: 'get',
        params: query
    })
}
