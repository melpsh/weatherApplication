import { motion } from "framer-motion";
import mainStore from "../../stores/homeStore.ts";

const Main = () => {
  const store = mainStore();

  const y = Number(store.weatherInfo?.date.substring(0, 4));
  const m = store.weatherInfo?.date.substring(5, 7);
  const d = store.weatherInfo?.date.substring(8, 11);
  const time = store.weatherInfo?.date.substring(11, 16);

  return (
    <div className="mt-5 p-4 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg shadow-md">
      <div className="flex justify-around items-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="font-bold text-4xl text-white"
        >
          <span className="text-xl">{store.weatherInfo?.temp}&#176;C</span>
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="cityName text-center"
        >
          <h1 className="font-bold text-4xl text-white">
            {store.weatherInfo?.cityName}
          </h1>
          <small className="flex justify-between text-sm text-gray-300 mt-2">
            <span className="time">{time}</span>
            <span className="date">
              {y}/{m}/{d}
            </span>
          </small>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.7 }}
          className="weather flex flex-col justify-around items-center"
        >
          {store.weatherInfo?.icon ? (
            <img
              src={store.weatherInfo?.icon}
              alt="Weather Icon"
              className="w-10 h-10"
            />
          ) : (
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          )}
          <span className="condition text-xs text-gray-300 mt-2">
            {store.weatherInfo?.conditionOutput}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
