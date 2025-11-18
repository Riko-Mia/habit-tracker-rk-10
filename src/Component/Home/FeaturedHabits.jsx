import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const FeaturedHabits = () => {

  const [habits, setHabits] = useState([])
    
              useEffect(()=>{
                fetch("http://localhost:3000/recently_habits")
               .then(res=> res.json())
                .then(data => {
                    // console.log(data, "--------------------")
                    setHabits(data)
                })
                .catch(error => {
                  console.log(error)
                })
              },[])



    return (
        <div>
            <h1 className='text-6xl text-center my-20 font-bold divider'>Featured Habits</h1>
            {/* <div className="divider">Default</div> */}

            {/* <Card></Card> */}
            <div  className="min-h-screen mb-15 p-4 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-center bg-[#d8d4e9] font-inter">{habits.map(habit =>(
                <Card product={habit}></Card>
            ))}</div>
            
        </div>
    );
};

export default FeaturedHabits;