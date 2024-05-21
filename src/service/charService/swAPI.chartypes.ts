export interface CharactherResponse {
		current_page: number;
		data: Charachter[];
		first_page_url: string;
		from: number;
		last_page: number;
		last_page_url: string;
		links: Links[];
		next_page_url: string;
		per_page: number;
		prev_page_ur: null | string;
		to: number;
		total: number;
	}


	interface Links {
		url: null | string;
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
