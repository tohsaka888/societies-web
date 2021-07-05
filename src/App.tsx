import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
// import { Layout } from 'antd'

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* 主页路由 */}
          <Route component={HomePage} path="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
