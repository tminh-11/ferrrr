// src/components/SlideBar.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { slideImages } from '../data/slideImages';

function SlideBar() {
  return (
    <Carousel 
      fade 
      interval={5000} 
      pause="hover" 
      indicators={true} 
      controls={true}
      className="shadow-lg mb-4"
    >
      {slideImages.map((item, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-img-wrapper">
            <img
              className="d-block w-100"
              src={item.image}
              alt={item.title}
              style={{
                height: '60vh',           // chiều cao linh hoạt
                minHeight: '400px',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            {/* Overlay tối để chữ nổi bật */}
            <div className="carousel-overlay"></div>
          </div>

          <Carousel.Caption className="carousel-caption-custom">
            <h2 className="fw-bold display-4 mb-3 text-shadow">{item.title}</h2>
            <p className="lead fs-4 text-shadow">{item.description}</p>
            <a 
              href="/register" 
              className="btn btn-danger btn-lg mt-3 px-5 py-3 fw-bold"
            >
              Đặt Pizza Ngay
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default SlideBar;