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
      message.warning("??????????????????????????????");
    } else {
      message.loading({ content: "???????????????", key: "login" });
      const data = await pushRequest("/login", {
        username: userName,
        password: password,
      });
      try {
        if (data.code === undefined) {
          message.error("?????????????????????");
        } else {
          setIsModalVisible(false);
          if (data.message === "????????????") {
            message.success({ content: data.message, key: "login" });
            localStorage.setItem("token", data.token);
          } else {
            message.error({ content: data.message, key: "login"});
          }
        }
      } catch (error) {
        console.log(error);
        message.error({ content: "?????????????????????", key: "login" });
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
      message.loading({ content: "???????????????", key: "register" });
      if (checkPasswordCorrect()) {
        if (checkPhone(phone)) {
          const data = await pushRequest("/register", {
            username: registerUserName,
            password: registerPassword,
            phone: phone,
            classId: classId, //??????
            college: collage, //??????
            scoreNumber: scoreNum, //??????
          });
          try {
            if (data.code === undefined) {
              message.error("?????????????????????");
            } else if (data.code === 200) {
              setIsRegisterVisible(false);
              message.success({ content: data.message, key: "register" });
            } else {
              message.warning({ content: data.errmsg, key: "register" });
            }
          } catch (error) {
            console.log(error);
            message.error({ content: "?????????????????????", key: "register" });
          }
        } else {
          message.warning("?????????????????????");
        }
      } else {
        message.warning("??????????????????6?????????????????????????????????");
      }
    } else {
      message.warning("????????????????????????");
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
            ??????
          </Menu.Item>
          <Menu.Item
            key="introduce"
            onClick={() => {
              setShowIntro(true);
            }}
          >
            ????????????
          </Menu.Item>
          <Menu.Item key="contact" disabled>
            ????????????
          </Menu.Item>
          {!loginUser && (
            <>
              <Menu.Item
                key="login"
                onClick={() => {
                  setIsModalVisible(true);
                }}
              >
                ??????
              </Menu.Item>
              <Menu.Item
                key="register"
                onClick={() => {
                  setIsRegisterVisible(true);
                }}
              >
                ??????
              </Menu.Item>
            </>
          )}
          {loginUser !== "" && (
            <Menu.Item key={"logout"} onClick={logout}>
              ????????????
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
        title={"??????"}
        okText="??????"
        cancelText="??????"
        onOk={register}
      >
        <Form name="register" labelCol={{ span: 5 }} wrapperCol={{ span: 17 }}>
          <Form.Item
            label="?????????"
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
            label="??????"
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
            label="????????????"
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
            label="?????????"
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
            label="??????"
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
            label="??????"
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
            label="??????"
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
        okText="?????????"
        title="????????????"
        cancelText="??????"
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
          ???????????????
        </Typography.Title>
        <Typography.Paragraph style={{fontSize: "1rem"}}>
          ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          ?????????????????????????????????????????????????????????2006???????????????????????????????????????????????????????????????
          ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        </Typography.Paragraph>
      </Modal>
      <Modal
        okText="??????"
        cancelText="??????"
        visible={isModalVisible}
        title="??????"
        onCancel={() => {
          setIsModalVisible(false);
        }}
        onOk={login}
      >
        <Form name="login" labelCol={{ span: 5 }} wrapperCol={{ span: 18 }}>
          <Form.Item
            label="?????????"
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
            label="??????"
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
