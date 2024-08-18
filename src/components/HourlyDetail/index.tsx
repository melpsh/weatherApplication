import IHourlyDetail from "./type";

const HourlyDetail = ({ time, icon, temp_c, humidity }: IHourlyDetail) => {
  const formattedTime = `${time} ${
    time >= "00" && time < "12" ? "AM" : "PM"
  }`;

  return (
    <div className="text-sm w-1/5 bg-blue-600 flex flex-col justify-around items-center h-full p-3 rounded-lg shadow-md">
      <span className="font-medium text-white">{formattedTime}</span>
      <img src={icon} alt="Weather Condition Icon" className="w-12 h-12 my-2" />
      <span className="text-lg font-bold text-white">{temp_c}&#176;</span>
      <span className="text-lg text-white">{humidity}%</span>
    </div>
  );
};

export default HourlyDetail;
