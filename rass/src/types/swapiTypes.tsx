export interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  films: string;
}

export interface Planet {
  name: string;
  climate: string;
  terrain: string;
  diameter: string;
  gravity: string;
  surface_water: string;
  population: string;
  rotation_period: string;
  orbital_period: string;
  films: string;
}

export interface Movies {
  title: string;
  episode_id: number;
  url: string;
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  starship_class: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  films: string;
}
