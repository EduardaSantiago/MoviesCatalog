import React, { useState } from "react";
import PropTypes from 'prop-types';
import './MovieRow.css';
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

const MovieRow = ({ title, items }) => {
    const [scrollX, setScrollX] = useState(-400)
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results?.lenght * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }
    return (
        <div className='MovieRow'>
            <h2> {title}</h2>
            <div className="MovieRow--left" onClick={handleLeftArrow}>
                < NavigateBefore style={{ fontSize: 50 }} />
            </div>
            <div className="MovieRow--right" onClick={handleRightArrow}>
                <NavigateNext style={{ fontSize: 50 }} />
            </div>
            <div className='MovieRow-- listarea'>
                <div className='MovieRow--list' style={{
                    marginLeft: scrollX,
                    width: items.results?.lenght * 150
                }} >
                    {items.results?.map((items, key) => (
                        <div key={key} className='MovieRow--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${items.poster_path}`} key={`key-for-${items.poster_path}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

MovieRow.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}

export default MovieRow;