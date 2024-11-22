import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.getInfoCharacters(theid)
	}, [])

	return (

		<div className="card mx-1">
			<img src={`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`} className="card-img-top" alt={store?.characters?.properties?.name} />
			<div className="card-body">
				<h5 className="card-title">{store.characters?.properties?.name}</h5>
				<p>Gender: {store.characters?.properties?.gender}</p>
				<p>Eyes Colors: {store.characters?.properties?.eye_color}</p>
				<div className="d-flex justify-content-evenly">
					<Link to="/">
						<span className="btn btn-primary btn-lg" href="#" role="button">
							Back home
						</span>
					</Link>
					<button className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
				</div>
			</div>
		</div>

	);
};

Single.propTypes = {
	match: PropTypes.object
};

export default Single