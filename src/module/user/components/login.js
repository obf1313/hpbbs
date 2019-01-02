/**
 * Created by Cn on 2018/10/17.
 */
import React,{ Component } from 'react'
import { Row, Button, Form, Input, Icon} from 'antd'

const FormItem = Form.Item

class Login extends Component {

    handleSubmit = ()=> {
        const { checkLogin } = this.props;
        let params = this.props.form.getFieldsValue();
        params.type='login';
        checkLogin(params);
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Row style={{width: '100%', marginTop: 200, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <Row style={{fontSize: 30, color: '#1DA57A', margin: 20}}>
                    登 录
                </Row>
                <Row>
                    <Form style={{width: 300}}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [
                                    { required: true, message: '不输入变麻瓜哦！' }
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
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </Row>
            </Row>
        )
    }
}
Login = Form.create()(Login)

export default Login