import axios from "axios";
import { FilmResponse, SingleFilm } from "./swAPI.filmTypes";

const BASE_URL = "https://swapi.thehiveresistance.com/api";

/**
 * Get all films
 */

export const getMovies = async () => {
    const res = await axios.get<FilmResponse>(BASE_URL + "/films");
    return res.data;
}

/**
 * Get A Film
 */

export const getAMovie = async (filmId:  number) => {
	const res = await axios.get<SingleFilm>(`${BASE_URL}/films/${filmId}`);
	return res.data;
}


/**
Search for a film
*/

export const searchAMovie = async (galaxySearch : string) => {
	const res = await axios.get<FilmResponse>(`${BASE_URL}/films/?search=${galaxySearch}`);
	return res.data
}
