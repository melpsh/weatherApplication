import mainStore from "../../stores/homeStore";
import IDailyDetail from "./type";

const DailyDetail = ({ weekDay, icon, temp_l, temp_h }: IDailyDetail) => {
  const store = mainStore();
  const dayOfWeek = store.getWeekday(weekDay);
  return (
    <div className="text-sm w-1/3 bg-blue-600 flex flex-col justify-around items-center h-full">
      <span className="">{dayOfWeek}</span>
      <img src={icon} alt="icon_condition" />
      <span>{temp_h}&#176;</span>
      <span>{temp_l}&#176;</span>
    </div>
  );
};

export default DailyDetail;
