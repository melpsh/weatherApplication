import { CiSearch } from "react-icons/ci";
import mainStore from "../../stores/homeStore";

const SearchCityName = () => {
  const store=mainStore()
  return (
    <form
      className="relative flex items-center bg-blue-500 rounded overflow-hidden"
      // onSubmit={handleSubmit}
    >
      <input
        autoFocus
        value={store.inputCityLocation}
        onChange={(e) => store.onChange(e)}
        type="text"
        className="w-full px-6 py-2 text-white bg-blue-500 border-none outline-none placeholder-slate-100 rounded-l"
        placeholder="City Name"
        aria-label="City Name"
      />
      <button
        type="submit"
        className="absolute top-0 right-0 px-3 py-2 bg-transparent"
        aria-label="Search"
      >
        <CiSearch className="w-7 h-7 text-stone-300" />
      </button>
    </form>
  );
};

export default SearchCityName;
