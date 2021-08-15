import {
  Layout,
  Menu,
} from "antd";
import React, { useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import { pushRequest } from "./requests/request";
import CompetitionContent from "./competitionComponets/CompetitionContent";
export default function Competition(): JSX.Element {
  const [competitionList, setCompetitionList] = useState([{_id: ""}]);
  const history = useHistory();
  useEffect(() => {
    pushRequest("/competitionList", {}).then((value) => {
      setCompetitionList(value.competitionList);   
      if (value.competitionList.length !== 0) {
        history.push(`/competition/${value.competitionList[0]._id}`)
      }
    });
  }, [history]);
  return (
    <Layout>
      <Layout.Sider style={{ position: "fixed", height: "100vh" }}>
        <Menu
          defaultSelectedKeys={["0"]}
          style={{ paddingTop: "1vh" }}
          theme="dark"
        >
          {competitionList.length !== 0 &&
            competitionList.map((item: any, index) => {
              return (
                <Menu.Item key={index.toString()}>
                  <Link to={`/competition/${item._id}`}>{item.title}</Link>
                </Menu.Item>
              );
            })}
        </Menu>
      </Layout.Sider>
      <Route path="/competition/:id" component={CompetitionContent} />
    </Layout>
  );
}
