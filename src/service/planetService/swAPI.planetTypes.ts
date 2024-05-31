export interface Planet {
	id: number;
	name: string;
	rotation_period: string;
	orbital_period: string;
	diameter: string;
	climate: string;
	gravity: string;
	terrain: string;
	surface_water: string;
	population: string;
	created: string;
	edited: string;
	residents_count: number;
	films_count: number;
  }

  export interface Link {
	url: string | null;
	label: string;
	active: boolean;
  }

  export  interface PlanetResponse {
	current_page: number;
	data: Planet[];
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
 * A Planet
 */
  export interface Resident {
	id: number;
	name: string;
	birth_year: string;
	eye_color: string;
	hair_color: string;
	height: string;
	mass: string;
	skin_color: string;
	wiki_link: string;
	image_url: string;
	affiliations: string[];
	created: string;
	edited: string;
  }

  export interface Film {
	id: number;
	title: string;
  }

  export interface APlanet {
	id: number;
	name: string;
	rotation_period: string;
	orbital_period: string;
	diameter: string;
	climate: string;
	gravity: string;
	terrain: string;
	surface_water: string;
	population: string;
	created: string;
	edited: string;
	residents: Resident[];
	films: Film[];
  }
