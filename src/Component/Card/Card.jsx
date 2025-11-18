
// Define the main App component that renders the card
// const Card = () => {
//   return (
//     <div className="min-h-screen p-4 sm:p-8 flex items-center justify-center bg-[#d8d4e9] font-inter">
//       <ProductCard product={MOCK_PRODUCT} />
//       <ProductCard product={MOCK_PRODUCT} />
//       <ProductCard product={MOCK_PRODUCT} />
//     </div>
//   );
// };

// The Product Card Component
const Card = ( {product} ) => {

  const handelViewDetails = (id) => {
    console.log(id)
  };
  console.log(product.title)
  

  const des = product.description.split(' ').splice(0, 20).join(' ')
// const description = des.splice(0, 20)
// console.log(des)


  return (
    <div className="w-full max-w-sm rounded-xl shadow-2xl overflow-hidden bg-lime-50">
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
          <div className=" font-medium text-gray-700 lowercase  py-1 ">
           Created by: {product.email}
          </div>
        {/* <div className="flex space-x-2 mb-4">
        </div> */}
        
        
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          {` ${des}...`}
        </p>
        
        <div className="flex items-center pt-4 border-t border-gray-100">
          
          <button 
            onClick={()=>{handelViewDetails(product._id)}} 
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