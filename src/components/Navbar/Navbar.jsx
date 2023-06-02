import React from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router'


const Navbar = () => {

    const navigate = useNavigate();

    const handlelogout = () => {
        localStorage.removeItem('userinfo')
        toast.success("Logged Out")
        navigate('/')
    }


    return (
        <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Moviebia</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {localStorage.getItem('userinfo') ?<ul className="navbar-nav mr-auto">
                    <li className="nav-item active mx-4" onClick={()=>{navigate('/movies')}}>
                        <a className="nav-link" href="#" >Home <span className="sr-only">(current)</span></a>
                    </li>

                </ul>: ""}
                <form className="form-inline my-2 my-lg-0">{localStorage.getItem('userinfo') ?  <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handlelogout}>Logout</button> : "" }
                    
                </form>
            </div>
        </nav></div>
    )
}

export default Navbar