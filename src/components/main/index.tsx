import { motion } from "framer-motion";

import mainStore from "../../stores/homeStore.ts";

const Main = () => {
  const store = mainStore();

  const y = Number(store.weatherInfo?.date.substring(0, 4));
  const m = store.weatherInfo?.date.substring(5, 7);
  const d = store.weatherInfo?.date.substring(8, 11);
  const time = store.weatherInfo?.date.substring(11, 16);

  return (
    <div className="mt-5">
      <div className="flex justify-around items-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="font-bold text-4xl"
        >
          
          <span className="text-xl"> {store.weatherInfo?.temp}&#176;c</span>
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="cityName"
        >
          <h1 className="font-bold text-4xl">{store.weatherInfo?.cityName}</h1>
          <small className="flex justify-between">
            <span className="time">{time}</span>
            {/* <span className="date">Friday Jan 9</span> */}
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
              alt="weatherImg"
              className="w-9"
            />
          ) : (
            ""
          )}
          <span className="condition text-xs">
            {store.weatherInfo?.conditionOutput}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
