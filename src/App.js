import React from "react";
import SideBar from "./components/SideBar";

import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import LayOut from "./layOut/LayOut";

const App = () => {
  return (
    <LayOut>
      <Routes>
        {routes.map((route) => {
          return <Route {...route} />;
        })}
      </Routes>
    </LayOut>
  );
};

export default App;
