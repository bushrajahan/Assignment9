import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
  const data = useLoaderData();
  const {id} = useParams();
  // const {btn,img,details,price,title} = data.items;
  console.log(data,id)
  return (
    <div>
          <div className="card  bg-blue-800 top-5 m-3 shadow-xl">
  <figure><img src={img} alt="Shoes" className='w-full h-96 -my-10' /></figure>
  <div className="card-body">
       <p className='card-title text-white'>{title}</p>
       <p className='text-white'>{details}</p>
  
  </div>
</div>
    </div>
  );
};

export default Details;