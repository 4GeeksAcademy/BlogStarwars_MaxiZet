const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
			characters: [],
			planets: [],
			vehicles: [],
			infoCharacters: [],
		},
		actions: {
			getCharacters: async () => {
				fetch(`${getStore().urlBase}/people`)
					.then((resp) => resp.json())
					.then((data) => {
						for (let item of data.results) {
							fetch(item.url)
								.then((resp) => resp.json())
								.then((data) => {
									setStore({
										characters: [...getStore().characters, data.result]
									})
								}).catch((err) => {
									console.log(err)
								})
						}
					}).catch((err) => {
						console.log(err)
					})
				// let response = await fetch(`${getStore().urlBase}/people`)
				// let data = await response.json()
				// for (let item of data.results) {
				// 	let 
				// }

			},
			getPlanets: async () => {
				fetch(`${getStore().urlBase}/planets`)
					.then((resp) => resp.json())
					.then((data) => {
						for (let item of data.results) {
							fetch(item.url)
								.then((resp) => resp.json())
								.then((data) => {
									setStore({
										planets: [...getStore().planets, data.result]
									})
								}).catch((err) => {
									console.log(err)
								})
						}
					}).catch((err) => {
						console.log(err)
					})

			},
			getVehicles: async () => {
				fetch(`${getStore().urlBase}/vehicles`)
					.then((resp) => resp.json())
					.then((data) => {
						for (let item of data.results) {
							fetch(item.url)
								.then((resp) => resp.json())
								.then((data) => {
									setStore({
										vehicles: [...getStore().vehicles, data.result]
									})
								}).catch((err) => {
									console.log(err)
								})
						}
					}).catch((err) => {
						console.log(err)
					})

			},
			getInfoCharacters: async (id) => {
				// console.log(id)
				try {
					const resp = await fetch(`${getStore().urlBase}/people/${id}`, {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					})

					if (resp.status == 200) {
						const data = await resp.json()
						console.log(data.result)
						setStore({ infoCharacters: data.result })
						return true
					}
				} catch (error) {
					console.log(error)
					return false
				}

			},
		}
	};
};

export default getState;
