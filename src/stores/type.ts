export interface IPromise {
  cityLocation: string,
  inputCityLocation: string,
  urlImg: string,
  bgBlack: boolean,
  currentEleID: string,
  currentHour: string,
  is_error: boolean,

  weatherInfo: {
    cloud: number,
    wind: number,
    temp: number,
    conditionOutput: string,
    date: string,
    cityName: string,
    icon: string,
    humidity: number,
    feelslike: number,
  } | null,

  hoursForecast: {
    wind: number,
    temp_c: number,
    text: string,
    time: string,
    icon: string,
    humidity: number,
  }[],
  daysData: {
    date_epoch: number,
    icon: string,
    temp_h: number,
    temp_l: number,
  }[],

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onSubmitSearchBtn: (e: React.FormEvent<HTMLFormElement>) => void,
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  getIdElement: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  getWeekday: (dateEpoch: number) => string,
  fetchingData: () => Promise<void>,
}