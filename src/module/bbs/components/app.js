import React,{Component} from 'react'
import {Row,Layout,Col,Icon} from 'antd'
import "../../../static/css/style.css";
import { connect } from 'react-redux'
import {getUserInfo} from "../../user/actions";
import {Link} from "react-router"
import { browserHistory } from 'react-router';

const { Header, Content, Footer } = Layout;
const mapStateToProps = state => {
    return {
        nickname: state.currentUser.nickname
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUserInfo: (params)=>{
            dispatch(getUserInfo(params))
        }
    }
}

class App extends Component {

    componentDidMount() {
        const {getUserInfo} = this.props;
        let params = {
            id: sessionStorage.getItem('userId'),
            type: 'getUserInfo'
        }
        getUserInfo(params);
    }

    handleExit() {
        sessionStorage.clear()
        browserHistory.push('/user/login');
    }

    render() {
        const {nickname} = this.props;
        return(
            <Layout style={{backgroundColor: '#fff'}}>
                <Header>
                    <Row type="flex">
                        <Col span={4}><Link to="/bbs/index" style={{color: '#fff', textDecoration: 'none'}}>霍格沃兹魔法学院论坛</Link></Col>
                        <Col span={14} />
                        <Col span={2}>
                            <Link to="/bbs/changeInfo" style={{color: '#fff', textDecoration: 'none'}}>{nickname}</Link>
                        </Col>
                        <Col span={2}>
                            <Link to="/bbs/userCat" style={{color: '#fff', textDecoration: 'none'}}><Icon type="shopping-cart" style={{marginRight: 5}} />购物车</Link>
                        </Col>
                        <Col span={2} onClick={this.handleExit} style={{color: '#fff', cursor: 'pointer'}}>
                            退出登录
                        </Col>
                    </Row>
                </Header>
                <Content>
                    {this.props.children}
                </Content>
                <Footer>
                    <Row type="flex" justify="center" align="middle">
                        霍格沃兹 YouKnowWho 版权所有
                    </Row>
                </Footer>
            </Layout>
        )
    }
}

const IndexApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default IndexApp