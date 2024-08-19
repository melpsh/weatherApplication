import { CiSearch } from "react-icons/ci";
import mainStore from "../../stores/homeStore";

const SearchCityName = () => {
  const store = mainStore();

  return (
    <form 
      className="relative flex items-center w-full max-w-md mx-auto"
      onSubmit={(e) => { store.onSubmitSearchBtn(e) }}
    >
      <input
        autoFocus
        value={store.inputCityLocation}
        onChange={(e) => { store.onChange(e) }}
        type="text"
        className="w-full bg-blue-600/10 text-white px-6 py-2 border-none outline-none placeholder-slate-100 rounded-l-lg backdrop-blur-md"
        placeholder="City Name"
      />
      <button 
        type="submit" 
        className="bg-blue-600/10 p-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-300 backdrop-blur-md"
      >
        <CiSearch 
          className="w-6 h-6 text-white"
        />
      </button>
    </form>
  );
};

export default SearchCityName;
