import React,{Component} from 'react'
import {Card,Button,Row} from 'antd'
import {toCart} from '../actions'
import { connect } from 'react-redux'

const {Meta} = Card
const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = dispatch => {
    return {
        toCart: (params)=>{
            dispatch(toCart(params))
        }
    }
}
class ItemModal extends Component {
    render() {
        const { toCart,item } = this.props
        return (
                <Card
                    hoverable
                    style={{ width: 300, margin: '20px 20px'}}
                    cover={<img alt="example" src={item.imgUrl} />}
                >
                    <Meta
                        title={item.title}
                        description={item.price}
                    />
                    <Row type="flex" justify="end">
                        <Button size="small" style={{marginRight: 10}} onClick={()=>toCart(item)}>加入购物车</Button>
                        <Button size="small" type="primary">立即购买</Button>
                    </Row>
                </Card>
        )
    }
}

const Item = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemModal)

export default Item