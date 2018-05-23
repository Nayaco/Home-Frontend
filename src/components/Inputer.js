import React, { Component } from 'react'
import { Button, Form, Input, Icon, Layout, Progress, Col, Row ,Upload} from 'antd'
import $ from '../utils/spider'
const {Sider, Content} = Layout
const FormItem = Form.Item


const GenerInfo = (values) =>{
	const _Date = new Date()
	return {...values,
		date: _Date.getDay(),
	}		
}

const _Min = (a, b)=>{
	return a > b? b : a
}

class Inputer extends Component{
	state = {
		file: null,
		fileList: [],
		fileError: false,
		uploading: false,
		progress: 0,
		complete: 0,
	}
	constructor(url){
		super()
		this.url = url.url
		console.log(url.url)
	}
	
	UploadFile = (file, url) =>{
		let _FormData = new FormData()
		let blob = file
		const name = file.name
		let size = blob.size
		let tag = 0

		const BLOB_PER_SIZE = 5 * 1024 * 1024
		let start = 0, end = _Min(BLOB_PER_SIZE, size)
		while(start < size){
			_FormData.set('file', blob.slice(start, end), name)
			_FormData.append('tag', tag)
			$.Post(url, _FormData).then((res)=>{
				if(res.status == 1){
					let {progress} = this.state
					this.setState({
						progress: Math.ceil(100 * end / size),
				})}else{
					this.setState({
						fileError: true,
					})
				}
			})
			let {fileError} = this.state
			if(fileError == true){
				return
			}
			tag++
			start = end
			end = _Min(end + BLOB_PER_SIZE, size)
		}
	}

	handleUpload = (e)=>{
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				const info = GenerInfo(values)
				const { file } = this.state
				if(file == null){this.setState({
					fileError: true,
				})}else{
					$.Post(`${this.url}/insert`, JSON.stringify(info))
					.then(res=>{
						if(res.status == 1){
							this.setState({
								complete: 1,
							})
						}else{
							this.setState({
								complete: 0,
							})
						}
					})
					this.UploadFile(file, `${this.url}/upload`)
				}
			}
		})
	}

	render(){
		const progress = this.state.progress
		const { getFieldDecorator } = this.props.form

		const props = {
			action: `${this.url}/upload`,
			multiple: false,
			onRemove: (file) => {
        this.setState(({ fileList }) => {
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          return {
						fileList: newFileList,
						file: newFileList[0],
          };
        });
      },
      beforeUpload: (file) => {
        this.setState(({ fileList }) => {
					const newFileList = [...fileList, file]
					return({
						fileList: newFileList,
						file: newFileList[0],
					})
				}
			);
        return false;
      },
      fileList: this.state.fileList,
    };

		return(
			<div className='Inputbox' style={{height: '640px', backgroundColor: '#fff'}}>
				<Layout style={{backgroundColor: '#ffffff'}}>
					<Content style={{marginLeft: '5%', width: '40%'}}>
						<Form onSubmit={this.handleUpload} style={{width: '100%'}}>
							<Row type='flex' style={{alignItems: 'center'}} gutter={16}>
								<Col span={3}><p style={{fontFamily: '\'Roboto\', sans-serif'}}>Filename</p></Col>
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
								<Col span={3}><p style={{fontFamily: '\'Roboto\', sans-serif'}}>Author</p></Col>
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
								<Col span={3}><p style={{fontFamily: '\'Roboto\', sans-serif'}}>Description</p></Col>
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
							<Row>
								<Upload {...props}>
									<Button>
										<Icon type="upload" /> Select File
									</Button>
								</Upload>
							</Row>
							<Row>
								<FormItem style={{marginTop: '34px'}}>
									<Button type='primary' htmlType='submit' className='login-form-button' style={{width: '300px'}}>
										Upload
									</Button>
								</FormItem>
							</Row>
						</Form>
					</Content>
					
					<Sider style={{width: '300px', backgroundColor: '#ffffff'}}>
						<div style={{backgroundColor: '#ffffff', height: '100%'}}>
							<Progress type='circle' percent={progress}/>
						</div>
					</Sider>
				</Layout>
			</div>
		)
	}
}

export default Form.create()(Inputer)