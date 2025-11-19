import React from 'react';
// Using lucide-react for the icons
import {  Briefcase, Activity, ShieldCheck, Wrench, Laptop } from 'lucide-react';

const cardData = [
  {
    icon: (
      <span className="flex items-center space-x-1">
        {/* <Code className="text-red-500 w-8 h-8" /> */}
        <Briefcase className="text-red-500 w-8 h-8" />
      </span>
    ),
    title: 'Smart Work',
    description: 'Smart work means prioritizing tasks based on value and efficiency, not just hours spent. It involves identifying the 20% of activities that generate 80% of your results.',
  },
  {
    icon: <ShieldCheck className="text-indigo-600 w-8 h-8" />,
    title: 'SECURITY',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, voluptatum. Magnihic, voluptate debitis esse corporis dolor laudantium quae quo!',
  },
  {
    icon: <Activity className="text-indigo-600 w-8 h-8" />,
    title: 'Growth Fitness',
    description: 'Fitness growth is the continuous, measurable improvement in your physical capacity, moving beyond initial gains toward long-term mastery of your health.',
  },
  {
    icon: <Wrench className="text-red-500 w-8 h-8" />,
    title: 'MAINTENANCE',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, voluptatum. Magnihic, voluptate debitis esse corporis dolor laudantium quae quo!',
  },
];

// Reusable component for the individual cards
const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="
      bg-white 
      p-6 
      sm:p-8 
      rounded-xl 
      shadow-xl 
      hover:shadow-2xl 
      transition-all 
      duration-300
      flex flex-col
      h-full
      max-w-sm
    ">
        

        
      <div className="flex justify-between items-start mb-4">
        {icon}
      </div>



      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 tracking-wide">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 flex-grow">
        {description}
      </p>




      <div className="mt-6 pt-1">
        <div className="h-0.5 bg-gradient-to-r from-red-500 via-purple-500 to-blue-600 rounded-full w-full"></div>
      </div>
    </div>
  );
};



const Benefit = () => {
  return (
    <div className=" bg-gray-100 flex items-center justify-center py-30">      
      <div className="container mx-auto max-w-7xl">

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {cardData.map((card, index) => (
            <BenefitCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefit;