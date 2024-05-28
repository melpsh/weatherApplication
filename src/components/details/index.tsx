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
      <div className=" mt-4 ">
        {/* <ul className=" flex flex-col font-light gap-y-1">
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-400  transition duration-300"
            onClick={(e) => {
              store.onClick(e);
            }}
          >
            <li className="cursor-pointer">London</li>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-400  transition duration-300"
            value={`Zahedan`}
            onClick={(e) => {
              store.onClick(e);
            }}
          >
            <li className="cursor-pointer">Mashhad</li>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-400  transition duration-300"
            value={`Esfahan`}
            onClick={(e) => {
              store.onClick(e);
            }}
          >
            <li className="cursor-pointer">Esfahan</li>
          </motion.button>
          <button
            value={`Tabriz`}
            onClick={(e) => {
              store.onClick(e);
            }}
          >
            <motion.li
              whileHover={{ scale: 1.2 }}
              className="hover:text-blue-400  transition duration-200 cursor-pointer"
            >
              Ahvaz
            </motion.li>
          </button>
        </ul> */}
      </div>
      <motion.ul
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
        className="flex flex-col gap-y-1 "
      >
        <h4 className="font-bold text-xl text-blue-400 text-center">Details</h4>
        <div className="flex gap-4 text-sm">
          <li className="flex flex-col justify-center items-center">
            <span>FeelsLike: </span>
            <span>{store.weatherInfo?.feelslike}&#176;</span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <span>Cloud: </span>
            <span>{store.weatherInfo?.cloud}%</span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <span>Wind: </span>
            <span>{store.weatherInfo?.wind} km/h</span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <span>Humidity: </span>
            <span>{store.weatherInfo?.humidity}%</span>
          </li>
        </div>
      </motion.ul>
      <motion.ul
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
        className="flex flex-col gap-y-1 w-11/12 mt-4"
      >
        <div className="w-full m-auto tablet:max-w-[22rem]">
          <div className="">
            <ButtonGroup>
              <button
                onClick={(e) => store.getIdElement(e)}
                id="hour"
                className={`text-sm px-2  hover:text-stone-100 transition-colors duration-300 ${
                  store.currentEleID === "hour"
                    ? "text-stone-100 bg-blue-600"
                    : "text-stone-300"
                }`}
              >
                Hourly
              </button>
              <button
                id="daily"
                onClick={(e) => store.getIdElement(e)}
                className={` text-sm px-2 hover:text-stone-100 transition-colors duration-300 ${
                  store.currentEleID === "daily"
                    ? "text-stone-100 bg-blue-600"
                    : "text-stone-300"
                }`}
              >
                Daily
              </button>
            </ButtonGroup>
          </div>
          <div className="info w-full h-[10rem] border border-blue-200 ">
            {store.currentEleID === "hour" && (
              <div className="w-full flex h-full gap-1 ">
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
              <div className=" h-full flex gap-1">
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
