import React, { useEffect, useState } from 'react'
import './MoviePage.css'
import axios from 'axios'
import Card from '../Card/Card'
import Login from '../Login/Login'
import { useNavigate } from 'react-router'



const MoviePage = () => {
    const [movies, setMovies] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then((res) => {
                setMovies(res.data)

            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    console.log(movies)
    
    return (
        <div>

            {localStorage.getItem('userinfo') ? <div style={{ "height": "100px" }}><div className="mh-100 jumbotron jumbotron-fluid">
                <div className="container movcont" >
                    <h1 className="display">Movies</h1>
                    <p className="lead">Your Favourite spot for Leisure, Grab Your Popcorn and Chillax</p>
                </div>
            </div>
                <div className='allmoviecards h-100 w-100 d-flex justify-content-center align-items-center flex-wrap'>
                    {movies.map((movie, index) => {
                        return (
                            <>
                            <Card
                                imageurl={movie.show.image ? movie.show.image.medium : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'}
                                title={movie.show.name}
                                id={index}
                                quicksum={movie.show.genres.map((genre)=>{
                                    return(
                                        <>
                                        {genre+". "}  
                                        </>
                                    )
                                })}
                            />
                            </>
                        )
                    })}

                
                </div>
            </div>: navigate('/')}
        </div>
    )
}

export default MoviePage