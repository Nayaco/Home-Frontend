import React, { Component } from 'react'
import { Button, Form, Input, Checkbox, Icon} from 'antd'
const FormItem = Form.Item

class Inputer extends Component{
	constructor(){
		super()
	}
	handleUpload = (e)=>{
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);		
			}
		})
	}
	render(){
		const { getFieldDecorator } = this.props.form
		return(
			<div>
				<Form onSubmit={this.handleUpload} style={{width: '300px'}}>
					<FormItem>
						{getFieldDecorator('userName', {
							rules: [{ required: true, message: 'Please input your username!' }],
						})(
							<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
						)}
					</FormItem>
					
					<FormItem>
						{getFieldDecorator('password', {
							rules: [{ required: true, message: 'Please input your Password!' }],
						})(
							<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
						)}
					</FormItem>
					
					<FormItem>
						{getFieldDecorator('remember', {
							valuePropName: 'checked',
							initialValue: true,
						})(
							<Checkbox>Remember me</Checkbox>
						)}
						<a className="login-form-forgot" href="" style={{float: 'right'}}>Forgot password</a>
						<Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
							Log in
						</Button>
					</FormItem>
				
				</Form>
			</div>
		)
	}
}

export default Form.create()(Inputer)