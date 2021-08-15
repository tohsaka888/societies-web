import React, { useEffect, useRef } from "react";
import { useTrail, animated } from "react-spring";
import useScreenHeight from "../hook/useScreenHeight";
import "../HomePageComponents/HomePage.css";

export default function IntroList({ children }: any): JSX.Element {
  const items = React.Children.toArray(children);
  const listRef = useRef<HTMLDivElement>(null);
  const [trail, setTrail] = useTrail(items.length, () => ({
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 0,
    x: 20,
    height: 0,
  }));
  const height = useScreenHeight(listRef);
  useEffect(() => {
    console.log(items[0]);
    if (height > -1) {
      setTrail.start({
        opacity: 1,
        x: 0,
        height: 110,
        delay: 1200,
        config: { mass: 5, tension: 2000, friction: 200, duration: 500 },
      });
    } else {
      setTrail.start({
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: 0,
        x: 20,
        height: 0,
      });
    }
  });
  return (
    <div ref={listRef}>
      {trail.map(({ height, ...style }, index) => {
        return (
          <animated.div key={index} className="trailsText" style={style}>
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        );
      })}
    </div>
  );
}
