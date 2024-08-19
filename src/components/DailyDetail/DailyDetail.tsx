import mainStore from "../../stores/homeStore";
import IDailyDetail from "./type";

const DailyDetail = ({ weekDay, icon, temp_l, temp_h }: IDailyDetail) => {
  const store = mainStore();
  const dayOfWeek = store.getWeekday(weekDay);
  return (
    <div className="text-sm w-1/3 bg-blue-00/70 backdrop-blur-md flex flex-col justify-around items-center h-full p-4 rounded-lg shadow-md text-black">
      <span className="font-semibold">{dayOfWeek}</span>
      <img src={icon} alt="icon_condition" className="w-12 h-12 my-2" />
      <div className="flex justify-between w-full px-2">
        <span className="font-medium">{temp_h}&#176;</span>
        <span className="font-light">{temp_l}&#176;</span>
      </div>
    </div>
  );
};

export default DailyDetail;
