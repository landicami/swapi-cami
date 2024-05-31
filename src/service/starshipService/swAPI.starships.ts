import axios from "axios";
import { AStarship, StarshipResponse } from "./swAPI.starshipsTypes";

const BASE_URL = "https://swapi.thehiveresistance.com/api";

/**
 * Get all starships
 */

export const getStarships = async (page: number) => {
    const res = await axios.get<StarshipResponse>(`${BASE_URL}/starships/?page=${page}`);
    return res.data;
}

/**
 * Get A Starhip
 */

export const getAStarship = async (specieId:  number) => {
	const res = await axios.get<AStarship>(`${BASE_URL}/starships/${specieId}`);
	return res.data;
}


/**
Search for a starship
*/

export const searchAStarship = async (galaxySearch : string, page: number) => {
	const res = await axios.get<StarshipResponse>(`${BASE_URL}/starships/?search=${galaxySearch}&page=${page}`);
	return res.data
}
