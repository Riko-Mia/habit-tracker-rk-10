import React, { Suspense, useEffect, useState } from 'react';
import Card from '../Card/Card';
import Loading from './../../Loading/Loading';
import { useLoaderData } from 'react-router';

const AllHabits = () => {
    const [habits, setHabits] = useState([])

    // const data = useLoaderData()

          useEffect(()=>{
            fetch("http://localhost:3000/habits")
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
            
            
            <Suspense fallback={<Loading />}>
              <>
                allHabits..........{habits.length+1}
                  <div  className="min-h-screen mb-15 p-4 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-center bg-[#d8d4e9] font-inter">
                    {habits.map(habit =>(
                      <Card product={habit}></Card>
                  ))}
                  </div>
              </>
              
            </Suspense>
            
            
            
        </div>
    );
};

export default AllHabits;