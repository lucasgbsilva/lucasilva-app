import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../screens/Home';
import Login from '../screens/Login';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
