import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import List from "./Components/List/List";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={[<Header page="home" />, <Home />]}></Route>
        <Route path="/list" element={[<Header page="list" />, <List />]} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
