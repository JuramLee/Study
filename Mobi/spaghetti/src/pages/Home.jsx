import { useEffect, useState } from "react";
import axios from "axios";
import { weatherConfig } from "../third-party/weather.config";
import { DialLogState, useDiaLogStore } from "../contexts/DialogProvider";
import GetName from "../components/getName";
import { fetching } from "../util/utility";

const HomePage = () => {
  const [isBackGroundBlur, setIsBackGroundBlur] = useState(true);
  const [weather, setWeather] = useState();
  const [dialogAttribute, dispatch] = useDiaLogStore();

  const fetchWeather = async () => {
    const address = "/getUltraSrtNcst";
    const option = {
      baseURL: weatherConfig.api,
      params: {
        serviceKey: weatherConfig.secret_key,
        dataType: "JSON",
        base_date: new Date().toISOString().substring(0, 10).replace(/-/g, ""),
        base_time: "0600",
        nx: 60,
        ny: 127,
      },
    };
    try {
      const res = await fetching(address, option);
      setWeather(res.response.body.items.item);
    } catch (err) {
      console.log(err);
      throw new Error("failed load weather api");
    }
  };

  useEffect(() => {
    fetchWeather();
    const userName = localStorage.getItem("userName");
    if (!userName) {
      return setIsBackGroundBlur(true);
    } else setIsBackGroundBlur(false);
  }, []);

  const onPressNavigateBlog = () => {
    dispatch({
      type: DialLogState.ALERT,
      payload: {
        text: "정말로 페이지를 이동하겠습니까",
        isOpen: true,
        onConfirm: async () => {
          await dispatch({ type: DialLogState.CLOSE });
          window.location.href = "/posts";
        },
      },
    });
  };

  return (
    <>
      {isBackGroundBlur && (
        <GetName setIsBackGroundBlur={setIsBackGroundBlur} />
      )}
      <div>
        <h1>Home Page</h1>
        <p>오늘의 기온</p>
        <p>{weather?.find((el) => el.category === "T1H").obsrValue}도</p>
        <button onClick={onPressNavigateBlog}>블로그 보러가기</button>
      </div>
    </>
  );
};
export default HomePage;
