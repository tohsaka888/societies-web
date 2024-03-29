import React, { useState, useCallback, useEffect, useContext } from "react";
import {
  Affix,
  Layout,
  Menu,
  Modal,
  Form,
  Input,
  message,
  Typography,
} from "antd";
import "./style/Header.css";
import logo from "../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import { getWebsocketMessage, pushRequest, sendWebsocketRequest } from "./requests/request";
import { LoginUserContext, RegisterContext } from "./Context/context";
import Notice from "./Notice";

export default function HomePageHeader(): JSX.Element {
  const { Header } = Layout;
  const history: any = useHistory();
  // const [isRegisterVisible, setIsRegisterVisible] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [userName, setUserName] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [registerUserName, setRegisterUserName] = useState<String>("");
  const [registerPassword, setRegisterPassword] = useState<String>("");
  const [confirmPassword, setConfirmPassword] = useState<String>("");
  const [phone, setPhone] = useState<string>("");
  const [scoreNum, setScoreNum] = useState<String>("");
  const [collage, setCollage] = useState<String>("");
  const [classId, setClassId] = useState<String>("");
  const [showIntro, setShowIntro] = useState<boolean>(false);
  const { loginUser, setLoginUser, setUserId } = useContext(LoginUserContext);
  const { isRegisterVisible, setIsRegisterVisible } = useContext(RegisterContext)
  function checkPhone(phone: string): boolean {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(phone) || phone.length !== 11) {
      return false;
    } else {
      return true;
    }
  }
  const getLoginStatus = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const data = await pushRequest("/login/status", { token: token });
      if (data && data.username !== undefined) {
        setLoginUser(data.username);
        setUserId(data.userId)
      } else {
        setLoginUser("");
      }
    } catch (error) {
      message.error(error.name + error.message);
    }
  }, [setLoginUser, setUserId]);
  useEffect(() => {
    getLoginStatus();
    sendWebsocketRequest('hello')
    getWebsocketMessage()
  }, [getLoginStatus]);
  const checkPasswordCorrect = useCallback(() => {
    if (registerPassword.length >= 6 && registerPassword === confirmPassword) {
      return true;
    } else {
      return false;
    }
  }, [confirmPassword, registerPassword]);
  const login = async () => {
    if (userName === "" && password === "") {
      message.warning("用户名和密码不得为空");
    } else {
      message.loading({ content: "登录中···", key: "login" });
      const data = await pushRequest("/login", {
        username: userName,
        password: password,
      });
      try {
        if (data.code === undefined) {
          message.error("服务端响应错误");
        } else {
          setIsModalVisible(false);
          if (data.message === "登录成功") {
            message.success({ content: data.message, key: "login" });
            localStorage.setItem("token", data.token);
          } else {
            message.error({ content: data.message, key: "login"});
          }
        }
      } catch (error) {
        console.log(error);
        message.error({ content: "服务端响应错误", key: "login" });
      }
      getLoginStatus();
    }
  };
  const register = async () => {
    if (
      registerUserName &&
      registerPassword &&
      confirmPassword &&
      scoreNum &&
      collage &&
      classId &&
      phone
    ) {
      message.loading({ content: "注册中···", key: "register" });
      if (checkPasswordCorrect()) {
        if (checkPhone(phone)) {
          const data = await pushRequest("/register", {
            username: registerUserName,
            password: registerPassword,
            phone: phone,
            classId: classId, //班级
            college: collage, //学院
            scoreNumber: scoreNum, //学号
          });
          try {
            if (data.code === undefined) {
              message.error("服务端响应错误");
            } else if (data.code === 200) {
              setIsRegisterVisible(false);
              message.success({ content: data.message, key: "register" });
            } else {
              message.warning({ content: data.errmsg, key: "register" });
            }
          } catch (error) {
            console.log(error);
            message.error({ content: "服务端响应错误", key: "register" });
          }
        } else {
          message.warning("手机号输入有误");
        }
      } else {
        message.warning("密码长度小于6或者两次密码输入不一致");
      }
    } else {
      message.warning("信息没有填写完整");
    }
  };
  const logout = async () => {
    const token = localStorage.getItem("token");
    const data = await pushRequest("/logout", { token: token });
    if (data.code === 200) {
      localStorage.removeItem("token");
      getLoginStatus();
      history.push("/");
    }
  };
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
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["index"]}
          style={{ width: "50vw", justifyContent: "flex-end" }}
        >
          {loginUser !== "" && (
            <Menu.Item key={loginUser} disabled>
              {loginUser}
            </Menu.Item>
          )}
          <Menu.Item
            key="index"
            onClick={() => {
              history.push("/");
            }}
          >
            主页
          </Menu.Item>
          <Menu.Item
            key="introduce"
            onClick={() => {
              setShowIntro(true);
            }}
          >
            社团介绍
          </Menu.Item>
          <Menu.Item key="contact" disabled>
            联系我们
          </Menu.Item>
          {!loginUser && (
            <>
              <Menu.Item
                key="login"
                onClick={() => {
                  setIsModalVisible(true);
                }}
              >
                登录
              </Menu.Item>
              <Menu.Item
                key="register"
                onClick={() => {
                  setIsRegisterVisible(true);
                }}
              >
                注册
              </Menu.Item>
            </>
          )}
          {loginUser !== "" && (
            <Menu.Item key={"logout"} onClick={logout}>
              退出登录
            </Menu.Item>
          )}
        </Menu>
      </Header>
      <Notice />
      <Modal
        visible={isRegisterVisible}
        onCancel={() => {
          setIsRegisterVisible(false);
        }}
        title={"注册"}
        okText="注册"
        cancelText="取消"
        onOk={register}
      >
        <Form name="register" labelCol={{ span: 5 }} wrapperCol={{ span: 17 }}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              onChange={(e) => {
                setRegisterUserName(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              onChange={(e) => {
                setRegisterPassword(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="确认密码"
            name="confirmPassword"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="手机号"
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              type="number"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="学号"
            name="scoreNumber"
            rules={[
              { required: true, message: "Please input your score number!" },
            ]}
          >
            <Input
              type="number"
              onChange={(e) => {
                setScoreNum(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="学院"
            name="collage"
            rules={[{ required: true, message: "Please input your collage!" }]}
          >
            <Input
              onChange={(e) => {
                setCollage(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="班级"
            name="class"
            rules={[{ required: true, message: "Please input your class!" }]}
          >
            <Input
              onChange={(e) => {
                setClassId(e.target.value);
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        okText="已了解"
        title="社团介绍"
        cancelText="取消"
        visible={showIntro}
        width={700}
        onCancel={() => {
          setShowIntro(false);
        }}
        onOk={() => {
          setShowIntro(false);
        }}
      >
        <Typography.Title level={3}>
          程序员之家
        </Typography.Title>
        <Typography.Paragraph style={{fontSize: "1rem"}}>
          程序员之家是由社团联盟主管，位于计算机信息工程学院的程序员爱好者的家园。社团成员在严格遵守学校守则以及学习团委精神的基础上，为社团建设做出了不懈的努力。
          计算机信息工程学院程序员之家社团成立于2006年，由会长及副会，下设秘书处、宣传部、公关
          部、组织部（内设策划）、技术部，是一个以技术学习和交流为基础的优秀社团。社团连续多年被评为校优秀社团，目前为校五星级社团。
        </Typography.Paragraph>
      </Modal>
      <Modal
        okText="登录"
        cancelText="取消"
        visible={isModalVisible}
        title="登录"
        onCancel={() => {
          setIsModalVisible(false);
        }}
        onOk={login}
      >
        <Form name="login" labelCol={{ span: 5 }} wrapperCol={{ span: 18 }}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </Affix>
  );
}
