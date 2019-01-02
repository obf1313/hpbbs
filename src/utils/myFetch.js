import fetch from 'cross-fetch'

export default function myFetch(url,data) {
    return fetch(url,{
        method:"POST",   //请求方法
        body:JSON.stringify(data)
    })
}