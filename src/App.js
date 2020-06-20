import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import WelcomePage from "./pages/welcome/welcome.component";
import QuestionsPage from "./pages/questions/questions.component";
import TopicPage from "./pages/topic/topic.component";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={WelcomePage} exact />
        <Route path='/questions' component={QuestionsPage} />
        <Route path='/topic' component={TopicPage} />
      </Switch>
    </Router>
  );
};

export default App;
