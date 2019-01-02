/**
 * Created by Cn on 2018/10/17.
 */
import React,{ Component } from 'react'
import { Row, Button, Form, Input, Icon, message} from 'antd'
import myFetch from '../../../utils/myFetch'
import { browserHistory } from 'react-router'

const FormItem = Form.Item

class Register extends Component {

    handleSubmit = ()=> {
        let params = this.props.form.getFieldsValue();
        params.type='register';
        myFetch('http://localhost:8085/user.php',params)
        .then(response => response.json())
        .then(data =>{
            if(data.flag === 0) {
                message.success('注册成功！');
                browserHistory.push('/user/login');
                // 跳转至登陆界面
            }
        })
    }

    checkUsername = (rule, value, callback)=> {
        myFetch('http://localhost:8085/user.php',{type:'checkUsername', username: value})
        .then(response => response.json())
        .then(data =>{
            if(data.flag === 0) {
                callback('已经被注册了！')
            }
        })
    }

    handleToLogin = ()=> {
        browserHistory.push('/user/login');
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Row style={{width: '100%', marginTop: 200, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <Row style={{fontSize: 30, color: '#1DA57A', margin: 20}}>
                    注 册
                </Row>
                <Row>
                    <Form style={{width: 300}}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [
                                    { required: true, message: '不输入变麻瓜！' },
                                    { validator: this.checkUsername }
                                ],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '没有口令还想进学院？'}],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"/>
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit} style={{width: '100%'}}>
                                注册
                            </Button>
                            <Button type="primary" onClick={this.handleToLogin} style={{width: '100%'}}>
                                已有账号，直接登录？
                            </Button>
                        </FormItem>
                    </Form>
                </Row>
            </Row>
        )
    }
}
Register = Form.create()(Register)

export default Register