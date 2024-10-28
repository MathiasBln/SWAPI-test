import { Undo2 } from 'lucide-react';
import { People, Planet, Starship } from '../types/swapiTypes';
import PeopleSection from './Details/PeopleDetails';
import PlanetSection from './Details/PlanetDetails';
import StarshipSection from './Details/StarshipDetails';

interface DetailsProps {
  details: People | Planet | Starship | null;
  onBack: () => void;
}

const isPeople = (details: any): details is People => {
  return 'height' in details && 'mass' in details;
};

const isPlanet = (details: any): details is Planet => {
  return 'climate' in details && 'population' in details;
};

const isStarship = (details: any): details is Starship => {
  return 'starship_class' in details && 'manufacturer' in details;
};

const DetailsSection: React.FC<DetailsProps> = ({ details, onBack }) => {
  if (!details) {
    return (
      <div className="p-4">Sélectionnez un élément pour voir les détails.</div>
    );
  }

  return (
    <section>
      <div className="border-2 border-double rounded-br-3xl sticky top-0 left-0 bg-[#1B1D1E] flex flex-row justify-between">
        <h2 className="text-3xl md:text-5xl font-bold m-6 h-fit text-white">
          {details.name}
        </h2>
        <div className=" flex justify-center items-center m-6 cursor-pointer">
          <Undo2 onClick={onBack} color="white" />
        </div>
      </div>
      {isPeople(details) && <PeopleSection details={details} />}
      {isPlanet(details) && <PlanetSection details={details} />}
      {isStarship(details) && <StarshipSection details={details} />}
    </section>
  );
};

export default DetailsSection;
