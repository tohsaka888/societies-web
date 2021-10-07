import { Modal } from "antd";
import React, { useState } from "react";

export default function Notice() {
  const [visible, setVisible] = useState<boolean>(true);
  return (
    <Modal
      title="公告"
      okText="确定"
      cancelText="取消"
      visible={visible}
      onOk={() => {
        setVisible(false);
      }}
      onCancel={() => {
        setVisible(false);
      }}
    >
      <div style={{ fontSize: "1rem" }}>
        新用户注册,用户名请填写
        <span style={{ color: "red", fontWeight: "bold" }}>真实姓名</span>
      </div>
    </Modal>
  );
}
