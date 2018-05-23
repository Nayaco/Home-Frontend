import React, { Component } from 'react'
import { Layout, Menu} from 'antd'
import Inputer from '../components/Inputer'
import Artical from '../components/Artical'
import './Textpage.css'
const MenuItem = Menu.Item
const {Sider, Content} = Layout

const _Route = (select) =>{
	switch(select){
		case 'file': return <Inputer url="http://localhost/console"/>
		case 'text': return <Artical/>
	}
}


class Textpage extends Component {
	state = {
		select: 'text'
	}
	handleClick = (e) =>{
		this.setState({
			select: e.key,
		})
	}
	render(){
		return(
			<div className="Textpageindex">
				<Layout className="TextpageBox">
					<Sider style={{ width: '25%', height: '100%'}}>
						<Menu 
						onClick={this.handleClick}
						style={{ width: '100%', height: '100%'}}
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						mode="inline"
						theme="light">
							<MenuItem key='file'>Files</MenuItem>
							<MenuItem key='text'>Articals</MenuItem>
						</Menu>
					</Sider>

					<Content style={{height: '100%'}}>
						{_Route(this.state.select)}	
					</Content>
				</Layout>		
			</div>
		)
	}
}

export default Textpage