import axios from "axios";
import { ASingleFilm, FilmResponse } from "./swAPI.filmTypes";

const BASE_URL = "https://swapi.thehiveresistance.com/api";

/**
 * Get all films
 */

export const getMovies = async (page: number) => {
    const res = await axios.get<FilmResponse>(`${BASE_URL}/films/?page=${page}`);
    return res.data;
}

/**
 * Get A Film
 */

export const getAMovie = async (filmId:  number) => {
	const res = await axios.get<ASingleFilm>(`${BASE_URL}/films/${filmId}`);
	return res.data;
}


/**
Search for a film
*/

export const searchAMovie = async (galaxySearch : string, page: number) => {
	const res = await axios.get<FilmResponse>(`${BASE_URL}/films/?search=${galaxySearch}&page=${page}`);
	return res.data
}
