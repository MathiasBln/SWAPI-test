import { useEffect, useState } from 'react';
import { Movies, People } from '../../types/swapiTypes';
import { fetchMovies } from '../../api';

interface DetailsProps {
  details: People | null;
}

const PeopleSection: React.FC<DetailsProps> = ({ details }) => {
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
              Gender
            </label>
            <input
              type="text"
              value={details?.gender}
              disabled
              className="bg-gray-200 text-gray-800 rounded px-3 py-2 border border-gray-300 cursor-not-allowed"
            />
          </div>

          <div className="flex flex-col w-full md:ml-3">
            <label className="text-white font-semibold mb-1 capitalize">
              Birth year
            </label>
            <input
              type="text"
              value={details?.birth_year}
              disabled
              className="bg-gray-200 text-gray-800 rounded px-3 py-2 border border-gray-300 cursor-not-allowed"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around m-6">
          <div className="flex flex-col w-full mb-4 md:mb-0">
            <label className="text-white font-semibold mb-1 capitalize">
              Skin color
            </label>
            <input
              type="text"
              value={details?.skin_color}
              disabled
              className="bg-gray-200 text-gray-800 rounded px-3 py-2 border border-gray-300 cursor-not-allowed"
            />
          </div>

          <div className="flex flex-col w-full md:ml-3">
            <label className="text-white font-semibold mb-1 capitalize">
              Hair color
            </label>
            <input
              type="text"
              value={details?.hair_color}
              disabled
              className="bg-gray-200 text-gray-800 rounded px-3 py-2 border border-gray-300 cursor-not-allowed"
            />
          </div>

          <div className="flex flex-col w-full md:ml-3">
            <label className="text-white font-semibold mb-1 capitalize">
              Eye color
            </label>
            <input
              type="text"
              value={details?.eye_color}
              disabled
              className="bg-gray-200 text-gray-800 rounded px-3 py-2 border border-gray-300 cursor-not-allowed"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around m-6">
          <div className="flex flex-col w-full mb-4 md:mb-0">
            <label className="text-white font-semibold mb-1 capitalize">
              Height
            </label>
            <input
              type="text"
              value={details?.height}
              disabled
              className="bg-gray-200 text-gray-800 rounded px-3 py-2 border border-gray-300 cursor-not-allowed"
            />
          </div>

          <div className="flex flex-col w-full md:ml-3">
            <label className="text-white font-semibold mb-1 capitalize">
              Mass
            </label>
            <input
              type="text"
              value={details?.mass}
              disabled
              className="bg-gray-200 text-gray-800 rounded px-3 py-2 border border-gray-300 cursor-not-allowed"
            />
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
