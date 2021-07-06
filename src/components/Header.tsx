import React, { useState } from "react";
import { Affix, Layout, Menu, Modal, Form, Input } from "antd";
import "./style/Header.css";
import logo from "../assets/images/logo.png";
import { useHistory } from "react-router-dom";

export default function HomePageHeader(): JSX.Element {
  const { Header } = Layout;
  const history: any = useHistory();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  return (
    <Affix offsetTop={0}>
      <Header className="header">
        <div className="logo_outer">
          <img
            src={logo}
            alt="logo"
            className="logo"
            onClick={() => {
              history.push("/");
            }}
          />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["index"]}>
          <Menu.Item
            key="index"
            onClick={() => {
              history.push("/");
            }}
          >
            主页
          </Menu.Item>
          <Menu.Item
            key="competiton"
            onClick={() => {
              history.push("/competition/1");
            }}
          >
            竞赛
          </Menu.Item>
          <Menu.Item key="introduce">社团介绍</Menu.Item>
          <Menu.Item
            key="login"
            onClick={() => {
              setIsModalVisible(true);
            }}
          >
            登录
          </Menu.Item>
          <Menu.Item key="register">注册</Menu.Item>
          <Menu.Item key="contact">联系我们</Menu.Item>
        </Menu>
      </Header>
      <Modal
        okText="登录"
        cancelText="取消"
        visible={isModalVisible}
        title="登录"
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        <Form name="login" labelCol={{ span: 5 }} wrapperCol={{ span: 18 }}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </Affix>
  );
}
