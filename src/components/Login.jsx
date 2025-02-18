import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { addUser } from '../utils/userSlice';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';


function Login() {

  const[emailId, setEmailId] = useState("june@gmail.com");
  const[password, setPasword] = useState("Jane@123");
  const[error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () =>{
    
    try{
      const res = await axios.post(BASE_URL +"/signin",{
      emailId,
      password,
    },{withCredentials: true} );
    console.log(res);
    dispatch(addUser(res.data));
    return navigate('/');
  }catch(err){
    setError(err?.response?.data || "Something went wrong");
  }
  }

  return (
  <div className='flex justify-center my-10'>
        <div className="card bg-base-300 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <div>
      

    <label className="form-control w-full max-w-xs my-4">
  <div className="label">
    <span className="label-text my-2">Email ID</span>
  </div>
  <input type="text" value={emailId} className="input input-bordered w-full max-w-xs" onChange = {(e)=> setEmailId(e.target.value)}/>
</label>


<label className="form-control w-full max-w-xs my-4">
  <div className="label">
    <span className="label-text  my-2">Password</span>
  </div>
  <input type="text" value={password} className="input input-bordered w-full max-w-xs" onChange={(e)=> setPasword(e.target.value)} />
</label>



    </div>
    <p className='text-red-500'>{error}</p>
    <div className="card-actions justify-end my-4">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div> 
  </div>
</div>
  </div>

  
  )
}

export default Login
