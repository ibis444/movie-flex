import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import apiConfig from "../../api/apiConfig";
import "./movie-grid.scss";
import { Link } from "react-router-dom";
const MovieGrid = ({ type }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getList = async () => {
      let response = null;
      switch (type) {
        case "movie":
          response = await fetch(`
          ${apiConfig.baseUrl}movie/popular?api_key=${apiConfig.apiKey}`);
      }
    };
  }, []);

  return <div>MovieGrid</div>;
};

export default MovieGrid;
