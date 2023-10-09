import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const numericId = parseInt(id, 10); // Convert id to a number

  // Find the item with the matching id
  const filteredData = data.items.find((card) => parseInt(card.id) === numericId);

  console.log(data, numericId);

  if (!filteredData) {
    // Handle the case where no matching item is found
    return <div>No matching item found</div>;
  }

  return (
    <div>
      <div className="card top-5 m-3 shadow-xl bg-blue-800 ">
        <figure>
          <img src={filteredData.img} alt="Shoes" className="w-full h-1/3 -mt-10 " />
        </figure>
        <div className="card-body">
          <p className="card-title text-white">{filteredData.title}</p>
          <p className="text-white">{filteredData.details}</p>
          <p className='text-white'>{filteredData.price}$</p>
          <button className='btn bg-white text-blue-800 w-fit p-2'>{filteredData.btn}</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
