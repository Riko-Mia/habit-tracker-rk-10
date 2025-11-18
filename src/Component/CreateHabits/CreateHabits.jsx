import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const CreateHabits = () => {

    const {user} = use(AuthContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        const CreateHabit= {
            userId: user._id,
             name : user.displayName,
             email : user.email,
             title : e.target.title.value, 
             category : e.target.category.value, 
             description : e.target.description.value, 
             imageURL : e.target.imageURL.value,
             createdAt: new Date()
        }
        console.log(user)

        fetch("http://localhost:3000/createHabits",{
                    method:"POST",
                    headers :{
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify(CreateHabit)
                })
                    .then(res=> res.json())
                    .then(data => {
                        console.log(data, "--------------------", data.createdAt)
                    })
                    .catch(error => {
                      console.log(error)
                    })

        console.log(CreateHabit)
    
    }



    return (
        <div className='m-auto w-full items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body flex">
        <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">

            {/* User Name */}
            <label className="label">User Name</label>
          <input type="text" className="input" placeholder="User Name" value={user? user.displayName: ''} />

        {/* Email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" value={user? user.email: ''} />

        
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

          <button className="btn btn-neutral mt-4">Add Habit</button>
        </fieldset>
        </form>
      </div>
    </div>
        </div>
    );
};

export default CreateHabits;