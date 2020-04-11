import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Error from "./components/error";
import Navigation from "./components/navigation";
import Student from "./components/student";
import history from "./components/History";
import Redirect from "./components/redirect";
export default function App() {
  const newRoute = () => {
    return (
      <div>
        <p> New Route </p>
      </div>
    );
  };

  return (
    <Router history={history}>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/newroute" component={newRoute} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/student/:studentname" component={Student} />
        <Route path="/student/:studentname/:studentno?" component={Student} />
        <Route path="/redirect" component={Redirect} />
        <Route path="/error" component={Error} />
      </Switch>
    </Router>
  );
}
