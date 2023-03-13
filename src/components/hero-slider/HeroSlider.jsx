import React, { useEffect, useRef, useState, } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/autoplay";
import apiConfig from "../../api/apiConfig";
import "./hero-slider.scss";
import { Link } from 'react-router-dom';


const HeroSlider = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const getMovies = () => {
            fetch(`${apiConfig.baseUrl}movie/popular?api_key=${apiConfig.apiKey}`)
                .then((m) => m.json())
                .then((m) => setMovies(m))
        };
        getMovies()
    }, []);
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                {
                    movies.length !== 0 ? (
                        movies.results.map((movie) => (
                            <SwiperSlide>
                                <HeroSlideItem movie={movie} />
                            </SwiperSlide>
                        ))
                    ) : (
                        <p>YUKLENIR</p>
                    )
                }

                <SwiperSlide>Slide 1</SwiperSlide>
                
            </Swiper>

        </>
    );
};

const HeroSlideItem = ({ movie }) => {
    return (
        <div className="slider-item"
            style={{
                backgroundImage: `url(${apiConfig.originalImage(movie.backdrop_path)})`
            }}>
            <div className='slider-content'>
                <h4>{movie.original_title}</h4>
                <Link to={`/movie/${movie.id}`}>DETAIL</Link>
                
            </div>
            
        </div>
    )
};

export default HeroSlider