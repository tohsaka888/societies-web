import React, { useState } from "react";
import { BackTop } from "antd";
import HomePageContent from "./HomePageComponents/HomePageContent";
import Header from "./Header";
import { Route } from "react-router-dom";
import Competition from "./Competition";
import { DisplayContext } from "./Context/context";
import { IsDisplayContext, LoginUserContext } from "./Context/context";
import AdminLogin from "./AdminLogin/AdminLogin";
import Management from "./management/Management";

export default function HomePage(): JSX.Element {
  const [display, setDisplay] = useState<Boolean>(false);
  const [loginUser, setLoginUser] = useState<string>("");
  return (
    <LoginUserContext.Provider value={{loginUser: loginUser, setLoginUser: setLoginUser}}>
      <Header />
      <DisplayContext.Provider value={setDisplay}>
        <IsDisplayContext.Provider value={display}>
          <Route exact path="/" component={HomePageContent} />
        </IsDisplayContext.Provider>
      </DisplayContext.Provider>
      <Route path="/competition" component={Competition} />
      <Route path="/adminLogin" component={AdminLogin} />
      <Route path="/management" component={Management} />
      <BackTop style={{zIndex: 100}}/>
    </LoginUserContext.Provider>
  );
}
