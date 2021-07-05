import React from "react";
import { Affix, Layout, Menu } from "antd";
import "./style/Header.css";
import logo from "../assets/images/logo.png";
import { useHistory } from 'react-router-dom'

export default function HomePageHeader(): JSX.Element {
  const { Header } = Layout;
  const history:any = useHistory();
  return (
    <Affix offsetTop={0}>
      <Header className="header">
        <div className="logo_outer">
          <img src={logo} alt="logo" className="logo" onClick={()=>{history.push("/")}}/>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["index"]}
        >
          <Menu.Item key="index" onClick={() => {history.push("/")}}>主页</Menu.Item>
          <Menu.Item key="competiton" onClick={()=>{history.push("/competition")}}>竞赛</Menu.Item>
          <Menu.Item key="introduce">社团介绍</Menu.Item>
          <Menu.Item key="login" >登录</Menu.Item>
          <Menu.Item key="register">注册</Menu.Item>
          <Menu.Item key="contact">联系我们</Menu.Item>
        </Menu>
      </Header>
    </Affix>
  );
}
