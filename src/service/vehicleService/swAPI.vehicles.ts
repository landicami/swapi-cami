import axios from "axios";
import {AVehicle, VehicleResponse } from "./swAPI.vehiclesTypes";

const BASE_URL = "https://swapi.thehiveresistance.com/api";

/**
 * Get all vehicles
 */

export const getVehicles = async (page: number) => {
    const res = await axios.get<VehicleResponse>(`${BASE_URL}/vehicles/?page=${page}`);
    return res.data;
}

/**
 * Get A vehicle
 */

export const getAVehicle = async (vehicleId:  number) => {
	const res = await axios.get<AVehicle>(`${BASE_URL}/vehicles/${vehicleId}`);
	return res.data;
}


/**
Search for a vehicle
*/

export const searchAVehcile = async (galaxySearch : string, page: number) => {
	const res = await axios.get<VehicleResponse>(`${BASE_URL}/vehicles/?search=${galaxySearch}&page=${page}`);
	return res.data
}
