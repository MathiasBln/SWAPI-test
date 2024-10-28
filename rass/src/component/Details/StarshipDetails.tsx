import { useEffect, useState } from 'react';
import { Movies, Starship } from '../../types/swapiTypes';
import { fetchMovies } from '../../api';

interface DetailsProps {
  details: Starship | null;
}

const StarshipSection: React.FC<DetailsProps> = ({ details }) => {
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

  const isChecked = (movieUrl: string) => {
    return details?.films.includes(movieUrl);
  };

  return (
    <section className="flex flex-col h-full justify-between items-end">
      <div className="flex w-full flex-col">
        <div className="flex flex-col md:flex-row justify-around m-6">
          <div className="flex flex-col w-full mb-4 md:mb-0">
            <label className="text-white font-semibold mb-1 capitalize">
              Model
            </label>
            <input
              type="text"
              value={details?.model}
              disabled
              className="bg-gray-200 text-gray-800 rounded px-3 py-2 border border-gray-300 cursor-not-allowed"
            />
          </div>

          <div className="flex flex-col w-full md:ml-3">
            <label className="text-white font-semibold mb-1 capitalize">
              Starship Class
            </label>
            <input
              type="text"
              value={details?.starship_class}
              disabled
              className="bg-gray-200 text-gray-800 rounded px-3 py-2 border border-gray-300 cursor-not-allowed"
            />
          </div>
        </div>

        <div className="flex flex-col m-6">
          <label className="text-white font-semibold mb-1 capitalize">
            Manufactured by
          </label>
          <input
            type="text"
            value={details?.manufacturer}
            disabled
            className="bg-gray-200 text-gray-800 rounded px-3 py-2 border border-gray-300 cursor-not-allowed"
          />
        </div>

        <div className="flex flex-col m-6">
          <label className="text-white font-semibold mb-1 capitalize">
            Highlights
          </label>
          <textarea
            rows={8}
            disabled
            className="bg-gray-200 text-gray-800 rounded border border-gray-300 cursor-not-allowed resize-none"
            defaultValue={`
          This starship is boasting a length of ${details?.length} meters, making it a significant presence in any fleet. It is equipped to carry a dedicated 
          crew of ${details?.crew} members and can accommodate ${details?.passengers} passengers, allowing for both operational versatility and tactical deployment. 
          With a cargo capacity of ${details?.cargo_capacity} metric tons, this vessel is prepared for extended missions and heavy transport requirements. 
          It reaches a top atmospheric speed of ${details?.max_atmosphering_speed}, ensuring swift response times when deployed. 
          For interstellar travel, the shipis fitted with a hyperdrive rated at ${details?.hyperdrive_rating}, enabling faster-than-light speeds and a
          strategic advantage in galactic operations.
          `}
          />
        </div>

        <div className="flex flex-col lg:flex-row m-6 justify-between items-end">
          <div>
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
          <div className="flex flex-row m-6 items-end">
            <img
              src={require('../../svg/credit.svg').default}
              alt="Credit Icon"
              className="h-[70px] w-[30px] md:w-[100px]"
            />
            <h1 className="text-3xl md:text-6xl font-bold text-white">
              {details?.cost_in_credits}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarshipSection;
