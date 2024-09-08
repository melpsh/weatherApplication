import { CiSearch } from "react-icons/ci";
import mainStore from "../../stores/homeStore";

const SearchCityName = () => {
  const store = mainStore();

  return (
    <form 
      className="relative flex items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
      onSubmit={(e) => { store.onSubmitSearchBtn(e) }}
    >
      <input
        autoFocus
        value={store.inputCityLocation}
        onChange={(e) => { store.onChange(e) }}
        type="text"
        className="w-full bg-blue-600/10 text-white px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 border-none outline-none placeholder-slate-100 rounded-l-lg backdrop-blur-md text-sm md:text-base"
        placeholder="City Name"
      />
      <button 
        type="submit" 
        className="bg-blue-600/10 p-2 sm:p-2 md:p-3 lg:p-4 rounded-r-lg hover:bg-blue-700 transition-colors duration-300 backdrop-blur-md"
      >
        <CiSearch 
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
        />
      </button>
    </form>
  );
};

export default SearchCityName;
