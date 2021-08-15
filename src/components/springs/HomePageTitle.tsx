import React, { useContext, useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import useScreenHeight from "../hook/useScreenHeight";
import { DownCircleOutlined } from "@ant-design/icons";
import "../HomePageComponents/HomePage.css";
import cImg from "../../assets/images/c.jpg";
import web from "../../assets/images/web.png";
import computer from "../../assets/images/computer.png";
import { Button, Carousel, message } from "antd";
import { Link } from "react-router-dom";
import { LoginUserContext } from "../Context/context";

export default function HomePageTitle(): JSX.Element {
  const [title1, setTitle1] = useSpring(() => ({
    opacity: 0,
    textShadow: "0px 0px 0px white",
    zoom: 1,
    paddingTop: "30px",
  }));
  const {loginUser} = useContext(LoginUserContext)
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
        config: { duration: 600 },
        delay: 500,
      });
      setContinueButton.start({ opacity: 1, config: config.slow, delay: 600 });
      setBackgroundImg.start({ opacity: 1 });
    } else {
      setTitle1.start({ opacity: 0, config: config.slow });
      setContinueButton.start({ opacity: 0, config: config.slow });
      setBackgroundImg.start({
        opacity: 0.6,
        config: { duration: 800 },
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
            欢迎来到
            <span style={{ color: "skyblue" }} ref={title1Ref}>
              程序员之家
            </span>
            <div
              style={{
                fontSize: "1.7rem",
                textAlign: "left",
                marginTop: "3vh",
                textShadow: "5px 5px 5px gray",
                fontWeight: "normal",
              }}
            >
              {loginUser === "" && (
                <div style={{marginBottom: "20px"}}>
                  <div>
                    程序员大舞台,有<span style={{ color: "aqua" }}>"手"</span>
                    你就来!
                  </div>
                  <div>
                    你知道吗?程序员之家的
                    <span style={{ color: "aqua" }}>奖状</span>
                    可以申请
                    <span style={{ color: "aqua" }}>创新学分和学时</span>
                  </div>
                  <div>
                    程序员之家是校内少有的
                    <span style={{ color: "aqua" }}>五星级</span>社团
                  </div>
                </div>
              )}
              {loginUser !== "" && (
                <div style={{marginBottom: "20px"}}>
                  呦呦呦,这不{loginUser}
                  吗,又来参加比赛了?你参加比赛的样子真的好靓仔哦
                  想不出来的骚话...想不出来的骚话...
                </div>
              )}
              <Button size="large" style={{ marginRight: "2vw" }} shape="round">
                了解详情
              </Button>
              <Button type="primary" size="large" shape="round">
                {loginUser !== "" && <Link to="/competition">报名比赛</Link>}
                {loginUser === "" && <div onClick={() => {message.warning("请先登录")}}>报名比赛</div>}
              </Button>
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
