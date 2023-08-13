import React from 'react'

import {Col,Card,CardBody,CardLink,CardSubtitle,CardTitle,CardText, Button} from 'reactstrap'
const SmartphoneComponents = ({products,productcategery}) => {
  return (
    <>

<h2>{productcategery.toUpperCase()}</h2>

{products &&
    products.length > 0 &&
    products.map((item, index) => {
              return (
                <>
                  <Col>
                    <Card key={index}
                      style={{
                        width: "18rem" ,height:"650px",marginBottom:"20px"
                      }}
                    >
                      <CardBody>
                        <CardTitle tag="h5">{item.title}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6"  style={{fontFamily:"Arial",textAlign:"justify"}}>
                          {item.description }
                        </CardSubtitle>
                      </CardBody>
                      <img alt="Card cap" src={item.thumbnail}   style={{width:"100%" ,boxShadow:"0px 0px 10px black",borderRadius:"10px"}}/>
                      <CardBody>
                        <CardText>{item.brand}</CardText>
                        <CardLink href="#">{item.rating}</CardLink>
                        <CardLink href="#">{item.category}</CardLink>
                      </CardBody>

<div className="row">
    <div className="col d-flex mx-5 px-2">
    <Button color='success' size='sm' >Buy Product</Button>
<Button color='info' size='sm' outline>Add To Card</Button>
    </div>
</div>
                    </Card>
                  </Col>
                </>
              );
            })}

    </>
  )
}

export default SmartphoneComponents