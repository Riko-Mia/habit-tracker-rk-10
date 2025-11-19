

import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, Navigate,  } from "react-router";
import { useNavigate } from "react-router-dom";

// The Product Card Component


// const navigate = useNavigate() 
const Card = ( {product} ) => {
  const navigate = useNavigate() 
  const {user} = use(AuthContext)

  const handelViewDetails = (habit) => {
    if(user === null){
      console.log("can't no find user")

      navigate("/login");
    }
    if(habit){
      // console.log(habit._id, habit)
      navigate(`/details/${habit._id}`);
    }

  };
  // console.log(product.title)
  

  const des = product.description.split(' ').splice(0, 20).join(' ')
// const description = des.splice(0, 20)
// console.log(des)


  return (
    <div className="w-full justify-center max-w-sm rounded-xl shadow-2xl overflow-hidden bg-lime-50">
      <div className="relative flex justify-center items-end h-64 rounded-t-xl"
           style={{ background: 'linear-gradient(135deg, #a7a1c7 0%, #6e5f8f 100%)' }}>
        
        <img 
          src={product.imageURL} 
          alt={product.name} 
          className=" h-full w-full"
        />
        
       
      </div>
      
      <div className="p-6">
        <h1 className="text-1xl font-bold text-gray-800 mb-3">{product.title}</h1>
        
        
          <span className="text-xs font-medium text-gray-700 uppercase px-2 py-1 border border-gray-300 rounded-md">
          Category: {product.category}
          </span>
          <div className=" font-medium text-gray-700  py-1 ">
           Created by: {product.email}
          </div>
        {/* <div className="flex space-x-2 mb-4">
        </div> */}
        
        
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          {` ${des}...`}
        </p>
        
        <div className="flex items-center pt-4 border-t border-gray-100">
          
          <button 
            onClick={()=>{handelViewDetails(product)}} 
            className="px-6 py-3 bg-[#6e5f8f] text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-[#584b73] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 active:scale-95"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;