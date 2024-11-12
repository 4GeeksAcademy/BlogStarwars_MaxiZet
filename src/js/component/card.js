import React from "react";

const Card = (props) => {
    return (
        <div>

            <div className="card" style={{ width: "18rem" }}>
                <img src={"https://starwars-visualguide.com/assets/img/characters/" + props.uid + ".jpg"} className="card-img-top" alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p></p>
                    <p></p>
                    <p></p>
                    <div className="d-flex justify-content-evenly">
                        <button className="btn btn-outline-primary">Learn more!</button>
                        <button className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Card;