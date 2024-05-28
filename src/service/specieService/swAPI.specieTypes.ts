export interface SpecieResponse {
    current_page: number;
    data: Specie[];
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

export interface Specie {
    id: number;
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_colors: string;
    skin_colors: string;
    language: string;
    created: string;
    edited: string;
    people_count: number;
    films_count: number;
    homeworld: Homeworld | null;
}

export interface Homeworld {
    id: number;
    name: string;
}

export interface Link {
    url: string | null;
    label: string;
    active: boolean;
}

export interface Person {
    id: number;
    name: string;
}

export interface Film {
    id: number;
    title: string;
}

export interface ASpecie {
    id: number;
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_colors: string;
    skin_colors: string;
    language: string;
    created: string;
    edited: string;
    homeworld: {
        id: number;
        name: string;
    };
    people: Person[];
    films: Film[];
}
