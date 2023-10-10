import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const Banner = () => {
  const navigate = useNavigate()
  const handleShow =() =>{
    navigate('/service')
  }
  return (
    <div className="bg-blue-800">
      <div className="hero   mx-auto min-h-screen " style={{backgroundImage:'url("https://i.ibb.co/1z7rW56/girlboy.jpg")'}}>
  <div className="hero-overlay   opacity-0"></div>
  <div className="hero-content  text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold font-custom text-blue-600">Welcome to happy Baby </h1>
      <p className="mb-5  text-blue-800">we organize baby shower party </p>
      <button onClick={handleShow}  className ="btn bg-blue-800 text-white mt-4 hover:bg-blue-800"
         >Services
        <FaArrowRightLong></FaArrowRightLong>
      </button>
    </div>
  </div>
</div>
    </div>
  )
};

export default Banner;
