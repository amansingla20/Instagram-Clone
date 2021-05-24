import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import HomePage from "./Components/Home Page/HomePage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/homepage" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
