import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ data }) => {
  const navigate = useNavigate();
  const { btn, id, img, details, price, title } = data;

  return (
    <div className="">
      <div className="card bg-blue-800 mt-20 shadow-xl max-w-md">
        <figure className="w-full">
          <img src={img} alt="Shoes" className="h-96 w-full" />
        </figure>
        <div className="card-body">
          <p className="card-title text-white text-center text-2xl sm:text-3xl md:text-4xl">{title}</p>
          <div className="card-actions justify-end sm:flex-row">
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/details/${id}`)}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
