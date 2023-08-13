import React, { useEffect, useState } from "react";
import SmartphoneComponents from "./Productcategery";
import { Container, Row } from "reactstrap";

import { useParams } from "react-router-dom";

const SmartphoneContainers = () => {
  const routePatrames = useParams();

//   console.log("routePatrames", routePatrames);


  const [products, setProducts] = useState([]);
const [productcategery ,setProductcategery] = useState("")

  useEffect(() => {


    const category = routePatrames.item;

    setProductcategery(category)
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(response => {
        const result = response.products.filter((item) => item.category === category)
        setProducts(result)

      })
  }, []);
  return (
    <>
      <Container>
        <Row>
          <SmartphoneComponents products={products} productcategery={productcategery} />
        </Row>
      </Container>
    </>
  );
};

export default SmartphoneContainers;
