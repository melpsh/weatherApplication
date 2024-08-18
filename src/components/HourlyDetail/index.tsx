import IHourlyDetail from "./type";

const HourlyDetail = ({ time, icon, temp_c, humidity }: IHourlyDetail) => {
  const formattedTime = `${time} ${
    time >= "00" && time < "12" ? "AM" : "PM"
  }`;

  return (
    <div className="text-sm w-1/5 bg-black bg-opacity-30 backdrop-blur-lg flex flex-col justify-around items-center h-full p-3 rounded-lg shadow-md">
      <span className="font-medium text-white">{formattedTime}</span>
      <img src={icon} alt="Weather Condition Icon" className="w-10 h-10 my-2" />
      <span className="text-lg font-bold text-white">{temp_c}&#176;</span>
      <span className="text-lg text-white">{humidity}%</span>
    </div>
  );
};

export default HourlyDetail;
