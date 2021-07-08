import {
  Carousel,
  Col,
  Divider,
  Layout,
  Menu,
  Row,
  Table,
  Typography,
} from "antd";
import React from "react";
import "./style/Competition.css";
import web from "../assets/images/web.png";
import {
  TrophyOutlined ,
  QqOutlined,
  CalendarOutlined,
  LaptopOutlined,
  UserOutlined,
  TeamOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { Route, Link } from "react-router-dom";
export default function Competition(): JSX.Element {
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "学院",
      dataIndex: "collage",
      key: "collage",
    },
    {
      title: "班级",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "获得奖项",
      dataIndex: "award",
      key: "award",
    },
    {
      title: "领奖地点",
      dataIndex: "place",
      key: "place",
    },
    {
      title: "领奖时间",
      dataIndex: "time",
      key: "time",
    },
  ];
  const dataSource = [
    {
      key: "1",
      name: "孙典典",
      collage: "计算机信息工程学院",
      class: "19软二",
      award: "一等奖",
      place: "开阳楼A312",
      time: "2021年10月1日",
    },
    {
      name: "张天宇",
      collage: "计算机信息工程学院",
      class: "19软二",
      award: "一等奖",
      place: "开阳楼A312",
      time: "2021年10月1日",
    },
  ];
  return (
    <Layout>
      <Layout.Sider style={{ position: "fixed", height: "100vh" }}>
        <Menu
          defaultSelectedKeys={["1"]}
          style={{ paddingTop: "1vh" }}
          theme="dark"
        >
          <Menu.Item key={"1"}>
            <Link to={"/competition/1"}>前端开发大赛</Link>
          </Menu.Item>
          <Menu.Item key={"2"}>
            <Link to={"/competition/2"}>计算机知识竞赛</Link>
          </Menu.Item>
          <Menu.Item key={"3"}>
            <Link to={"/competition/3"}>C程序设计大赛</Link>
          </Menu.Item>
          <Menu.Item key={"4"}>
            <Link to={"/competition/4"}>微信小程序开发大赛</Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Route path="/competition/:id">
        <Layout style={{ marginLeft: "12vw" }}>
          <Layout.Content className="layout_content">
            <div className="page_title">前端开发大赛</div>
            <div className="page_title_2">比赛介绍</div>
            <div style={{ display: "flex" }} className="intro">
              <div className="banner">
                <Carousel autoplay>
                  <img src={web} alt="web" className="img" />
                  <img src={web} alt="web" className="img" />
                </Carousel>
              </div>
              <div className="right_text">
                <Typography>
                  <Typography.Paragraph
                    ellipsis={{ rows: 7, expandable: true }}
                  >
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                    这是一段介绍 这是一段介绍 这是一段介绍 这是一段介绍
                  </Typography.Paragraph>
                </Typography>
              </div>
            </div>
            <div className="page_title_2">比赛须知</div>
            <div className="intro" style={{ padding: "4vh 2vw" }}>
              <Row style={{ textAlign: "left" }}>
                <Col span={8}>
                  <QqOutlined style={{ fontSize: "1.5rem" }} />
                  <span style={{ fontSize: "1.2rem", marginLeft: "1vw" }}>
                    竞赛QQ群：1234567890
                  </span>
                </Col>
                <Col span={8}>
                  <CalendarOutlined style={{ fontSize: "1.5rem" }} />
                  <span style={{ fontSize: "1.2rem", marginLeft: "1vw" }}>
                    报名时间：2021年9月10日
                  </span>
                </Col>
                <Col span={8}>
                  <LaptopOutlined style={{ fontSize: "1.5rem" }} />
                  <span style={{ fontSize: "1.2rem", marginLeft: "1vw" }}>
                    比赛时间：2021年9月20日
                  </span>
                </Col>
              </Row>
              <Divider />
              <Row style={{ textAlign: "left" }}>
                <Col span={8}>
                  <UserOutlined style={{ fontSize: "1.5rem" }} />
                  <span style={{ fontSize: "1.2rem", marginLeft: "1vw" }}>
                    限报人数：30 人
                  </span>
                </Col>
                <Col span={8}>
                  <TeamOutlined style={{ fontSize: "1.5rem" }} />
                  <span style={{ fontSize: "1.2rem", marginLeft: "1vw" }}>
                    比赛方式：个人赛/答辩
                  </span>
                </Col>
                <Col span={8}>
                  <BankOutlined style={{ fontSize: "1.5rem" }} />
                  <span style={{ fontSize: "1.2rem", marginLeft: "1vw" }}>
                    比赛地点：开阳楼A312
                  </span>
                </Col>
              </Row>
            </div>
            <div className="page_title_2">奖项设置</div>
            <div className="intro">
              <Row>
                <Col span="6">
                  <div className="card">
                    <TrophyOutlined 
                      style={{
                        fontSize: "4rem",
                        margin: "15% auto",
                        color: "gold",
                      }}
                    />
                    <div className="bonus">一等奖</div>
                    <div className="bonus">1名</div>
                  </div>
                </Col>
                <Col span="6">
                  <div className="card">
                    <TrophyOutlined 
                      style={{
                        fontSize: "4rem",
                        margin: "15% auto",
                        color: "silver",
                      }}
                    />
                    <div className="bonus">二等奖</div>
                    <div className="bonus">3名</div>
                  </div>
                </Col>
                <Col span="6">
                  <div className="card">
                    <TrophyOutlined 
                      style={{
                        fontSize: "4rem",
                        margin: "15% auto",
                        color: "sienna",
                      }}
                    />
                    <div className="bonus">三等奖</div>
                    <div className="bonus">5名</div>
                  </div>
                </Col>
                <Col span="6">
                  <div className="card">
                    <TrophyOutlined 
                      style={{ fontSize: "4rem", margin: "15% auto" }}
                    />
                    <div className="bonus">优秀奖</div>
                    <div className="bonus">10名</div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="page_title_2">获奖名单</div>
            <div className="intro" style={{ padding: "3vh 2vw" }}>
              <Table columns={columns} bordered dataSource={dataSource}></Table>
            </div>
          </Layout.Content>
        </Layout>
      </Route>
    </Layout>
  );
}
