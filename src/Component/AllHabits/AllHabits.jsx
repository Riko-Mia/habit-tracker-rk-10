import React, { useEffect, useState } from 'react';

const AllHabits = () => {
    const [habits, setHabits] = useState([])

          useEffect(()=>{
            fetch("http://localhost:3000/habits")
           .then(res=> res.json())
            .then(data => {
                console.log(data, "--------------------")
                setHabits(data)
            })
            .catch(error => {
              console.log(error)
            })
          },[])


    return (
        <div>
            allHabits..........{habits.length+1}
        </div>
    );
};

export default AllHabits;