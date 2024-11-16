import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselImage from "../CarouselImage";
import tapeRecorder from "../../assets/images/tape-recorder.jpg";
import "../../styles/components/projects/mediaset.css";

const images = [
  {
    src: tapeRecorder,
    alt: "First slide",
    title: "First slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    src: tapeRecorder,
    alt: "Second slide",
    title: "Second slide label",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: tapeRecorder,
    alt: "Third slide",
    title: "Third slide label",
    description:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
];

const Mediaset = () => {
  return (
    <div>
      <Carousel className="carousel">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <CarouselImage src={image.src} alt={image.alt} text="First slide" />
            <Carousel.Caption>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Mediaset;
