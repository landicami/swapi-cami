import axios from "axios";
import { CharactherResponse } from "./swAPI.chartypes";

const BASE_URL = "https://swapi.thehiveresistance.com/api"

/**
 * Get all charachters
 */

export const getPeople = async () => {
	const res = await axios.get<CharactherResponse>(BASE_URL + "/people");
	return res.data;
}
