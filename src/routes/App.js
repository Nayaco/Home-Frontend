import React, { Component } from 'react';
import history from '../utils/history'
import { Layout, Button, Popover, Breadcrumb, Icon, Row, Col} from 'antd'
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
            style={{ backgroundColor: '#00A0E8', width: '100%'}}
            >
            <div className="Appsubheader">
              <Row>
                <Col span={1}><Icon type='smile-o' style={{ fontSize: 18, color: '#fff' }}/></Col>
                <Col span={6}><p className="Title">Welcome To QSC Backend</p></Col>    
                <Col span={4}><p className="Date">{GetDate()}</p></Col>
              </Row>
            </div>
          </Header>

          <Content className="AppContent"
            style={{padding: '0 50px', marginTop: 24}}>
            <div style={{ background: '#fff', padding: 24, height: '100%'}}>
              {this.props.children}
            </div>
          </Content>

          <Footer style={{display: 'flex',justifyContent: 'center'}}>
            <p>♥ Powered BY QSC FullMetal Bean</p>
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default App;
