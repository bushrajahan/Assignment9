import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Service from '../../Component/Service/Service';
import { FaArrowRightLong } from "react-icons/fa6";
const Services = () => {
  const data = useLoaderData()
  const navigate = useNavigate()
  console.log(data.items)
  const [show,setShow] = useState(false)
  const [click,setClick] = useState(false)
  const displayData = show?data.items:data.items.slice(0,3);
  const showAll = () =>{
    setShow(true);
    setClick(!click)
  }
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
      {
        displayData.map(data =>  
          <Service   data={data}></Service>

          )
         
  
          
      }
      </div>
<div className='flex justify-center items-center'>
{data?.items.length>3  && !click && <button className ="btn bg-blue-800 text-white mt-4 hover:bg-blue-800"
         onClick={showAll}>Show More
        <FaArrowRightLong></FaArrowRightLong>
      </button>}
</div>
    </div>
      
  );
};

export default Services;