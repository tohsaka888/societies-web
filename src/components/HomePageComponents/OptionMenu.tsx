import { Button, message, Typography } from "antd";
import React, { useContext, useEffect, useRef } from "react";
import {
  QqOutlined,
  SolutionOutlined,
  UsergroupAddOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import "./optionMenu.css";
import { useSprings, animated, config } from "react-spring";
import useScreenHeight from "../hook/useScreenHeight";
import { LoginUserContext, RegisterContext } from "../Context/context";
import { useHistory } from "react-router";

export default function OptionMenu(): JSX.Element {
  const menuInfo = [
    { title: "QQ交流群", text: 598547810 },
    { title: "报名比赛", text: "报名比赛入口" },
    { title: "了解程序员之家", text: "程序员之家什么社团" },
    { title: "加入程序员之家", text: "一起来为社团出分力" },
  ];
  const [cards, setCardStyle] = useSprings(menuInfo.length, () => ({
    marginTop: "30px",
    boxShadow: "0px 0px 0px 0px gray",
    backgroundColor: "#cecece",
    opacity: 0,
  }));
  const cardRef = useRef<HTMLDivElement | null>(null);
  const height = useScreenHeight(cardRef);
  const history = useHistory()
  const {loginUser} = useContext(LoginUserContext)
  const { setIsRegisterVisible } = useContext(RegisterContext)
  // const showDetail = (index: number) => {

  // }
  useEffect(() => {
    if (height !== -1) {
      setCardStyle.start({ opacity: 1, config: { duration: 1000 } });
    } else {
      setCardStyle.start({ opacity: 0 });
    }
  }, [height, setCardStyle]);
  return (
    <div className="option-menu">
      <div className="grid-display" ref={cardRef}>
        {cards.map((item: any, index: number) => {
          const showDetail = () => {
            switch (index) {
              case 0:
                
                break;
              case 1:
                if (loginUser) {
                  history.push('/competition')
                } else {
                  message.warning("请先登陆")
                }
                break;
              case 2:
                message.warning("暂不可用,开发中")
                break;
              default:
                if (loginUser) {
                  message.warning("已经加入啦,感谢支持")
                } else {
                  setIsRegisterVisible(true)
                }
                break;
            }
          }
          return (
            <div
              key={index}
              onMouseOver={() => {
                setCardStyle.start((active: number) => ({
                  marginTop: active === index ? "0px" : "30px",
                  boxShadow:
                    active === index
                      ? "0px 0px 3px 3px #1890ff"
                      : "0px 0px 0px 0px white",
                  config: config.wobbly
                }));
              }}
              onMouseLeave={() => {
                setCardStyle.start({
                  marginTop: "30px",
                  boxShadow: "0px 0px 0px 0px gray",
                });
              }}
            >
              <animated.div className="card-layout" style={item} key={index}>
                {menuInfo[index].title === "QQ交流群" && (
                  <QqOutlined style={{ fontSize: "5rem" }} />
                )}
                {menuInfo[index].title === "报名比赛" && (
                  <SolutionOutlined style={{ fontSize: "5rem" }} />
                )}
                {menuInfo[index].title === "了解程序员之家" && (
                  <ReadOutlined style={{ fontSize: "5rem" }} />
                )}
                {menuInfo[index].title === "加入程序员之家" && (
                  <UsergroupAddOutlined style={{ fontSize: "5rem" }} />
                )}
                <Typography>
                  <Typography.Paragraph className="intro-title">
                    {menuInfo[index].title}
                  </Typography.Paragraph>
                  <Typography.Text
                    className="intro-text"
                    copyable={index ? false : true}
                  >
                    {menuInfo[index].text}
                  </Typography.Text>
                  <Button className="detail-button" type="primary" onClick={showDetail}>
                    点击了解详情
                  </Button>
                </Typography>
              </animated.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
