import axios from "axios";
import { APlanet, PlanetResponse } from "./swAPI.planetTypes";

const BASE_URL = "https://swapi.thehiveresistance.com/api";

/**
 * Get all planets
 */

export const getMovies = async () => {
    const res = await axios.get<PlanetResponse>(BASE_URL + "/planets");
    return res.data;
}

/**
 * Get A Planet
 */

export const getAMovie = async (planetId:  number) => {
	const res = await axios.get<APlanet>(`${BASE_URL}/planets/${planetId}`);
	return res.data;
}


/**
Search for a planet
*/

export const searchAMovie = async (galaxySearch : string) => {
	const res = await axios.get<PlanetResponse>(`${BASE_URL}/planets/?search=${galaxySearch}`);
	return res.data
}
