import SearchCityName from "../search";
import mainStore from "../../stores/homeStore.ts";
import { motion } from "framer-motion";
import ButtonGroup from "../ButtonGroup/ButtonGroup.tsx";
import HourlyDetail from "../HourlyDetail/index.tsx";
import DailyDetail from "../DailyDetail/DailyDetail.tsx";

const Details = () => {
  const store = mainStore();
  const forcastHour = store.hoursForecast.slice(
    parseInt(store.currentHour) + 1,
    parseInt(store.currentHour) + 6
  );

  return (
    <div className="flex flex-col items-center mt-5 w-full max-w-4xl mx-auto">
      <div className="relative w-full">
        <SearchCityName />
      </div>
      <motion.ul
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
        className="flex flex-col gap-y-2 mt-4 w-full"
      >
        <h4 className="font-bold text-xl text-blue-400 text-center">Details</h4>
        <div className="flex justify-around text-sm text-white bg-blue-600/70 backdrop-blur-md p-4 rounded-lg shadow-md">
          <li className="flex flex-col justify-center items-center">
            <span className="font-medium">Feels Like:</span>
            <span>{store.weatherInfo?.feelslike}&#176;</span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <span className="font-medium">Cloud:</span>
            <span>{store.weatherInfo?.cloud}%</span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <span className="font-medium">Wind:</span>
            <span>{store.weatherInfo?.wind} km/h</span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <span className="font-medium">Humidity:</span>
            <span>{store.weatherInfo?.humidity}%</span>
          </li>
        </div>
      </motion.ul>
      <motion.ul
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
        className="flex flex-col gap-y-4 w-full mt-4"
      >
        <div className="w-full m-auto tablet:max-w-[22rem]">
          <ButtonGroup>
            <button
              onClick={(e) => store.getIdElement(e)}
              id="hour"
              className={`text-sm px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 ${
                store.currentEleID === "hour"
                  ? "text-white bg-blue-600"
                  : "text-blue-600 bg-white"
              }`}
            >
              Hourly
            </button>
            <button
              id="daily"
              onClick={(e) => store.getIdElement(e)}
              className={`text-sm px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 ${
                store.currentEleID === "daily"
                  ? "text-white bg-blue-600"
                  : "text-blue-600 bg-white"
              }`}
            >
              Daily
            </button>
          </ButtonGroup>
          <div className="info w-full h-[10rem] border border-blue-200 bg-white/80 backdrop-blur-md rounded-lg shadow-md overflow-hidden mt-4">
            {store.currentEleID === "hour" && (
              <div className="w-full flex h-full gap-2 p-2">
                {forcastHour.map((item, index) => {
                  return (
                    <HourlyDetail
                      key={index}
                      time={item.time.slice(11, 13)}
                      icon={item.icon}
                      temp_c={item.temp_c}
                      humidity={item.humidity}
                    />
                  );
                })}
              </div>
            )}
            {store.currentEleID === "daily" && (
              <div className="h-full flex gap-2 p-2">
                {store.daysData.map((item, idx) => {
                  return (
                    <DailyDetail
                      key={idx}
                      weekDay={item.date_epoch}
                      icon={item.icon}
                      temp_h={item.temp_h}
                      temp_l={item.temp_l}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </motion.ul>
    </div>
  );
};

export default Details;
