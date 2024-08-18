import mainStore from "../../stores/homeStore";
import IDailyDetail from "./type";

const DailyDetail = ({ weekDay, icon, temp_l, temp_h }: IDailyDetail) => {
  const store = mainStore();
  const dayOfWeek = store.getWeekday(weekDay);

  return (
    <div className="text-sm w-1/3 bg-blue-600 flex flex-col justify-around items-center h-full p-4 rounded-lg shadow-md">
      <span className="font-semibold text-white">{dayOfWeek}</span>
      <img src={icon} alt="Weather Icon" className="w-12 h-12 my-2" />
      <span className="text-lg font-bold text-white">{temp_h}&#176;</span>
      <span className="text-lg text-white">{temp_l}&#176;</span>
    </div>
  );
};

export default DailyDetail;
