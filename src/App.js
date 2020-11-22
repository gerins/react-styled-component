import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages";
import SigninPage from "./pages/Signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin' component={SigninPage} />
      </Switch>
    </Router>
  );
}

export default App;
