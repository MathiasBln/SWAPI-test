import { useEffect, useState } from 'react';
import Card from './Card';
import SearchBar from './SearchBar';
import { fetchPeoples, fetchPlanets, fetchStarships } from '../api';
import { People, Planet, Starship } from '../types/swapiTypes';
import DetailsSection from './DetailsSection';

const getInitials = (fullName: string): string => {
  if (!fullName) return '';
  const nameParts = fullName
    .trim()
    .split(' ')
    .filter((part) => part.length > 0);
  const initials = nameParts.map((part) => part[0].toUpperCase()).join('');
  return initials;
};

const ResearchAndResults = () => {
  const [peoples, setPeoples] = useState<People[]>([]);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [starships, setStarships] = useState<Starship[]>([]);
  const [optionSelected, setOptionSelected] = useState('people');
  const [searchText, setSearchText] = useState('');
  const [details, setDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (optionSelected === 'people') {
          const data = await fetchPeoples();
          setPeoples(data);
          setPlanets([]);
          setStarships([]);
          setIsLoading(false);
        } else if (optionSelected === 'planets') {
          const data = await fetchPlanets();
          setPlanets(data);
          setPeoples([]);
          setStarships([]);
          setIsLoading(false);
        } else if (optionSelected === 'starships') {
          const data = await fetchStarships();
          setStarships(data);
          setPeoples([]);
          setPlanets([]);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        console.error(
          `Erreur lors de la récupération des ${optionSelected}:`,
          error
        );
      }
    };

    fetchData();
  }, [optionSelected]);

  const handleCardClick = (item: People | Planet | Starship) => {
    setDetails(item);
  };

  const filteredPeoples = peoples.filter((people) =>
    people.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const filteredPlanets = planets.filter((planet) =>
    planet.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const filteredStarships = starships.filter((starship) =>
    starship.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleBack = () => {
    setDetails(null);
  };

  return (
    <section className="flex flex-col w-screen min-h-screen flex-grow lg:overflow-auto">
      {!details ? (
        <>
          <SearchBar
            optionSelected={optionSelected}
            searchText={searchText}
            onOptionChange={setOptionSelected}
            onSearchChange={setSearchText}
          />

          <section className="flex flex-wrap m-4 justify-between relative">
            {isLoading && (
              <h1 className="text-white text-2xl lg:text-4xl">
                Please wait, loading data...
              </h1>
            )}
            {optionSelected === 'people' &&
              filteredPeoples.map((people) => (
                <Card
                  key={people.name}
                  initials={getInitials(people.name)}
                  title={people.name}
                  onClick={() => handleCardClick(people)}
                />
              ))}
            {optionSelected === 'planets' &&
              filteredPlanets.map((planet) => (
                <Card
                  key={planet.name}
                  initials={getInitials(planet.name)}
                  title={planet.name}
                  onClick={() => handleCardClick(planet)}
                />
              ))}
            {optionSelected === 'starships' &&
              filteredStarships.map((starship) => (
                <Card
                  key={starship.name}
                  initials={getInitials(starship.name)}
                  title={starship.name}
                  onClick={() => handleCardClick(starship)}
                />
              ))}
          </section>
        </>
      ) : (
        <DetailsSection details={details} onBack={handleBack} />
      )}
    </section>
  );
};

export default ResearchAndResults;
