import mainStore from "../../stores/homeStore";
import IDailyDetail from "./type";

const DailyDetail = ({ weekDay, icon, temp_l, temp_h }: IDailyDetail) => {
  const store = mainStore();
  const dayOfWeek = store.getWeekday(weekDay);

  return (
    <div className="text-xs md:text-sm lg:text-base w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-blue-00/70 backdrop-blur-md flex flex-col justify-around items-center h-full p-2 md:p-4 lg:p-6 rounded-lg shadow-md text-black">
      <span className="font-semibold">{dayOfWeek}</span>
      <img src={icon} alt="icon_condition" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 my-2" />
      <div className="flex justify-between w-full px-2">
        <span className="font-medium">{temp_h}&#176;</span>
        <span className="font-light">{temp_l}&#176;</span>
      </div>
    </div>
  );
};

export default DailyDetail;
