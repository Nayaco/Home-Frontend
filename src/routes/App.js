import React, { Component } from 'react';
import history from '../utils/history'
import { Layout, Button, Popover} from 'antd'
import './App.css';
const { Header, Content, Footer, Sider } = Layout

const CreateButton = (text, name, link, _history) =>{
  return (
    <Popover content={text} title="Do you want to go here?">
      <Button onClick={()=>{_history.push({pathname:link})}}>{name}</Button>
    </Popover>
  )
}

const GetDate = () =>{
  const _Date = new Date()
  return `${_Date.getFullYear()} . ${_Date.getMonth()} . ${_Date.getDate()}`
}

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <Layout className="AppIndex">
          <Header className="Appheader"
            style={{ backgroundColor: 'white'}}
            >
            <p className="Title">Welcome To QSC Backend</p>    
            <p className="Date">{GetDate()}</p>
          </Header>

          <Content>
            {this.props.children}
          </Content>

          <Footer>
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default App;
