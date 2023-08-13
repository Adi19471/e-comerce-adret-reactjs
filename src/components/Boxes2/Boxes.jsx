import "./Boxes.css";
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
const Boxes = () => {
  return (
    <>
      <Container>
        <Row>
          <h4 className="freedom">Freedom Special Offers</h4>
          <Col>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img
                alt="Sample"
                src="https://rukminim2.flixcart.com/image/612/612/l3hmwsw0/t-shirt/d/k/g/xl-723-5-6-7-8-ftx-original-imagehzux5jxmxuy.jpeg?q=70"
              />
              <CardBody>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Pack of 4 Men Solid Round Neck Polyester Multicolor T-Shirt
                </CardSubtitle>
                <CardText>Special Proce 429</CardText>
                <Button>Buy</Button>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img
                alt="Sample"
                src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=85,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000012439526-Yellow-Yellow-1000012439526_02-2100.jpg"
              />
              <CardBody>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Up your style quotient with this solid polo T-shirt which has
                  a stand collar neck, button closure, and short sleeves.
                </CardSubtitle>
                <CardText>Special Proce 429</CardText>
                <Button>Buy</Button>
              </CardBody>
            </Card>
          </Col>

          <Col
            style={{
              width: "18rem",
            }}
          >
            <Card>
              <img
                alt="Sample"
                src="https://m.media-amazon.com/images/I/91L+iWKi6nL._UX679_.jpg"
              />
              <CardBody>
                <CardText>
                  Kashvi sarees Women's Bhagalpuri Georgette Blend Saree With
                  Blouse Piece
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Boxes;
