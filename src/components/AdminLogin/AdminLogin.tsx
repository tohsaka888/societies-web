import React, { useCallback, useState } from "react";
import "../style/AdminLogin.css";
import { Form, Input, Button, message } from "antd";
import { pushRequest } from "../requests/request";
import { useHistory } from "react-router-dom";

export default function AdminLogin() {
  const [adminName, setAdminName] = useState<string>("");
  const [adminPass, setAdminPass] = useState<string>("");
  const history = useHistory();

  const login = useCallback(async () => {
    const data = await pushRequest("/adminLogin", {
      adminName: adminName,
      adminPass: adminPass,
    });
    if (data.code === 200) {
      message.success(data.message);
      sessionStorage.setItem("code", "200");
      history.push("/management");
    } else {
      message.error(data.message);
      sessionStorage.setItem("code", "");
      history.push("/");
    }
  }, [adminName, adminPass, history]);

  return (
    <div style={{ height: "90vh" }}>
      <div className="admin">
        <div className="admin-title">管理员登录</div>
        <div className="admin-content">
          <Form>
            <Form.Item label="管理员账号">
              <Input
                placeholder="请输入账号"
                onChange={(event) => setAdminName(event.target.value)}
              />
            </Form.Item>
            <Form.Item label="管理员密码">
              <Input
                placeholder="请输入密码"
                type="password"
                onChange={(event) => setAdminPass(event.target.value)}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
              <Button style={{ marginRight: "2vw" }}>返回</Button>
              <Button type="primary" htmlType="submit" onClick={login}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
