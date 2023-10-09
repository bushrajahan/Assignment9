
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Testimonial = () => {
  return (
    <div>
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-1/2">
    <img src="/public/man3.webp" className="w-1/2" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
            <h3 className="text-xl font-semibold">Mohn Doe</h3>
            <p className="text-gray-600"> I had a great experience with this company. Their service is top-notch!</p>
          </div>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-1/2">
    <img src="/public/man4.webp" className="w-1/2" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>

    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">I had a great experience with this company. Their service is top-notch!</p>
          </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-1/2">
    <img src="/public/man4.webp" className="w-1/2" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
            <h3 className="text-xl font-semibold">Rohn Doe</h3>
            <p className="text-gray-600">I had a great experience with this company. Their service is top-notch!</p>
          </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-1/2">
    <img src="/public/person4.jpeg" className="w-1/2" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
            <h3 className="text-xl font-semibold">Lohn Doe</h3>
            <p className="text-gray-600">I had a great experience with this company. Their service is top-notch!</p>
          </div>
  </div>
</div>
    </div>
  );
};



export default Testimonial;