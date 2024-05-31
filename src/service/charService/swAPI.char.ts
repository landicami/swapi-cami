import axios from "axios";
import { ACharachter, CharactherResponse } from "./swAPI.chartypes";

const BASE_URL = "https://swapi.thehiveresistance.com/api"

/**
 * Get all charachters
 */

export const getAllCharachters = async (page: number) => {
	const res = await axios.get<CharactherResponse>(`${BASE_URL}/people/?page=${page}`);
	return res.data;
}

/**
 * Get ONE Charachter
 */

export const getACharachter = async (charachterId: number) => {
	const res = await axios.get<ACharachter>(`${BASE_URL}/people/${charachterId}`)
	return res.data;
}

/**
 * Search for a charachter
 */

export const searchACharachter = async (galaxySearch: string, page: number) => {
	const res = await axios.get<CharactherResponse>(`${BASE_URL}/people/?search=${galaxySearch}&page=${page}`);
	return res.data;
}
