import { useEffect, useState } from 'react';
import { Movies, Planet } from '../../types/swapiTypes';
import { fetchMovies } from '../../api';

interface DetailsProps {
  details: Planet | null;
}

const PlanetSection: React.FC<DetailsProps> = ({ details }) => {
  const [allMovies, setAllMovies] = useState<Movies[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovies();
        setAllMovies(data);
      } catch (error) {
        console.error(`Erreur lors de la récupération des films:`, error);
      }
    };

    fetchData();
  }, []);

  const hasWaterData = details?.surface_water !== 'unknown';

  const isChecked = (movieUrl: string) => {
    return details?.films.includes(movieUrl);
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-white">Populations</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {details?.population}
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-white">
              Diameter of the planet
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {details?.diameter} km
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-white">
              Percentage of water
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {hasWaterData ? details?.surface_water : 'NW'}%
            </dd>
          </div>
        </dl>
      </div>
      <div className="flex flex-col m-6">
        <label className="text-white font-semibold mb-1 capitalize">
          Highlights
        </label>
        <textarea
          rows={6}
          disabled
          className="bg-gray-200 text-gray-800 rounded border border-gray-300 cursor-not-allowed resize-none"
          defaultValue={`
          This planet experiences a rotation period of ${details?.rotation_period} hours, providing a familiar day-night cycle for its inhabitants. 
          Orbiting its star over ${details?.orbital_period} days, this world undergoes extensive seasonal shifts, creating dynamic climates across its terrain. 
          With a gravitational pull of ${details?.gravity}, movement and daily activities align comfortably with standard conditions. 
          The climate ranges from ${details?.climate}, enriching the landscape with diverse ecosystems, particularly across ${details?.terrain}. 
          `}
        />
      </div>

      <div className="m-6 mt-12">
        {allMovies.map((movie) => (
          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                type="checkbox"
                checked={isChecked(movie.url)}
                className="h-4 w-4 rounded border-gray-300 accent-red-400 cursor-not-allowed"
              />
            </div>
            <div className="text-sm leading-6">
              <label className="text-white font-semibold">
                {`Episode ${movie.episode_id} ${movie.title}`}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetSection;
