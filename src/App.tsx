import { useEffect } from "react";
import Details from "./components/details";
import Main from "./components/main";
import { motion } from "framer-motion";
import mainStore from "./stores/homeStore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling


function App() {
  const store = mainStore();
  console.log(store.is_error)
  useEffect(() => {
    store.fetchingData();
  }, [store.cityLocation]);
if (store.is_error) {
  console.warn('is here')
}
  return (
    <>
    <motion.div
      key={store.cityLocation || store.inputCityLocation}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className={`${
        store.bgBlack ? "text-black" : "text-white"
      } w-screen h-screen bg-cover bg-center  bg-no-repeat  relative flex flex-col`}
      style={{ backgroundImage: `url(${store.urlImg})` }}
    >
      <h1 className="mt-10 text-blue-400 font-bold text-xl tracking-wider flex justify-center">
        
      </h1>
      <Main />
      <Details />
    </motion.div>
    <ToastContainer />
    </>
  );
}

export default App;
