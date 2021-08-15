import React from 'react';
import { Carousel } from 'react-bootstrap';
import adventurer from '../../images/adventurer.jpg';
import './style.css';

const CarouselContainer = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="../../images/adventurer.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Adventurer</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="../../images/explorer.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Explorer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="../../images/carousel4.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3>Traveller</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
