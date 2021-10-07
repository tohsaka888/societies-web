import "./HomePage.css";
import { Layout } from "antd";
// import { useEffect, useRef } from "react";
// import useScreenHeight from "../hook/useScreenHeight";
import HomePageTitle from "../springs/HomePageTitle";
import OptionMenu from "./OptionMenu";
import RecentInfo from "./RecentInfo";
// import Comment from "./Comment";

export default function HomePageContent() {
  // const title1Ref = useRef<HTMLDivElement>(null);
  // const height:Number = useScreenHeight(title1Ref);
  // useEffect(()=>{
  //   console.log(height)
  // })
  return (
    <Layout.Content>
      <HomePageTitle />
      <OptionMenu />
      <RecentInfo />
      {/* <Comment /> */}
    </Layout.Content>
  );
}
