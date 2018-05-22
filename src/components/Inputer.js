import React, { Component } from 'react'
import { Button, Form, Input, Checkbox, Icon, Layout, Progress, Col, Row, Divider} from 'antd'
import $ from '../utils/spider'
const {Sider, Content} = Layout
const FormItem = Form.Item


const GenerInfo = (values) =>{
	const _Date = new Date()
	return {...values,
		date: _Date.getDay(),
	}		
}


class Inputer extends Component{
	state = {
		progress: 0,
		complete: 0,
	}
	constructor(url){
		super()
		this.url = url.url
		console.log(url.url)
	}

	handleUpload = (e)=>{
	  
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				const info = GenerInfo(values)
				$.Post(this.url, info)
				.then(res=>{
					if(res.status == 1){
						this.setState({
							complete: 1,
						})
					}
				})
			}
		})
	}

	render(){
		const progress = this.state.progress
		const { getFieldDecorator } = this.props.form
		return(
			<div className='Inputbox' style={{height: '640px'}}>
				<Layout style={{backgroundColor: '#ffffff'}}>
					<Sider style={{width: '30%', backgroundColor: '#ffffff'}}>
						<div style={{backgroundColor: '#ffffff', height: '100%'}}>
							<Progress type='circle' percent={progress}/>
						</div>
					</Sider>

					<Content>
						<Form onSubmit={this.handleUpload} style={{width: '100%'}}>
							<Row type='flex' style={{alignItems: 'center'}} gutter={16}>
								<Col span={2}><p style={{fontFamily: '\'Roboto\', sans-serif'}}>Filename</p></Col>
								<Col span={18}>
								<FormItem>
									{getFieldDecorator('title', {
										rules: [{ required: true, message: 'Please input the title!' }],
									})(
										<Input placeholder='title' style={{width: '300px'}}/>
									)}
								</FormItem>
								</Col>
							</Row>

							<Row type='flex' style={{alignItems: 'center'}} gutter={16}>
								<Col span={2}><p style={{fontFamily: '\'Roboto\', sans-serif'}}>Author</p></Col>
								<Col span={18}>
								<FormItem>
									{getFieldDecorator('author', {
										rules: [{ required: true, message: 'Please input the author!' }],
									})(
										<Input placeholder='author' style={{width: '300px'}}/>
									)}
								</FormItem>
								</Col>
							</Row>

							<Row type='flex' style={{alignItems: 'center'}} gutter={16}>
								<Col span={2}><p style={{fontFamily: '\'Roboto\', sans-serif'}}>Description</p></Col>
								<Col span={18}>
								<FormItem>
									{getFieldDecorator('description', {
										rules: [{ required: false}],
									})(
										<Input placeholder='description' style={{width: '300px'}}/>
									)}
								</FormItem>
								</Col>
							</Row>
							<FormItem style={{marginTop: '34px'}}>
								<Button type='primary' htmlType='submit' className='login-form-button' style={{width: '300px'}}>
									Upload
								</Button>
							</FormItem>
						</Form>
					</Content>
				</Layout>
			</div>
		)
	}
}

export default Form.create()(Inputer)