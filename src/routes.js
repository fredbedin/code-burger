import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Containers/Home';
import Orders from './Containers/Orders';

function actRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}

export default actRoutes;
