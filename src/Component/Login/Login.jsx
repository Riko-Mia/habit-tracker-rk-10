import React, { use, useState } from 'react';
import { Link } from 'react-router';
// import Swal from 'sweetalert2'
// or via CommonJS
// const Swal = require('sweetalert2')
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';

const Login = () => {
  // const {error, setError} = useState('')
  const {singinUser, loginONGoogle,} = use(AuthContext)

   const googleProvider = new GoogleAuthProvider();

  const handleSubmit = (e) =>{
      e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    singinUser(email, password)
    .then((result) =>{
      <Navigator to="/"></Navigator>
      // toast.success("Login Success Done")
      e.target.reset()
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Success.",
            showConfirmButton: false,
            timer: 1500
          });
      e.target.reset()
      // console.log(result)
    })
    .catch((error) => {
      // console.log(error)
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
      // setError('User Name or Password wrong!')
    })
  }



  const handleLoginOnGoogle =()=>{
    loginONGoogle(googleProvider)

  }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name="password" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        {/* {error ? <p className='text-red-600'>{error}</p>: ''} */}
        {/* Google */}
<button onClick={handleLoginOnGoogle} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

<Link to="/register">I Have't account?</Link>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;