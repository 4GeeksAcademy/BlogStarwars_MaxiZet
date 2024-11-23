import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Card = (props) => {

    // const { store } = useContext(Context)

    return (


        <div className="card mx-1 bg-dark bg-gradient">
            <img src={"https://starwars-visualguide.com/assets/img/characters/" + props.uid + ".jpg"} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title text-center fw-bold text-light">{props.name}</h5>
                <p></p>
                <p></p>
                <p></p>
                <div className="d-flex justify-content-evenly">
                    <Link to={"/single/" + props.uid} className="btn btn-outline-danger">Learn more!</Link>
                    <button className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </div>


    )
};

export default Card;