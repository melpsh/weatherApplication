import axios from "axios";
import { create } from "zustand";
import { toast } from "react-toastify";
import { IPromise } from "./type";
import clearDay from "/images/day/clear.jpg";
import clearNight from "/images/night/clear.jpg";
import cloudyDay from "/images/day/cloudy.jpg";
import cloudyNight from "/images/night/cloudy.jpg";
import rainyDay from "/images/day/rainy.jpg";
import rainyNight from "/images/night/rainy.jpg";
import snowyDay from "/images/day/snowy.jpg";
import snowyNight from "/images/night/snowy.jpg";

const mainStore = create<IPromise>((set, getState) => ({
  // vaiables
  weatherInfo: null,
  cityLocation: "Tehran",
  inputCityLocation: "",
  urlImg: "",
  bgBlack: false,
  hoursForecast: [],
  daysData: [],
  currentEleID: "hour",
  currentHour: "",
  is_error: false,

  onChange: (e) => {
    const cityName = e.target.value;
    set({ inputCityLocation: cityName });
  },

  onSubmitSearchBtn: (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = getState().inputCityLocation;
    set({ cityLocation: name, inputCityLocation: "" });
  },

  onClick: (e) => {
    const inputElement = e.target as HTMLInputElement; // Type assertion
    const cityName = inputElement.innerText;
    set({ cityLocation: cityName });
  },

  // get the ID of element details
  getIdElement: (e) => {
    const buttonElement = e.currentTarget;
    const id = buttonElement.id;
    set({ currentEleID: id });
  },
  getWeekday: (dateEpoch) => {
    // Convert timestamp to Date object (assuming Unix timestamp)
    const dateObject = new Date(dateEpoch * 1000);

    // Get the day of the week (0-6)
    const dayOfWeek = dateObject.getDay();

    //  Convert day of week to name
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const weekdayName = weekDays[dayOfWeek];

    // Return the day of the week
    return weekdayName;
  },
  // fetching  data
  fetchingData: async () => {
    const apiKey = "349c04836c2845cbbbd121738241102";
    const location = getState().cityLocation;
    let timeOfDay: string = "night";
    let hoursDataForNextDay = [];

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`
      );
      const { data } = response;
      let contion = data.current.condition.code;

      let currentTimeInLocation = parseInt(
        data.location.localtime.slice(11, 13)
      );
      if (currentTimeInLocation > 19) {
        const loggg = data.forecast.forecastday[1].hour[0];
        console.log(loggg);
        hoursDataForNextDay = data.forecast.forecastday[1].hour.map(
          (item: any) => {
            let iconUrl = item.condition.icon;
            if (iconUrl.startsWith("//")) {
              iconUrl = `https:${iconUrl}`;
            }
            return {
              wind: item.wind_kph,
              time: item.time,
              temp_c: item.temp_c,
              text: item.condition.text,
              icon: iconUrl,
              humidity: item.humidity,
            };
          }
        );
      }
      let hoursData = data.forecast.forecastday[0].hour.map((item: any) => {
        return {
          wind: item.wind_kph,
          time: item.time,
          temp_c: item.temp_c,
          text: item.condition.text,
          icon: item.condition.icon,
          humidity: item.humidity,
        };
      });
      if (currentTimeInLocation > 19) {
        hoursData = [...hoursData, ...hoursDataForNextDay];
      }

      const info: IPromise["weatherInfo"] = {
        cloud: data.current.cloud,
        wind: data.current.wind_kph,
        temp: data.current.temp_c,
        conditionOutput: data.current.condition.text,
        date: data.location.localtime,
        cityName: data.location.name,
        icon: response.data.current.condition.icon,
        humidity: data.current.humidity,
        feelslike: data.current.feelslike_c,
      };

      if (data.current.is_day) timeOfDay = "day";
      if (timeOfDay === "day") {
        if (contion === 1000) {
          getState().bgBlack = true;
          getState().urlImg = clearDay;
        } else if (
          contion === 1003 ||
          contion === 1006 ||
          contion === 1009 ||
          contion === 1030 ||
          contion === 1069 ||
          contion === 1087 ||
          contion === 1135 ||
          contion === 1273 ||
          contion === 1276 ||
          contion === 1279 ||
          contion === 1287
        ) {
          getState().bgBlack = false;
          getState().urlImg = cloudyDay;
        } else if (
          contion === 1063 ||
          contion === 1069 ||
          contion === 1072 ||
          contion === 1150 ||
          contion === 1180 ||
          contion === 1183 ||
          contion === 1189 ||
          contion === 1198 ||
          contion === 1192 ||
          contion === 1195 ||
          contion === 1204 ||
          contion === 1207 ||
          contion === 1240 ||
          contion === 1243 ||
          contion === 1246 ||
          contion === 1249 ||
          contion === 1252
        ) {
          getState().bgBlack = false;
          getState().urlImg = rainyDay;
        } else {
          getState().bgBlack = true;
          getState().urlImg = snowyDay;
        }
      }
      if (timeOfDay === "night") {
        if (data.current.condition.code === 1000) {
          getState().urlImg = clearNight;
        } else if (
          contion === 1003 ||
          contion === 1006 ||
          contion === 1009 ||
          contion === 1030 ||
          contion === 1069 ||
          contion === 1087 ||
          contion === 1135 ||
          contion === 1273 ||
          contion === 1276 ||
          contion === 1279 ||
          contion === 1287
        ) {
          getState().urlImg = cloudyNight;
        } else if (
          contion === 1063 ||
          contion === 1069 ||
          contion === 1072 ||
          contion === 1150 ||
          contion === 1180 ||
          contion === 1183 ||
          contion === 1189 ||
          contion === 1198 ||
          contion === 1192 ||
          contion === 1195 ||
          contion === 1204 ||
          contion === 1207 ||
          contion === 1240 ||
          contion === 1243 ||
          contion === 1246 ||
          contion === 1249 ||
          contion === 1252
        ) {
          getState().urlImg = rainyNight;
        } else {
          getState().urlImg = snowyNight;
        }
      }

      // get day's info for daily tab
      let daysData = data.forecast.forecastday.map((item: any) => {
        return {
          date_epoch: item.date_epoch,
          icon: item.day.condition.icon,
          temp_h: item.day.maxtemp_c,
          temp_l: item.day.mintemp_c,
        };
      });
      set({
        weatherInfo: info,
        hoursForecast: hoursData,
        currentHour: info.date.slice(11, 13),
        daysData,
      });
    } catch (error: any) {
      // Handle the error here
      if (error.response.status === 400) {
        toast.error("Error fetching data!", {
          position: "bottom-center",
        });
      }
    }
  },
}));

export default mainStore;
