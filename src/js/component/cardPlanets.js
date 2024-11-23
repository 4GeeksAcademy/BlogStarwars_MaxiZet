import React, { useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext"


const CardPlanets = (props) => {

    const { store } = useContext(Context)

    return (


        <div className="card mx-1 bg-dark bg-gradient">
            <img src={"https://starwars-visualguide.com/assets/img/planets/" + props.uid + ".jpg"} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title text-center fw-bold text-light">{props.name}</h5>
                <p></p>
                <p></p>
                <p></p>
                <div className="d-flex justify-content-evenly">
                    <button className="btn btn-outline-danger">Learn more!</button>
                    <button className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </div>


    )
};

export default CardPlanets;