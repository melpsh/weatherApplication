import IHourlyDetail from "./type";

const HourlyDetail = ({ time, icon, temp_c, humidity }: IHourlyDetail) => {
  return (
    <div className="text-sm w-1/5 bg-blue-600/70 backdrop-blur-md flex flex-col justify-around items-center h-full p-3 rounded-lg shadow-md text-white">
      <span className="font-semibold">
        {time} {time >= "00" && time < "11" ? "AM" : "PM"}
      </span>
      <img src={icon} alt="icon_condition" className="w-10 h-10 my-2" />
      <span className="font-medium">{temp_c}&#176;</span>
      <span className="font-light">{humidity}%</span>
    </div>
  );
};

export default HourlyDetail;
