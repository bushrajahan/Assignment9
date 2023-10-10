import React, { useState } from 'react';
import Slider from 'react-slick';
import { AiFillStar } from 'react-icons/ai';
// Import CSS for react-slick and slick-carousel for styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      img: 'https://i.ibb.co/nkZCYFQ/man3.webp',
      author: 'Sarah Johnson',
      text:
        "I hired the bridal shower company for my daughter's shower, and they exceeded all expectations. The decorations were stunning, and the event ran smoothly.",
    },
    {
      id: 2,
      img: 'https://i.ibb.co/BGYf6kP/peson3.jpg',
      author: 'Michael Anderson',
      text:
        'The bridal shower company made planning our event a breeze. They helped us choose the perfect theme and took care of every detail. It was a stress-free experience.',
    },
    {
      id: 3,
      img: 'https://i.ibb.co/Jzm8dB4/person4.jpg',
      author: 'Emily Davis',
      text:
        "I can't thank the bridal shower company enough for making my best friend's shower so special. The personalized touches and creativity were exceptional.",
    },
    {
      id: 4,
      img: 'https://i.ibb.co/jwgtyZh/chs.jpg',
      author: 'Linda Wilson',
      text:
        "We hired the bridal shower company for our daughter's shower, and it was a hit! The guests were impressed, and everyone had a fantastic time.",
    },
    {
      id: 5,
      img: 'https://i.ibb.co/kqwy5y8/man4.webp',
      author: 'John Smith',
      text:
        'The bridal shower company took care of everything, from the invitations to the entertainment. It was a top-notch experience, and I highly recommend their services.',
    },
    {
      id: 6,
      img: 'https://i.ibb.co/vmwLfnx/chilren-service.jpg',
      author: 'Amanda Parker',
      text:'The bridal shower company took care of everything, from the invitations to the entertainment. It was a top-notch experience, and I highly recommend their services.',
       
    },
  ]);

  

  return (
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-40'>
    {
      testimonials.map(testimonials=>(

        
     
        <div key={testimonials.id} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className="card md:w-96 bg-base-100 shadow-xl">
     <figure><img src={testimonials.img} alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">{testimonials.author}</h2>
       <p>{testimonials.text}</p>
       <div className="card-actions justify-center">
       <AiFillStar className="text-yellow-500 text-2xl" />
   <AiFillStar className="text-yellow-500 text-2xl" />
   <AiFillStar className="text-yellow-500 text-2xl" />
   <AiFillStar className="text-yellow-500 text-2xl" />
   <AiFillStar className="text-gray-300 text-2xl" />
       </div>
     </div>
   </div>
        </div>
         
       
      ))
    }
   </div>
  );
};

export default Testimonial;
