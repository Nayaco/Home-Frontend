import { Components } from 'react'
import { Button, Form } from 'antd'
const FormItem = Form.Item

class Inputer extends Components{
	handleupload = (e)=>{
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {

			}
		})
	}
	render(){
		return(
			<div>
				<Form>
					<FormItem>
						
					</FormItem>
				</Form>
			</div>
		)
	}
}

export default Inputer