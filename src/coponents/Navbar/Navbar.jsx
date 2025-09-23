import navImg from "../.././assets/logo.png"
import dollorImg from "../.././assets/dollar-1.png"

const  Navbar = ({availableBalance}) => {
   return ( 
     <div className="navbar w-[1200px] mx-auto bg-white">
  <div className="flex-1">
    <a className=" text-xl">
      <img className='w-[50px] h-[50px]' src={navImg} alt="" />
    </a>
  </div>
  <div className="flex space-x-1.5">
    <span>{availableBalance}</span>
    <span>Coin</span>
    <img src= {dollorImg} alt="" />      
    
  </div>
</div>
   );
};

export default Navbar;