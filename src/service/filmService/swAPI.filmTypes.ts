export interface FilmResponse {
	current_page: number;
	data: Film[];
	next_page_url: number;
	path: string;
	per_page: number;
	prev_page_url: number;
	to: number;
	total: number;
}

export interface Film {
	id: number;
	title: string;
	episode_id: string;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	created: string;
	edited: string;
	characters_count: number;
	planets_count: number;
	starships_count: number;
	vehicles_count: number;
	species_count: number;
}

