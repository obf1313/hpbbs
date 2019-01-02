import React,{Component} from 'react'
import {Row,Col} from 'antd'
import "../../../static/css/style.css";
import {Link} from 'react-router'

export default class Plate extends Component {

    componentDidMount() {
        const {getPlate} = this.props
        getPlate({type: 'getPlate'})
    }

    render() {
        const {plate} = this.props
        const plateList = plate.map((item)=>(
            <Col span={5} key={item.id} style={{margin: '20px 29px'}}>
                <Link to={{ pathname : item.url , state : { id: item.id}}}>
                    <Row className="plate_img" style={{backgroundImage: 'url('+item.imgTitle+')'}} />
                    <Row className="plate_text">{item.name}</Row>
                </Link>
            </Col>
        ))
        return(
            <Row type="flex" align="middle">
                {plateList}
            </Row>
        )
    }
}