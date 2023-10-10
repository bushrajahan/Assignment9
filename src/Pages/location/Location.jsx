import React from 'react';
import { FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Location = () => {
  return (
    <div className="card bg-blue-800 text-white md:w-full shadow-xl">
   <iframe
className='max-w-fit lg:w-full  md:h-96'
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.6716281154513!2d90.51552827468403!3d23.865791484337834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ceae45250c11%3A0xb8847783af2e986f!2sZinda%20Park!5e0!3m2!1sen!2sbd!4v1696867332417!5m2!1sen!2sbd"
/* Make the map responsive to container width */
style={{ border: 0 }}
allowFullScreen
loading="fast"
referrerPolicy="no-referrer-when-downgrade"
/>
    <div className="card-body">
    <p>Our Company is truly exceptional. Their unwavering commitment to excellence, combined with their innovative approach to solving problems, sets them apart as an industry leader. The dedication of their team is evident in every project they undertake, consistently delivering outstanding results. Their customer-centric approach ensures that every client feels valued and well taken care of. It's no wonder that ABC Company has earned a reputation for reliability, professionalism, and unparalleled quality. We're proud to partner with such a remarkable company and look forward to many more successful collaborations in the future.</p>
  <h1 className="text-xl font-bold">Contact Us</h1>
  <div className='flex lg:gap-2'>
    <a href="https://www.facebook.com/"><FaFacebook size={32} className='lg:mt-2' /></a>
    <a href="https://www.whatsapp.com/"><FaWhatsapp size={32} className='lg:mt-2' /></a>
    <a href="https://www.twitter.com/"><FaTwitter size={32} className='lg:mt-2' /></a>
   
    </div>
  </div>
  </div>
  );
};

export default Location;

  