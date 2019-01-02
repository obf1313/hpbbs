import React,{Component} from 'react'
import {Row,Col} from 'antd'
import Cart from '../components/cart'

export default class DiagonAllet extends Component {
    render() {
        return(
            <Row>
                <Col span={20}>
                    {this.props.children}
                </Col>
                <Col span={4} style={{borderLeft: '1px solid #ddd', height: 1200}}>
                    <Cart />
                </Col>
            </Row>
        )
    }
}