import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const MyHabits = () => {
    const [myHabit, setMyHabit] = useState([])
    const [localId, setLocalId] = useState('')

    const {user} = use(AuthContext);
    useEffect(() =>{
        if(user?.email){
            console.log(user.email)
            fetch(`http://localhost:3000/myHabits?gmail=${user.email}`)
            .then(res => res.json())
            .then(data =>{
                setMyHabit(data)
            })
            .catch(error =>{
                console.log(error)
            })
        }
    }, [user?.email])

    const handleUpdate= (id)=>{
      setLocalId(id)
    }
    

    const handleModalSubmit = (e) =>{
           e.preventDefault()
           console.log(e.target.category.value)
        
        const UpdateHabit= {
             title : e.target.title.value, 
             category : e.target.category.value, 
             description : e.target.description.value, 
             imageURL : e.target.imageURL.value,
            //  timestamps: true 
        }

        fetch(`http://localhost:3000/habits/${localId}`,{
                    method:"PATCH",
                    headers :{
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify(UpdateHabit)
                })
                    .then(res=> res.json())
                    .then(data => {
                        console.log(data, "--------------------", data.createdAt)
                    })
                    .catch(error => {
                      console.log(error)
                    })}


  const handleDelete = (id)=>{
    console.log(id, "Delete ID.....")



  }                    



    return (
        <div>


            all my habits.....{myHabit.length}

            <div>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>No</th>
        <th>Title</th>
        <th>Category</th>
        <th>Current Streak</th>
        <th>Created Date</th>
        <th>Update | Delete | Mark Complete</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {myHabit.map((habit, index) =>(
        <>      
        <tr>
    
        <td>
          {/* <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div> */}
          <p>{index +1}</p>
        </td>

        <td>
          {/* Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
          {habit.title}
        </td>
        <td>{habit.category}</td>
        <td>Not add</td>
        <td>{habit.createdAt}</td>
        <td>
          <div className="join">
            {/* <input onClick={()=>handleUpdate(habit._id)} htmlFor="my_modal_7"  className="join-item btn" type="radio" name="options" aria-label="Update" /> */}
      <label onClick={()=>handleUpdate(habit._id)}  htmlFor="my_modal_7"  className="join-item btn" type="radio" name="options" aria-label="Update" >Update</label>
      {/* <label onClick={()=>handleDelete(habit._id)}  htmlFor="my_modal_7"  className="join-item btn" type="radio" name="options" aria-label="Update" >Delete</label> */}
            <input onClick={()=>handleDelete(habit._id)} htmlFor="my_modal_7"  className="join-item btn" type="radio" name="options" aria-label="Update" />
            
            <input className="join-item btn" type="radio" name="options" aria-label="Mark Complete" />
          </div>
        </td>

      </tr>

</>
      ))}


    </tbody>
  </table>


{/* The button to open modal */}
{/* <label htmlFor="my_modal_7" className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <form onSubmit={handleModalSubmit} >
            <fieldset className="fieldset">
          
            {/* title */}
          <label className="label">Title</label>
          <input type="text" name='title' className="input" placeholder="My Work Start" />
{/* Description */}
<label className="label">Description</label>
          <input type="text" name='description' className="input" placeholder="Here is your Description" />
            {/* Image URL */}
          <label className="label">Image URL</label>
          <input type="url" name='imageURL' className="input" placeholder="Here is Image URL" />

            {/* Category */}
             <label className="label">Category</label>
          <select name='category' className="select">
            <option>Select One</option>
            <option>Work</option>
            <option>Morning</option>
            <option>Fitness</option>
            <option>Study</option>
            <option>Play</option>
          </select>

<button className="btn btn-neutral mt-4">Update Habit</button>

        </fieldset>
</form>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>


</div>
            </div>
        </div>
    );
};

export default MyHabits;