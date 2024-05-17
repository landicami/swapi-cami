import axios from "axios";

const BASE_URL = "https://swapi.thehiveresistance.com/api/";

/**
 * Get all films
 */

export const getMovies = async () => {
    const res = await axios.get(BASE_URL + "films");
    return res.data;
}
