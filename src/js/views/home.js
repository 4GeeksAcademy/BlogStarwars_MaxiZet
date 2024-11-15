import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import Card from "../component/card";


export const Home = () => {
	const [people, setPeople] = useState([])
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => setPeople(data.results))
			.catch(err => console.error(err))
	}, [])

	return <div className="text-center mt-5">
		<h1>Character</h1>

		{people.map((item, index) => {
			return (
				<Card key={index} name={item.name} uid={item.uid} />
			)
		})
		}

	</div>
};
