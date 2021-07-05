import React, { useCallback, useEffect, useRef } from "react";
import "./RecentInfo.css";
import image from "../../assets/images/web.png";
import { Button, Tag, Typography } from "antd";
import { useSpring, animated, useTrail } from "react-spring";
import useScreenHeight from "../hook/useScreenHeight";

export default function RecentInfo(): JSX.Element {
  const [infoTitle, setInfoTitle] = useSpring(() => ({
    opacity: 0,
  }));
  const [trails, setTrails] = useTrail(3, () => ({
    transform: "translate3d(100%,0,0)",
  }));
  const titleRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);
  const height: Number = useScreenHeight(titleRef);
  const trailHeight: Number = useScreenHeight(trailRef);
  const changeAnimate = useCallback(
    (height: Number, setAnimate: any, fromStyle: any, toStyle: any) => {
      if (height !== -1) {
        setAnimate.start(fromStyle);
      } else {
        setAnimate.start(toStyle);
      }
    },
    []
  );
  useEffect(() => {
    changeAnimate(height, setInfoTitle, { opacity: 1, delay: 500 }, { opacity: 0 });
    changeAnimate(
      trailHeight,
      setTrails,
      { transform: "translate3d(0,0,0)", delay: 600 },
      { transform: "translate3d(100%,0,0)" }
    );
  });
  return (
    <div>
      <animated.div className="recent-title" style={infoTitle} ref={titleRef}>
        近期活动
      </animated.div>
      <div ref={trailRef}>
      {trails.map((item, index) => {
        return (
          <animated.div style={item} key={index}>
            <div className="cards">
              <div>
                <img src={image} alt="web" className="image" />
              </div>
              <Button
                type="primary"
                style={{
                  float: "right",
                  position: "absolute",
                  right: 40,
                  top: 30,
                }}
              >
                点击查看详情
              </Button>
              <div>
                <Typography style={{ textAlign: "left" }}>
                  <Typography.Title level={2}>前端开发大赛</Typography.Title>
                  <div style={{ textAlign: "left", marginBottom: "2vh" }}>
                    <Tag color="red">前端</Tag>
                    <Tag color="green">比赛</Tag>
                  </div>
                  <Typography.Paragraph ellipsis={{ rows: 3 }}>
                    这是一段前端开发比赛的描述 这是一段前端开发比赛的描述
                    这是一段前端开发比赛的描述 这是一段前端开发比赛的描述
                    这是一段前端开发比赛的描述 这是一段前端开发比赛的描述
                    这是一段前端开发比赛的描述 这是一段前端开发比赛的描述
                    这是一段前端开发比赛的描述 这是一段前端开发比赛的描述
                    这是一段前端开发比赛的描述 这是一段前端开发比赛的描述
                  </Typography.Paragraph>
                </Typography>
              </div>
            </div>
          </animated.div>
        );
      })}
      </div>
    </div>
  );
}
