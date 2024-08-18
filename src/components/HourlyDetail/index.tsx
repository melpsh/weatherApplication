import IHourlyDetail from "./type";

const HourlyDetail = ({ time, icon, temp_c, humidity }: IHourlyDetail) => {
  const formattedTime = `${time} ${
    time >= "00" && time < "12" ? "AM" : "PM"
  }`;

  return (
    <div className="text-sm w-1/5 bg-white bg-opacity-60 flex flex-col justify-around items-center h-full p-3 rounded-lg shadow-md backdrop-blur-sm">
      <span className="font-medium text-gray-800">{formattedTime}</span>
      <img src={icon} alt="Weather Condition Icon" className="w-12 h-12 my-2" />
      <span className="text-lg font-bold text-gray-900">{temp_c}&#176;</span>
      <span className="text-lg text-gray-700">{humidity}%</span>
    </div>
  );
};

export default HourlyDetail;
