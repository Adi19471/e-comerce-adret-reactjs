import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";



import { routespage } from "./routes-componnets/routespage";


function App() {
  return (
   
       <BrowserRouter>
          <Routes>
            {
              routespage && routespage.map((item, index) => {
                return <Route key={index} path={item.path} element={<item.component />} />
              })
            }
          </Routes>
        </BrowserRouter>

  );
}

export default App;
