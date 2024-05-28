import IHourlyDetail from "./type";

const HourlyDetail = ({ time, icon, temp_c, humidity }: IHourlyDetail) => {
  return (
    <div className="text-sm w-1/5 bg-blue-600 flex flex-col justify-around items-center h-full">
      <span className="">
        {time}{" "}
        {time >= "00" && time < "11" ? "AM" : "PM"}
      </span>
      <img src={icon} alt="icon_condition" />
      <span>{temp_c}&#176;</span>
      <span>{humidity}%</span>
    </div>
  );
};

export default HourlyDetail;
