import React, { Component } from 'react'
import configureStore from './configureStore'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import LoginForm from './module/user/containers/login'
import Register from './module/user/components/register'
import SortingHat from './module/user/components/sortinghat'
import ChangeInfoForm from './module/user/containers/changeInfo'
import UserCart from './module/user/components/userCart'

import IndexApp from './module/bbs/components/app'
import Plate from './module/bbs/containers/plate'
import Post from './module/bbs/components/post'

import DiagonAlley from './module/diagonAlley/components/index'
import ItemList from './module/diagonAlley/components/itemList'

const store = configureStore()

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Register} />
                    <Route path="user">
                        <Route path="login" component={LoginForm} />
                        <Route path="sortingHat" component={SortingHat} />
                    </Route>
                    <Route path="bbs" component={IndexApp}>
                        <Route path="index" component={Plate} />
                        <Route path="post" component={Post}/>
                        <Route path="changeInfo" component={ChangeInfoForm} />
                        <Route path="diagonAlley" components={DiagonAlley}>
                            <Route path="ItemList" components={ItemList} />
                        </Route>
                        <Route path="userCat" components={UserCart}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}
