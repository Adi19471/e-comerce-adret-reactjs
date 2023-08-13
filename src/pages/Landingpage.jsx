import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Carosel from "../components/carosel1/Carosel";
import { Col, Container, Row } from "reactstrap";
import Boxes from "../components/Boxes2/Boxes";

const Landingpage = () => {
  const [categery, setCategery] = useState([]);

  console.log(categery);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((response) => setCategery(response));
  }, []);

  return (
    <>
      <Container>
        <Row>
          <h2>Ecom Application</h2>

          <Link to="/registerpage">Signup/Register</Link>
        </Row>
        <Carosel />

        <Boxes />

        <hr />

        <Row>
          <h5 className="text-center text-info text-bg-dark">Lifestyles :-All Categery Inforamtion</h5>
          {categery &&
            categery.length > 0 &&
            categery.map((item, index) => {
              return (
                <>
                  <Col md="4" key={index}>
                    <Link to={"products/"+ item}>
                  
                      <h4 className="itemlink">{item.toUpperCase()}</h4>
                    </Link>
                  </Col>
                </>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default Landingpage;
