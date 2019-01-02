import React,{Component} from 'react'
import {Row,Form,Input,Icon,Button} from 'antd'

const FormItem = Form.Item

class ChangeForm extends Component {

    changeSubmit = ()=> {
        this.props.form.validateFields((errors,values)=>{
            if(!!errors) {
                return
            }
            const {changeInfo} = this.props
            let params = this.props.form.getFieldsValue()
            params.type = 'changeInfo'
            params.userId = sessionStorage.getItem('userId')
            changeInfo(params)
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return(
            <Row type="flex" justify="center" style={{marginTop: 50}}>
                <Row style={{width: '30%'}}>
                    <Form>
                        <FormItem>
                            {getFieldDecorator('nickname', {
                                rules: [
                                    { required: true, message: '不输入变麻瓜哦！' }
                                ],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="nickname"/>
                            )}
                        </FormItem>
                    </Form>
                    <Row type="flex" justify="end" style={{marginBottom: 10}}>
                        <Button type="primary" onClick={this.changeSubmit}>修改</Button>
                    </Row>
                </Row>
            </Row>
        )
    }
}
ChangeForm = Form.create()(ChangeForm)

export default ChangeForm