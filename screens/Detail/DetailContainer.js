import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

export default ({
  navigation,
  route: {
    params: { isTv, id, title, backgroundImage, poster, votes, overview }
  }
}) => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({
    loading: true,
    result: {
      title,
      backgroundImage,
      poster,
      overview,
      votes
    }
  });
  const getData = async () => {
    const [getDetail, getDetailError] = isTv
      ? await tvApi.show(id)
      : await movieApi.movie(id);
    setDetail({
      loading: false,
      result: {
        ...getDetail,
        title: getDetail.title || getDetail.name,
        backgroundImage: getDetail.backdrop_path,
        poster: getDetail.poster_path,
        overview: getDetail.overview,
        votes: getDetail.vote_average
      }
    });
  };

  useEffect(() => {
    getData();
  }, [id]);
  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });
  return <DetailPresenter {...detail} />;
};
