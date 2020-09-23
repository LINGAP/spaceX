import React from 'react';
import { Layout } from 'antd';
import starlinkLogo from './assets/images/starlink_logo.svg';
import './App.css';
import Main from './components/Main';

const { Header, Footer, Content } = Layout;
function App() {
  return (
    <Layout>
      <Header>
        <img src={starlinkLogo} className="App-logo" alt="logo" />
        <p className="title">
          StarLink Tracker
        </p>
      </Header>
      <Content>
        <Main />
      </Content>
      <Footer>
        (c)2020 StarLink Tracker. All Rights Reserved. Website Made by Your name
      </Footer>

  </Layout>

  );
}

export default App;
