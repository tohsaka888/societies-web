import React, { useCallback, useEffect, useRef, useState } from "react";
import "./RecentInfo.css";
import { Tag, Typography } from "antd";
import { useSpring, animated, useTrail } from "react-spring";
import useScreenHeight from "../hook/useScreenHeight";
import { pushRequest } from "../requests/request";

export default function RecentInfo(): JSX.Element {
  const [infoTitle, setInfoTitle] = useSpring(() => ({
    opacity: 0,
  }));
  const titleRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);
  const height: Number = useScreenHeight(titleRef);
  const trailHeight: Number = useScreenHeight(trailRef);
  const [competitionList, setCompetitionList] = useState<any>([])
  const [trails, setTrails] = useTrail(competitionList.length, () => ({
    transform: "translate3d(100%,0,0)",
  }));
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
  const getList = useCallback(() => {
    pushRequest("/competitionList", {}).then(value => {
      if (value && value.competitionList && value.competitionList.length !== 0) {
        console.log(value.competitionList)
        setCompetitionList(value.competitionList);
      } else {
        setCompetitionList([]);
      }
    })
  },[])
  useEffect(() => {
    getList()
  }, [getList])
  useEffect(() => {
    changeAnimate(
      height,
      setInfoTitle,
      { opacity: 1, delay: 500 },
      { opacity: 0 }
    );
    changeAnimate(
      trailHeight,
      setTrails,
      { transform: "translate3d(0,0,0)", delay: 600 },
      { transform: "translate3d(100%,0,0)" }
    );
  },[changeAnimate, getList, height, setInfoTitle, setTrails, trailHeight]);
  return (
    <div>
      <animated.div className="recent-title" style={infoTitle} ref={titleRef}>
        近期活动
      </animated.div>
      <div ref={trailRef}>
        {competitionList.length !== 0 && trails.map((item, index) => {
          return (
            <animated.div style={item} key={index}>
              <div className="cards">
                <div>
                  <img src={competitionList[index].imgUrl} alt="web" className="image" />
                </div>
                {/* <Button
                  type="primary"
                  style={{
                    float: "right",
                    position: "absolute",
                    right: 40,
                    top: 30,
                  }}
                >
                  <Link to={`/competition/${competitionList[index]._id}`}>点击查看详情</Link>
                </Button> */}
                <div>
                  <Typography style={{ textAlign: "left" }}>
                    <Typography.Title level={2}>{competitionList[index].title}</Typography.Title>
                    <div style={{ textAlign: "left", marginBottom: "2vh" }}>
                      {competitionList[index].tag.map((item: string, index: number) => {
                        return <Tag color="green" key={index}>{item}</Tag>
                      })}
                    </div>
                    <Typography.Paragraph ellipsis={{ rows: 3 }}>
                      {competitionList[index].intro}
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
