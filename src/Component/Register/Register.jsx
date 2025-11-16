import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {

const {createUser} = use(AuthContext)
  // console.log(singinUser, '--------------------------')

  const handleSubmit = (e) =>{
      e.preventDefault()
    const name = e.target.name.value;
    const imageUrl = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    createUser( email, password)



    .then((result) =>{
      {<Navigator to="/"></Navigator>}
      console.log(result)
      toast.success("Register Done")
      e.target.reset()
    })
    .catch((error) => {
      console.log(error)
    })
    console.log(createUser)
  }

  
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            {/* Name */}
          <label className="label">Full Name</label>
          <input type="text" className="input" name='name' placeholder="Name" />
          {/* imgUrl */}
          <label className="label">Image Url</label>
          <input type="text" className="input" name='url' placeholder="Image Url" />

          {/* Email */}
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          {/* Password */}
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          {/* <div><a className="link link-hover">Forgot password?</a></div> */}
          <button className="btn btn-neutral mt-4">Register</button>
          <Link to="/login">All ready have an account?</Link>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;