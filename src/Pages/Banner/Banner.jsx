import React, { useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      once: true, // Set to true if you want the animation to occur only once
    });
  }, []);

  const handleShow = () => {
    navigate('/service');
  };

  return (
    <div className="bg-blue-800">
      <div
        className="hero mx-auto min-h-screen"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/1z7rW56/girlboy.jpg")',
        }}
      >
        <div className="hero-overlay opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1
              className="mb-5 text-5xl font-bold font-custom text-blue-600"
              data-aos="fade-up"
            >
              Welcome to happy Baby
            </h1>
            <p className="mb-5 text-blue-800" data-aos="fade-up">
              we organize baby shower party
            </p>
            <button
              onClick={handleShow}
              className="btn bg-blue-800 text-white mt-4 hover:bg-blue-800"
              data-aos="fade-up"
            >
              Services
              <FaArrowRightLong></FaArrowRightLong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
