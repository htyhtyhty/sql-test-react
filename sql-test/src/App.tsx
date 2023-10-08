import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Space, Menu } from "antd";
import type { MenuProps } from 'antd';
import { routes } from "../src/routes";
import x from './index.module.scss'

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const [current, setCurrent] = useState('study');
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    textAlign: "center",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    color: '#333',
    backgroundColor: '#fff'
  };
  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
  };

  const siderStyle: React.CSSProperties = {
    display: 'flex',
    color: '#333',
    backgroundColor: '#fff'
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
  };
  const items: MenuProps['items'] = [
    {
      label: <Link to="/study">学习</Link>,
      key: 'study',
    },
    {
      label: <Link to="/test">关卡</Link>,
      key: 'test',
    },
    {
      label: <Link to="/group">广场</Link>,
      key: 'group',
    }
  ];
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  }
  return (
    <>
    <BrowserRouter>
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Header style={headerStyle}>
            <div className={x["home-title"]}> <Link to="/study">SQL练习</Link></div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
          </Header>
          <Layout hasSider>
            <Sider style={siderStyle} width='800'>
                <Routes>
                  {routes.map((item) => {
                    return (
                      <Route
                        key={item.path}
                        path={item.path}
                        element={item.element}
                      />
                    );
                  })}
                </Routes>
            </Sider>
            {/* <Content style={contentStyle}>Content</Content> */}
          </Layout>
          <Footer style={footerStyle}>玩耍嗷玩耍嗷</Footer>
        </Layout>
      </Space>
      </BrowserRouter>
    </>
  );
}

export default App;
