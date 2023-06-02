import React, { useEffect, useState } from 'react'
import './Bookmovie.css'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import Login from '../Login/Login'

const Bookmovie = () => {
    const [Movie, setMovie] = useState({})
    const params = useParams()
    const index = params.id;
    const navigate = useNavigate()
    const [User, setUser] = useState({})

    

    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then((res) => {
                setMovie(res.data[index].show)

            })
            .catch((err) => {
                console.log(err)
            })
        
        setUser(JSON.parse(localStorage.getItem('userinfo')))
        

        
    }, [])
    console.log(Movie);

    const handlebook = () => {
        const bookobject = {
            name: User.name,
            email: User.email,
            movie: Movie.name,
            seats: document.getElementById('exampleFormControlSelect1').value,
            genre: Movie.genre
        }
        localStorage.setItem('bookedmovietickets', JSON.stringify(bookobject) )
        toast.success("Ticket Has Been Booked")
        navigate('/movies')

    }


    return (
        <>
       {localStorage.getItem('userinfo') ? <div>
            <div style={{ "height": "90px" }}><div className="mh-100 jumbotron jumbotron-fluid">
                <div className="container movcont" >
                    <h2 className="display">Ticket Booking</h2>
                    <p className="lead">Enjoy Your Movie at Respective Seats <br />Cheers</p>
                </div>
            </div>

            </div>
            <div className="bookform">

                <form className='mx-auto my-4 w-50'>
                <img className="my-4" src={Movie.image ? Movie.image.medium : ""} alt="Card image cap" />
                <div className="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" disabled value={User.name} placeholder="name"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" disabled value={User.email} placeholder="name@example.com"/>
                    </div>

                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Number of Seats</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>


                    <div className="form-group">
                        <label for="exampleFormControlInput1">Movie Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" disabled value={Movie.name} placeholder="Movie Name"/>

                    </div>

                    <div className="form-group">
                        <label for="exampleFormControlInput1">Genre</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" disabled value={Movie.genres } placeholder="genre"/>
                    </div>


                    <button type="button " className="btn btn-primary my-1" onClick={handlebook}>Book Tickets</button>


                    
                </form>
            </div>
        </div>: navigate('/')}
        </>
    )
}

export default Bookmovie