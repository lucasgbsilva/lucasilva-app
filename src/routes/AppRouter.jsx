import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/" component={SignIn} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
