import axios from "axios";
import { APlanet, PlanetResponse } from "./swAPI.planetTypes";

const BASE_URL = "https://swapi.thehiveresistance.com/api";

/**
 * Get all planets
 */

export const getPlanets = async (page: number) => {
    const res = await axios.get<PlanetResponse>(`${BASE_URL}/planets/?page=${page}`);
    return res.data;
}

/**
 * Get A Planet
 */

export const getAPlanet = async (planetId:  number) => {
	const res = await axios.get<APlanet>(`${BASE_URL}/planets/${planetId}`);
	return res.data;
}


/**
Search for a planet
*/

export const searchAPlanet = async (galaxySearch : string, page: number) => {
	const res = await axios.get<PlanetResponse>(`${BASE_URL}/planets/?search=${galaxySearch}&page=${page}`);
	return res.data
}
