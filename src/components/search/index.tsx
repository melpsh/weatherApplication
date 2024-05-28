import { CiSearch } from "react-icons/ci";
import mainStore from "../../stores/homeStore";

const SearchCityName = () => {
  const store=mainStore()
  return (
    <form className="" >
      <input 
      autoFocus
      value={store.inputCityLocation}
      onChange={(e)=>{store.onChange(e)}}
      type="text" 
      className=" bg-blue-500 text-white px-6 py-2 border-none outline-none placeholder-slate-100 rounded" placeholder="City Name"/>
      <button type="submit" className="" onClick={(e)=>{store.onSubmitSearchBtn(e)}}>
        <CiSearch 
        className="absolute top-1 right-1 w-7 text-stone-300  bg-transparent h-8 "/>
      </button>
    </form>
  );
};

export default SearchCityName;
