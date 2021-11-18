import React from "react";
import PropTypes from 'prop-types';
import './MovieRow.css';

const MovieRow = ({ title, items }) => {
    return (
        <div className= 'MoveiRow'>
            <h2> {title}</h2>
            <div className='MovieRow-- listarea'>
                <div className='MovieRow--list'>
                {items.results?.map((items, key) => (
                    <div key={key} className= 'MovieRow--item'>
                        <img src={`https://image.tmdb.org/t/p/w300${items.poster_path}`} key={`key-for-${items.poster_path}`} />
                        </div>
                ))}
                     </div>
            </div>
        </div>
    );
}

MovieRow.propTypes = {
    title:  PropTypes.string.isRequired,
    items:  PropTypes.array.isRequired
}

export default MovieRow;