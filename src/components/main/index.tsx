import { motion } from "framer-motion";
import mainStore from "../../stores/homeStore.ts";

const Main = () => {
  const store = mainStore();

  const y = Number(store.weatherInfo?.date.substring(0, 4));
  const m = store.weatherInfo?.date.substring(5, 7);
  const d = store.weatherInfo?.date.substring(8, 11);
  const time = store.weatherInfo?.date.substring(11, 16);

  return (
    <div className="mt-5 px-4">
      <div className="flex flex-col md:flex-row justify-around items-center text-white bg-blue-00/70 backdrop-blur-md p-4 md:p-6 lg:p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="font-bold text-4xl md:text-5xl lg:text-6xl"
        >
          <span className="text-2xl md:text-3xl lg:text-4xl">
            {store.weatherInfo?.temp}&#176;c
          </span>
        </motion.span>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="cityName text-center md:text-left mt-4 md:mt-0"
        >
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            {store.weatherInfo?.cityName} , {store.weatherInfo?.countryName}
          </h1>
          <small className="flex flex-col md:flex-row justify-between text-sm md:text-base lg:text-lg mt-2">
            <span className="time">Local time: {time}</span>
            <span className="date">
              {y}/{m}/{d}
            </span>
          </small>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.7 }}
          className="weather flex flex-col justify-around items-center mt-4 md:mt-0"
        >
          {store.weatherInfo?.icon && (
            <img
              src={store.weatherInfo?.icon}
              alt="weatherImg"
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
            />
          )}
          <span className="condition text-base md:text-lg lg:text-xl">
            {store.weatherInfo?.conditionOutput}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
