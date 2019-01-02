/**
 * Created by Cn on 2018/10/17.
 */

import myFetch from '../../../utils/myFetch'
import {message} from "antd";
import { browserHistory } from 'react-router';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const SORTING_HAT = 'SORTING_HAT';
export const GET_USERINFO = 'GET_USERINFO';
export const CHANGE_INFO = 'CHANGE_INFO';

const URL = 'http://localhost:8085/user.php';

export const checkLogin = params => {
    return dispatch => {
        return myFetch(URL,params)
                .then(response => response.json())
                .then(data =>{
                    if(data.flag === 0) {
                        let userinfo = data.userinfo;
                        dispatch({ type: 'CHECK_LOGIN', userinfo});
                        sessionStorage.setItem('userId',userinfo.id);
                        sessionStorage.setItem('userName',userinfo.username);
                        if(data.userinfo.college) {
                            message.success('欢迎进入学校论坛！');
                            sessionStorage.setItem('college',userinfo.college);
                            browserHistory.push('/bbs/index');
                        } else {
                            message.success('新生请经过分院帽选择学院后进入学院论坛！');
                            browserHistory.push('/user/sortingHat');
                        }
                    }
                })
    }
}

export const sortingHat = params => {
    return dispatch => {
        return myFetch(URL,params)
            .then(response => response.json())
            .then(data =>{
                if(data.flag === 0) {
                    let realCollege = data.realCollege;
                    dispatch({ type: 'SORTING_HAT', realCollege});
                    browserHistory.push('/bbs/index');
                }
            })
    }
}

export const getUserInfo = params => {
    return dispatch => {
        return myFetch(URL,params)
            .then(response => response.json())
            .then(data =>{
                if(data.flag === 0) {
                    const userinfo = data.userinfo;
                    dispatch({ type: 'GET_USERINFO', userinfo});
                }
            })
    }
}

export const changeInfo = params => {
    return dispatch => {
        return myFetch(URL,params)
            .then(response => response.json())
            .then(data =>{
                if(data.flag === 0) {
                    const userinfo = data.userinfo;
                    dispatch({ type: 'CHANGE_INFO', userinfo});
                }
            })
    }
}