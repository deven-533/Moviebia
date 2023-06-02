import React from 'react'
import { useNavigate } from 'react-router'

const Card = (props) => {
    const navigate = useNavigate();
    return (
        <div><div className="card mx-4 my-2" style={{"width": "18rem"}}>
            <img className="card-img-top" src={props.imageurl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.quicksum}</p>
                <a href="#" onClick={()=>{
                    navigate("/movies/"+props.id)
                }} className="btn btn-primary">Learn More</a>
            </div>
        </div></div>
    )
}

export default Card