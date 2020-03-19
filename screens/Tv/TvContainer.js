import React, { useEffect, useState } from "react";
import { tvApi } from "../../api";
import TvPresenter from "./TvPresenter";

export default () => {
  const [shows, setShows] = useState({
    loading: true,
    today: [],
    thisWeek: [],
    topRated: [],
    popular: [],
    todayError: null,
    thisWeekError: null,
    topRatedError: null,
    popularError: null
  });
  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    setShows({
      loading: false,
      today,
      thisWeek,
      topRated,
      popular,
      todayError,
      thisWeekError,
      topRatedError,
      popularError
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <TvPresenter {...shows} />;
};
