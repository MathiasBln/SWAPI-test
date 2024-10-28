const options = [
  {
    label: 'Peoples',
    value: 'people',
  },
  {
    label: 'Planets',
    value: 'planets',
  },
  {
    label: 'Starships',
    value: 'starships',
  },
];

const SearchBar = ({
  optionSelected,
  searchText,
  onOptionChange,
  onSearchChange,
}: {
  optionSelected: string;
  searchText: string;
  onOptionChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}) => {
  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onOptionChange(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="border-2 border-double rounded-br-3xl sticky top-0 left-0 bg-[#1B1D1E]">
      <div className="right-0 m-6 rounded-md shadow-sm border z-10">
        <input
          type="text"
          placeholder="Luke Doe"
          value={searchText}
          onChange={handleSearchChange}
          className="w-full rounded-md py-1.5 pl-3 pr-16"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <select
            id="option"
            name="option"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            value={optionSelected}
            onChange={handleOptionChange}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
