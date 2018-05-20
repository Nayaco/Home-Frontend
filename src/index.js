import React from 'react'
import ReactDOM from 'react-dom'
import history from './utils/history'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {Route, Router} from 'react-router-dom'
import 'antd/dist/antd.css'
import App from './routes/App'
import Textpage from './routes/Textpage'
//import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
	//<Provider store={store}>    
		<Router history={history}>
			<App>
				<Route path='/text' component={Textpage}/>
			</App>
		</Router>
	//</Provider>,
	, 
document.getElementById('root'))
registerServiceWorker()
