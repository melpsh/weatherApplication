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
    <div className="flex flex-col items-center mt-5">
      <div className="relative">
        <SearchCityName />
      </div>
      <motion.ul
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
        className="flex flex-col gap-y-3 w-full"
      >
        <h4 className="font-bold text-xl text-white text-center">Details</h4>
        <div className="flex justify-around text-sm w-full p-4 bg-black bg-opacity-30 backdrop-blur-lg rounded-lg shadow-md">
          <li className="flex flex-col justify-center items-center">
            <span className="font-medium text-gray-300">Feels Like:</span>
            <span className="text-lg text-white">
              {store.weatherInfo?.feelslike}&#176;
            </span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <span className="font-medium text-gray-300">Cloud:</span>
            <span className="text-lg text-white">
              {store.weatherInfo?.cloud}%
            </span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <span className="font-medium text-gray-300">Wind:</span>
            <span className="text-lg text-white">
              {store.weatherInfo?.wind} km/h
            </span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <span className="font-medium text-gray-300">Humidity:</span>
            <span className="text-lg text-white">
              {store.weatherInfo?.humidity}%
            </span>
          </li>
        </div>
      </motion.ul>
      <motion.ul
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
        className="flex flex-col gap-y-4 w-full mt-4"
      >
        <div className="w-full max-w-md mx-auto">
          <ButtonGroup>
            <button
              onClick={(e) => store.getIdElement(e)}
              id="hour"
              className={`text-sm px-3 py-1 rounded-md transition-colors duration-300 ${
                store.currentEleID === "hour"
                  ? "text-white bg-gray-700 bg-opacity-50"
                  : "text-gray-300 bg-black bg-opacity-30"
              }`}
            >
              Hourly
            </button>
            <button
              id="daily"
              onClick={(e) => store.getIdElement(e)}
              className={`text-sm px-3 py-1 rounded-md transition-colors duration-300 ${
                store.currentEleID === "daily"
                  ? "text-white bg-gray-700 bg-opacity-50"
                  : "text-gray-300 bg-black bg-opacity-30"
              }`}
            >
              Daily
            </button>
          </ButtonGroup>
          <div className="info w-full h-[10rem] border border-gray-500 rounded-lg mt-4 p-4 bg-black bg-opacity-30 backdrop-blur-lg">
            {store.currentEleID === "hour" && (
              <div className="w-full flex h-full gap-2 overflow-x-auto">
                {forcastHour.map((item, index) => (
                  <HourlyDetail
                    key={index}
                    time={item.time.slice(11, 13)}
                    icon={item.icon}
                    temp_c={item.temp_c}
                    humidity={item.humidity}
                  />
                ))}
              </div>
            )}
            {store.currentEleID === "daily" && (
              <div className="h-full flex gap-2 overflow-x-auto">
                {store.daysData.map((item, idx) => (
                  <DailyDetail
                    key={idx}
                    weekDay={item.date_epoch}
                    icon={item.icon}
                    temp_h={item.temp_h}
                    temp_l={item.temp_l}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.ul>
    </div>
  );
};

export default Details;
