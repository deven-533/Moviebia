import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate()
    const [login , setlogin] = useState({name : "" , email : ""} ) ;
    const handlechange = (e) => {
		setlogin({ ...login, [e.target.name]: e.target.value });
        console.log(login);
	}
    const handlesubmit = (e) => {
        e.preventDefault();
        const userinfo = JSON.stringify(login)
        localStorage.setItem('userinfo',userinfo)

        toast.success('Successfully Entered')
        navigate('/movies')

    }
    return (
        
        <div className='my-4'>
            <h1 className='my-4'>Get Started</h1>
            <form className='mx-auto my-4 w-50'>

            <div className="form-group">
                <label for="exampleInputName">Name</label>
                <input type="text" className="form-control" value = {login.name} onChange={handlechange} name='name' id="exampleInputName" placeholder="Enter Your Name" />
            </div>
            <div className="form-group ">

                <label for="exampleInputEmail1">Email address</label>
                <input type="text" className="form-control " id="exampleInputEmail1" value = {login.email} onChange={handlechange} name='email' aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            

            <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
        </form></div>
    )
}

export default Login