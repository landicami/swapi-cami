interface Vehicle {
    id: number;
    name: string;
    model: string;
    vehicle_class: string;
    manufacturer: string;
    length: string;
    cost_in_credits: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    cargo_capacity: string;
    consumables: string;
    created: string;
    edited: string;
    pilots_count: number;
    films_count: number;
}

interface Link {
    url: string | null;
    label: string;
    active: boolean;
}

export interface VehicleResponse {
    current_page: number;
    data: Vehicle[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

/**
 * A Vehicle
 */

interface Pilot {
    id: number;
    name: string;
}

interface Film {
    id: number;
    title: string;
}

export interface AVehicle {
    id: number;
    name: string;
    model: string;
    vehicle_class: string;
    manufacturer: string;
    length: string;
    cost_in_credits: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    cargo_capacity: string;
    consumables: string;
    created: string;
    edited: string;
    pilots: Pilot[];
    films: Film[];
}
