import React, { useState } from "react";
import { Layout, Col, Row, BackTop } from "antd";
import HomePageContent from "./HomePageComponents/HomePageContent";
import Header from "./Header";
import { Route } from "react-router-dom";
import Competition from "./Competition";
import { DisplayContext } from "./Context/context";
import { IsDisplayContext } from "./Context/context";

export default function HomePage(): JSX.Element {
  const [display, setDisplay] = useState<Boolean>(false);
  return (
    <div>
      <Header />
      <DisplayContext.Provider value={setDisplay}>
        <IsDisplayContext.Provider value={display}>
          <Route exact path="/" component={HomePageContent} />
        </IsDisplayContext.Provider>
      </DisplayContext.Provider>
      <Route path="/competition" component={Competition} />
      <BackTop style={{zIndex: 100}}/>
      <Layout.Footer
        className="footer"
        style={{ position: 'absolute',width: "100%",height: "15vh",padding: "5vh 0" }}
      >
        <Row>
            <Col span="8">友情链接</Col>
            <Col span="8">制作者</Col>
            <Col span="8">网站信息</Col>
        </Row>
        <Row>
            <Col span="8"><a href="https://www.czu.cn/">常州工学院官网</a></Col>
            <Col span="8" style={{color: "#1890FF"}}>19软二 孙典典&19软二 张天宇</Col>
            <Col span="8" style={{color: "#1890FF"}}>备案号：这是一个备案号</Col>
        </Row>
      </Layout.Footer>
    </div>
  );
}
