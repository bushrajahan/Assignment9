import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Service from '../../Component/Service/Service';
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    fetch('/public/data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, []);

  const navigate = useNavigate();
  console.log(data?.items);

  const displayData = show ? data.items : data?.items?.slice(0, 3);

  const showAll = () => {
    setShow(true);
    setClick(!click);
  };

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  bg-blue-800'>
        {displayData?.map(data =>
          <Service key={data?.id} data={data}></Service>
        )}
     

   
        <div className='flex justify-center items-center'>
          <div>
            
          </div>
        {data?.items?.length > 3 && !click &&
          <button
            className="btn bg-blue-800 text-white m-4 hover:bg-blue-800"
            onClick={showAll}
          >
            Show More
            <FaArrowRightLong />
          </button>
        }
        </div>
      
    </div>
    </div>
  );
};

export default Services;
