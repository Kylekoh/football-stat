import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api-football-v1.p.rapidapi.com/v2/',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
	}
});

const getData = async () => {
	const data = await api.get(`players/player/302/2019-2020`);
	console.log(data);
};

getData();
