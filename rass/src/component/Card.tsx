import React from 'react';

interface CardProps {
  initials: string;
  title: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ initials, title, onClick }) => {
  return (
    <div
      className="flex items-stretch bg-white shadow rounded-lg w-[300px] m-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-red-400 text-white p-4 rounded-l-lg flex items-center justify-center w-12">
        <span className="text-xl font-bold">{initials}</span>
      </div>
      <div className="p-4 overflow-hidden">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
