import { ChevronDownIcon, Search } from 'lucide-react';

export const SearchBar = () => {
  return (
    <div className="flex w-full">
      <div className="flex items-center bg-zinc-900 rounded-md w-full">
        <div className="filterButton flex px-3 py-2 border-r border-zinc-700 text-sm items-center space-x-1">
          <span>All</span>
          <ChevronDownIcon />
        </div>
        {/*<input type="text" placeholder="Search IMDb" className="bg-transparent w-full px-3 py-2 text-sm focus:outline-none placeholder-zinc-400" />*/}
        <div className="px-3">
          <Search size={18} className="text-zinc-400" />
        </div>
      </div>
    </div>
  );
};
