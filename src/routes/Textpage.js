import React, { Component } from 'react'
import { Layout } from 'antd'
import Inputer from '../components/Inputer'

class Textpage extends Component {
	render(){
		return(
			<div className="Textpageindex">
				<Inputer url="http://localhost:80/console/insert"/>			
			</div>
		)
	}
}

export default Textpage