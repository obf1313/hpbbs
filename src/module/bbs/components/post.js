import React,{Component} from 'react'
import {Row,Table,Input} from 'antd'
var Mock = require('mockjs')

const Search = Input.Search;

export default class Post extends Component {

    constructor() {
        super();
        this.state = {
            postList: [],
            searchText: ''
        }
    }

    componentDidMount() {

    }

    handleSearch = ()=> {

    }

    render() {
        const columns = [{
            title: '标题',
            dataIndex: 'name',
            key: 'name',
            width: '75%'
        },{
            title: '发帖人',
            dataIndex: 'userId',
            key: 'userId',
            width: '10%'
        },{
            title: '最后回帖时间',
            dataIndex: 'lastCommentTime',
            key: 'lastCommentTime',
            width: '15%'
        }]
        let data = Mock.mock({
            'list|10': [{
                'id|+1': 1,
                'name|+1': ["今天晚上吃饺子","今天晚上吃抄手","今天晚上吃火锅"],
                'userId|+1':1,
                'lastCommentTime|+1':[Mock.mock('@datetime'),Mock.mock('@datetime'),Mock.mock('@datetime')]
            }]
        })
        return(
            <Row type="flex" style={{padding: '20px 50px'}}>
                <Row type="flex" style={{width: '100%', marginBottom: 10}}>
                    <Search
                        placeholder="请输入帖子标题..."
                        onSearch={value => this.setState({searchText: value})}
                        style={{ width: 200, marginRight: 20 }}
                    />
                </Row>
                <Table columns={columns} dataSource={data.list} bordered style={{width: '100%'}} rowKey={(row)=>{return row.id}} />
            </Row>
        )
    }
}