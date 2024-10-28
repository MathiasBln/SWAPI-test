import React from 'react';
import SideBar from './component/SideBar';
import ResearchAndResults from './component/ResearchAndResuls';

const App: React.FC = () => {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen bg-[#1B1D1E]">
      <SideBar />
      <ResearchAndResults />
    </main>
  );
};

export default App;
