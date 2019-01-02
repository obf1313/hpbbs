import React,{Component} from 'react';
import {Row, Button, Input} from 'antd'
import { connect } from 'react-redux'
import {sortingHat} from '../actions'

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sortingHat: (params) => {
            dispatch(sortingHat(params))
        }
    }
}
class SortingHat extends Component {
    handleSubmit = (e,value)=> {
        const { sortingHat } = this.props;
        e.persist();
        let params = {};
        params.college=e.target.value;
        params.type='sortingHat';
        params.username = sessionStorage.getItem('userName');
        params.userId = sessionStorage.getItem('userId');
        sortingHat(params);
    }

    render() {
        return (
            <Row style={{ width: '100%', height: 800 }} type="flex" align="middle" justify="center">
                <Row style={{ width: '60%' }}>
                    <Input ref="college" onPressEnter={this.handleSubmit} style={{ width: '80%', marginRight: 10 }} placeholder="请输入你想去到的学院全称（格兰芬多，赫奇帕奇，拉文克劳，斯莱特林），或者你可以试试其他的..." size="large"/>
                    <Button type="primary" onClick={this.handleSubmit} icon="right" size="large"/>
                </Row>
            </Row>
        )
    }
}
SortingHat = connect(
    mapStateToProps,
    mapDispatchToProps
)(SortingHat)

export default SortingHat



