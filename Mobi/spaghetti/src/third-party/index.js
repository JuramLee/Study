import axios from "axios";
import { useState } from "react";
import { weatherConfig } from "./weather.config.js";

// export * as weather from "./weather.config.js";

const useFetchWeather = async () => {
  const [weather, setWeather] = useState();

  try {
    const response = await axios.get("/getUltraSrtNcst", {
      baseURL: weatherConfig.api,
      params: {
        serviceKey: weatherConfig.secret_key,
        dataType: "JSON",
        base_date: new Date().toISOString().substring(0, 10).replace(/-/g, ""),
        base_time: "0600",
        nx: 60,
        ny: 127,
      },
    });
    const res = response.data.response.body.items.item;
    const myWeather = res.find((el) => el.category === "T1H").obsrValue;
    setWeather(myWeather);
  } catch (err) {
    console.log(err);
    throw new Error("failed load weather api");
  }

  return [weather];
};

export default useFetchWeather;
