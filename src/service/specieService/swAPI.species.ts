import axios from "axios";
import { ASpecie, SpecieResponse } from "./swAPI.specieTypes";

const BASE_URL = "https://swapi.thehiveresistance.com/api";

/**
 * Get all planets
 */

export const getSpecies = async (page: number) => {
    const res = await axios.get<SpecieResponse>(`${BASE_URL}/species/?page=${page}`);
    return res.data;
}

/**
 * Get A Planet
 */

export const getASpecie = async (specieId:  number) => {
	const res = await axios.get<ASpecie>(`${BASE_URL}/species/${specieId}`);
	return res.data;
}


/**
Search for a planet
*/

export const searchASpecie = async (galaxySearch : string, page: number) => {
	const res = await axios.get<SpecieResponse>(`${BASE_URL}/species/?search=${galaxySearch}&page=${page}`);
	return res.data
}
