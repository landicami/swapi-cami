export interface CharactherResponse {
		current_page: number;
		data: Charachter[];
		first_page_url: string | null;
		from: number;
		last_page: number;
		last_page_url: string | null;
		links: Links[];
		next_page_url: string | null;
		per_page: number;
		prev_page_url: string | null;
		to: number;
		total: number;
	}


	interface Links {
		url: string | null;
		label: string;
		active: boolean;

	}

	interface Charachter {
		id: number;
		name: string,
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
		films_count: number;
		species_count: number;
		starships_count: number;
		vehicles_count: number;
		homeworld: {
			id: number;
			name: string;
		},
	}

	interface Films {
		id: number;
		title: string
	}

	interface Species {
		id: number;
		name: string;
	}

	interface Starships {
		id: number;
		name: string;
	}

	interface Vehicles {
		id: number;
		name: string;
	}

	export interface ACharachterResponse extends Charachter {
		films: Films[];
		species: Species[];
		starships: Starships[];
		vehicles: Vehicles[];
	}
