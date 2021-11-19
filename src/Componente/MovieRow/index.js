import React from "react";
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './MovieRow.css';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    arrows: true
};

const MovieRow = ({ title, items }) => (
    <div className='MovieRow'>
        <h2> {title}</h2>
        <div className='MovieRow-- listarea'>
            <Slider {...settings}>
                {items.results?.map((items, key) => (
                    <div key={key} className='MovieRow--item'>
                        <img src={`https://image.tmdb.org/t/p/w300${items.poster_path}`} key={`key-for-${items.poster_path}`} />
                    </div>
                ))}
            </Slider>
        </div>
    </div>
)

MovieRow.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}

export default MovieRow;