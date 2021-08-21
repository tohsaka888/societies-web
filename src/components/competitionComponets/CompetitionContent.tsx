import {
  Carousel,
  Col,
  Divider,
  Layout,
  Row,
  Table,
  Typography,
  Button,
  Modal,
  message,
  Spin,
} from "antd";
import "../style/Competition.css";
import web from "../../assets/images/web.png";
import {
  TrophyOutlined,
  QqOutlined,
  CalendarOutlined,
  LaptopOutlined,
  UserOutlined,
  TeamOutlined,
  BankOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { useHistory, useParams } from "react-router-dom";
import { pushRequest } from "../requests/request";
import { useContext, useEffect, useState } from "react";
import { LoginUserContext } from "../Context/context";

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    index: "name",
  },
  {
    title: "学院",
    dataIndex: "collage",
    index: "collage",
  },
  {
    title: "班级",
    dataIndex: "class",
    index: "class",
  },
  {
    title: "获得奖项",
    dataIndex: "award",
    index: "award",
  },
  {
    title: "领奖地点",
    dataIndex: "place",
    index: "place",
  },
  {
    title: "领奖时间",
    dataIndex: "time",
    index: "time",
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
    key: "2",
    name: "张天宇",
    collage: "计算机信息工程学院",
    class: "19软二",
    award: "一等奖",
    place: "开阳楼A312",
    time: "2021年10月1日",
  },
];

export default function CompetitionContent() {
  const { id } = useParams<{ id: string }>();
  const [page, setPage] = useState<any>({});
  const [visible, setVisible] = useState<boolean>(false);
  const [spin, setSpin] = useState<boolean>(true)
  const { loginUser } = useContext(LoginUserContext);
  const history = useHistory();
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
    pushRequest("/pages", { id: id }).then((value) => {
      setPage(value.pageList[0]);
    });
    setSpin(false)
  }, [id]);
  const signUp = async () => {
    pushRequest("/isSignUp", { username: loginUser, id: id }).then((value) => {
      if (value.message[0].isSignUp === true) {
        message.warning("已经参加比赛,感谢支持!");
        setVisible(false);
      } else {
        pushRequest("/signUpCompetition", { username: loginUser, id: id }).then(
          (value) => {
            if (value.message === "报名成功") {
              message.success(value.message);
              setVisible(false);
            } else {
              message.error(value.message);
              setVisible(false);
            }
          }
        );
      }
    });
  };
  return (
    <div key={id}>
      <Layout style={{ marginLeft: "13vw", width: "86vw" }}>
        <Spin spinning={spin}>
          <Layout.Content className="layout_content">
            <div className="page_title_2">比赛介绍</div>
            <div style={{ display: "flex", height: "31vh" }} className="intro">
              <div className="banner">
                <Carousel autoplay>
                  <img src={web} alt="web" className="img" />
                  <img src={web} alt="web" className="img" />
                </Carousel>
              </div>
              <div className="right_text">
                <Typography>
                  <Typography.Title level={3}>{page.title}</Typography.Title>
                  <Typography.Paragraph
                    ellipsis={{ rows: 5, expandable: true }}
                  >
                    {page.intro}
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
                    竞赛QQ群：{page.QQ}
                  </span>
                </Col>
                <Col span={8}>
                  <CalendarOutlined style={{ fontSize: "1.5rem" }} />
                  <span style={{ fontSize: "1.2rem", marginLeft: "1vw" }}>
                    报名时间：{page.startTime}
                  </span>
                </Col>
                <Col span={8}>
                  <LaptopOutlined style={{ fontSize: "1.5rem" }} />
                  <span style={{ fontSize: "1.2rem", marginLeft: "1vw" }}>
                    比赛时间：{page.endTime}
                  </span>
                </Col>
              </Row>
              <Divider />
              <Row style={{ textAlign: "left" }}>
                <Col span={8}>
                  <UserOutlined style={{ fontSize: "1.5rem" }} />
                  <span style={{ fontSize: "1.2rem", marginLeft: "1vw" }}>
                    限报人数：{page.limitPeople} 人
                  </span>
                </Col>
                <Col span={8}>
                  <TeamOutlined style={{ fontSize: "1.5rem" }} />
                  <span style={{ fontSize: "1.2rem", marginLeft: "1vw" }}>
                    比赛方式：{page.way}
                  </span>
                </Col>
                <Col span={8}>
                  <BankOutlined style={{ fontSize: "1.5rem" }} />
                  <span style={{ fontSize: "1.2rem", marginLeft: "1vw" }}>
                    比赛地点：{page.place}
                  </span>
                </Col>
              </Row>
            </div>
            <div className="page_title_2">奖项设置</div>
            <div className="intro">
              <Row style={{ marginBottom: "4vh" }}>
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
                    <div className="bonus">{page.firstPeople}名</div>
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
                    <div className="bonus">{page.secondPeople}名</div>
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
                    <div className="bonus">{page.secondPeople}名</div>
                  </div>
                </Col>
                <Col span="6">
                  <div className="card">
                    <TrophyOutlined
                      style={{ fontSize: "4rem", margin: "15% auto" }}
                    />
                    <div className="bonus">优秀奖</div>
                    <div className="bonus">{page.otherPeople}名</div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="page_title_2">获奖名单</div>
            <div
              className="intro"
              style={{ padding: "3vh 2vw", marginTop: "2vh" }}
            >
              <Table columns={columns} bordered dataSource={dataSource}></Table>
            </div>
            <div
              className="page_title_2"
              style={{
                textAlign: "center",
                marginBottom: "0",
                paddingBottom: "2vh",
              }}
            >
              <Button
                size="large"
                style={{ marginRight: "1vw" }}
                onClick={() => {
                  history.push("/");
                }}
              >
                返回主页
              </Button>
              <Button
                type="primary"
                size="large"
                onClick={() => {
                  setVisible(true);
                }}
              >
                报名比赛
              </Button>
            </div>
          </Layout.Content>
        </Spin>
      </Layout>
      <Modal
        title="报名比赛"
        visible={visible}
        okText="报名"
        cancelText="取消"
        onCancel={() => {
          setVisible(false);
        }}
        onOk={signUp}
      >
        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <WarningOutlined style={{ color: "orange", fontSize: "2rem" }} />
          <div style={{ marginLeft: "1vw", fontSize: "1rem" }}>
            <div>确定要参加比赛吗?</div>
            <div>参加后不可退赛,比赛当天不来将导致PU信誉分下降</div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
