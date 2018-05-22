import React, { Component } from 'react'
import { Layout } from 'antd'
import Login from '../components/login'
import './Loginpage.css'

class Loginpage extends Component {
	render(){
		return(
			<div className="LoginpageIndex">
				<Login className="LoginDialog"/>			
			</div>
		)
	}
}

export default Loginpage