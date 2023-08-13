import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'reactstrap';

import { routespage } from "./routes-componnets/routespage";


function App() {
  return (
    <Container>
       <BrowserRouter>
          <Routes>
            {
              routespage && routespage.map((item, index) => {
                return <Route key={index} path={item.path} element={<item.component />} />
              })
            }
          </Routes>
        </BrowserRouter>
    </Container>
  );
}

export default App;
