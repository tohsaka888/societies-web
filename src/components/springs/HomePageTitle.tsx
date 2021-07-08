import React, { useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import useScreenHeight from "../hook/useScreenHeight";
import { DownCircleOutlined } from "@ant-design/icons";
import "../HomePageComponents/HomePage.css";
import cImg from "../../assets/images/c.jpg";
import web from "../../assets/images/web.png"
import computer from "../../assets/images/computer.png"
import { Button, Carousel } from "antd";

export default function HomePageTitle(): JSX.Element {
  const [title1, setTitle1] = useSpring(() => ({
    opacity: 0,
    textShadow: "0px 0px 0px white",
    zoom: 1,
    paddingTop: "30px"
  }));
  const [continueButton, setContinueButton] = useSpring(() => ({
    opacity: 0,
    paddingTop: "10vh",
    color: "white",
    paddingBottom: "10vh",
    zoom: 1,
  }));
  const [backgroundImg, setBackgroundImg] = useSpring(() => ({ opacity: 1 }));
  const title1Ref = useRef<HTMLDivElement>(null);
  const height: Number = useScreenHeight(title1Ref);
  useEffect(() => {
    if (height !== -1) {
      setTitle1.start({
        opacity: 1,
        textShadow: "5px 10px 5px gray",
        paddingTop: "0px",
        config: {duration: 600},
        delay: 500,
      });
      setContinueButton.start({ opacity: 1, config: config.slow, delay: 600 });
      setBackgroundImg.start({ opacity: 1 });
    } else {
      setTitle1.start({ opacity: 0, config: config.slow });
      setContinueButton.start({ opacity: 0, config: config.slow });
      setBackgroundImg.start({
        opacity: 0.6,
        config: {duration: 800},
        delay: 500,
      });
    }
  });
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <animated.div className="img1" style={backgroundImg}></animated.div>
      <div style={{ display: "flex" }}>
        <div className="left-info">
          <animated.div
            style={title1}
            className="title"
            onMouseOver={() => {
              setTitle1({ zoom: 1 });
            }}
            onMouseLeave={() => {
              setTitle1({ zoom: 1 });
            }}
          >
            欢迎来到<span style={{ color: "skyblue" }} ref={title1Ref}>程序员之家</span>
            <div
              style={{
                fontSize: "1.3rem",
                textAlign: "left",
                marginTop: "3vh",
                textShadow: "5px 5px 5px gray"
              }}
            >
              <div>[1] 常州工学院"五星社团"</div>
              <div>
                [2] 提供校园比赛平台，轻松拿奖状，顺利拿学时，活动丰富，奖励多多
              </div>
              <div>
                [3] 技术人员众多，欢迎来社团群提问，给你提供最好的学习平台
              </div>
            </div>
            <div>
              <Button size="large" style={{marginRight: "2vw"}} shape="round">了解详情</Button>
              <Button type="primary" size="large" shape="round">报名比赛</Button>
            </div>
          </animated.div>
        </div>
        <animated.div className="right-info" style={title1}>
          <Carousel autoplay>
            <img src={cImg} alt="c" className="images" />
            <img src={web} alt="web" className="images" />
            <img src={computer} alt="web" className="images" />
          </Carousel>
        </animated.div>
      </div>
      <animated.button
        className="continue-button"
        style={continueButton}
        onClick={() => {
          window.scrollTo({ top: 800, behavior: "smooth" });
        }}
        onMouseOver={() => {
          setContinueButton({ color: "#1890ff", zoom: 1.0 });
        }}
        onMouseLeave={() => {
          setContinueButton({ color: "white", zoom: 1 });
        }}
      >
        <DownCircleOutlined />
      </animated.button>
    </div>
  );
}
