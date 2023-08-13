import "./Caroselcode.css"

import { Container,Row,Col } from "reactstrap";

import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/ATF/Haircare-Herofader-PCiew._CB597783118_.jpg",
    altText: "Slide 1",
  
    key: 1,
  },
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/UNREC/V2_CAT_PC-2_3000._CB598805423_.jpg",
    altText: "Slide 2",

    key: 2,
  },
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg",
    altText: "Slide 3",

    key: 3,
  },



  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Aug_23/Unrec/Luggage/Revised/Lugg_3000._CB597692990_.jpg",
    altText: "Slide 4",

    key: 4,
  },



];

const Caroselecode =(args) =>{
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carsole_image"   />
        <CarouselCaption
    
        />



<Container className="bg-light border" fluid="lg">
        <Row>
          <Col >
            <img src="assets/brand.gif" className="imagesthree" />
          </Col>
          <Col >
            <img src="assets/GentsBanner.gif" className="imagesthree" />
          </Col>
          <Col >
            <img src="assets/LadiesBanner.gif" className="imagesthree" />
          </Col>
        </Row>
      </Container>
      </CarouselItem>
    );
  });

  return (

    <>

    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>

 
   
    </>
  );
}

export default Caroselecode;
