import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Space, Menu } from "antd";
import type { MenuProps } from 'antd';
import { routes } from "../src/routes";

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const [current, setCurrent] = useState('study');
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#fff",
  };
  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#3ba0e9",
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
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
    setCurrent(e.key)
  }
  return (
    <>
    <BrowserRouter>
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Layout>
          <Header style={headerStyle}>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
          </Header>
          <Layout hasSider>
            <Sider style={siderStyle}>
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
            <Content style={contentStyle}>Content</Content>
          </Layout>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Space>
      </BrowserRouter>
    </>
  );
}

export default App;
