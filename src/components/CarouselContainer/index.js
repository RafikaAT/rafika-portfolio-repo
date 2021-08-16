import React from 'react';
import { Carousel } from 'react-bootstrap';
import './style.css';
import adventurer from '../../images/adventurer.jpg';
import explorer from '../../images/explorer.jpg';
import traveller from '../../images/carousel4.jpg';

const CarouselContainer = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={adventurer} alt="First slide" />
          <Carousel.Caption>
            <h3>Adventurer</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={explorer} alt="Second slide" />
          <Carousel.Caption>
            <h3>Explorer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={traveller} alt="Third slide" />
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
