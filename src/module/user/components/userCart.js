import React,{Component} from 'react'
import {Row,List, Avatar} from 'antd'
import { connect } from 'react-redux'
import UndoRedo from '../../diagonAlley/components/undoRedo'

const mapStateToProps = state => {
    return {
        cartList: state.cartList.present
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
}

class UserCartModal extends Component {
    render() {
        const {cartList} = this.props
        return(
            <Row>
                <Row type="flex" justify="center" align="middle" style={{width: '100%', height: 50, backgroundColor: '#1DA57A', color: '#fff', fontSize: 18}}>购物车</Row>
                <Row style={{padding: '10px'}}>
                    <UndoRedo />
                </Row>
                <Row>
                    <List
                        style={{padding: 10}}
                        itemLayout="horizontal"
                        dataSource={cartList}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.imgUrl} />}
                                    title={item.title}
                                    description={item.price}
                                />
                            </List.Item>
                        )}
                    />
                </Row>
            </Row>
        )
    }
}

const UserCart = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserCartModal)

export default UserCart