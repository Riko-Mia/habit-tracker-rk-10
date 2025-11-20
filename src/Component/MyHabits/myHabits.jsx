import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const MyHabits = () => {
    const [myHabit, setMyHabit] = useState([])

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

    const handleUpdate= (e, id)=>{
    document.getElementById("my_modal_5").showModal()
    
    

    // const handleModalSubmit = (e, id) =>{
      // console.log("handle modal box finished")
           e.preventDefault()
           console.log(e, id)
        
        const UpdateHabit= {
             title : e.target.title.value, 
             category : e.target.category.value, 
             description : e.target.description.value, 
             imageURL : e.target.imageURL.value,
             timestamps: true 
        }

        fetch(`http://localhost:3000/habits/${id}`,{
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
                    })



    // }

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
            <input onClick={()=>handleUpdate(habit._id)}  className="join-item btn" type="radio" name="options" aria-label="Update" />
            <input className="join-item btn" type="radio" name="options" aria-label="Delete" />
            <input className="join-item btn" type="radio" name="options" aria-label="Mark Complete" />
          </div>
        </td>

      </tr>

</>
      ))}


    </tbody>
  </table>

{/* Modal box open here */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">

                  <div className='m-auto w-full items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body flex">
        <form >
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

{/* <button className="btn btn-neutral mt-4">Add Habit</button> */}


<div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>

        </fieldset>
        </form>
      </div>
    </div>
        </div>

                
                
              </div>
            </dialog>



</div>
            </div>
        </div>
    );
};

export default MyHabits;