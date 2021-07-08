import React from 'react';
import './App.css';
import 'antd/dist/antd.dark.css';
import {Layout} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import GalleryComponent from "./components/Gallery/GalleryContent";
function App() {
  return (
    <div className="App">
        <Layout>
            <Header>
                <h1 className="logo" style ={{color:"white"}}>Gallery</h1>
            </Header>
            <Content style={{
                padding: 50,
                margin: 0,
                minHeight: 280,
            }}>

                <GalleryComponent/>
            </Content>
            <Footer style={{ textAlign: 'center',borderTop:'1px solid gray' }}>Gallery ©2021 Created by Shyngys</Footer>
        </Layout>
    </div>
  );
}

export default App;
