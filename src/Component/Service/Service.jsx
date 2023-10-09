import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({data}) => {
  const navigate = useNavigate();
  const {btn,id,img,details,price,title} = data;
  console.log(data)
  return (
    <div >
      <div className="card  bg-blue-800 top-5 m-3 shadow-xl">
  <figure><img src={img} alt="Shoes" className='w-full h-96 -my-10' /></figure>
  <div className="card-body">
       <p className='card-title text-white'>{title}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>navigate(`/details/${id}`)}>Details
      
      
      </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Service;