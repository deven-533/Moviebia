import React, { useEffect, useState } from 'react'
import './MovieDetails.css'

import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import Login from '../Login/Login'

const MovieDetails = () => {


    const [Movie, setMovie] = useState({})
    const params = useParams()
    const index = params.id;
    const navigate = useNavigate()



    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then((res) => {
                setMovie(res.data[index].show)

            })
            .catch((err) => {
                console.log(err)
            })




    }, [])
    console.log(Movie);

    return (
        <div>
            {localStorage.getItem('userinfo') ? <div className="jumbotron movdetails">
                <h1 className="display my-4 ">Movie Details</h1>

                <img className="my-4" src={Movie.image ? Movie.image.medium : ""} alt="Card image cap" />
                <h1 className="display-4">{Movie.name}</h1>
                <p className="lead">{Movie.genres ? Movie.genres.map((genre) => {
                    return (
                        <>
                            {genre + ". "}
                        </>
                    )
                })
                    : ""}</p>

                <hr className="my-4" />
                <h4>Summary</h4>
                <p>{Movie.summary}</p>
                <p className="lead" >
                    <a className="btn btn-primary btn-lg my-4" href="#" onClick={() => { navigate('/book/' + index) }} role="button">Book Tickets</a>
                </p>
            </div> : navigate('/')}</div>
    )
}

export default MovieDetails