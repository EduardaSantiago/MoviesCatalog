import React, { useEffect, useState } from "react";
import MovieRow from "./Componente/MovieRow";
import tmdb from './tmdb';
import './App.css';
import FeaturedMovie from "./Componente/FeaturedMovie";
import PropTypes from 'prop-types';


export default () => {
  const [movieList, setMovieList] = useState([]);
  const [FeaturedData,setFeaturedData]= useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await tmdb.getHomeList();
      setMovieList(list);
      //pegando o featured
      let originals = list.filter(i=>i.slug === 'Originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items?.results.length-1));
      let chosen = originals[0].items.results[randomChosen];
      let ChosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(ChosenInfo);

    } 
    loadAll();
  }, []);
  
  // quando a tela for carregada irá usar a função a seguir//
  //header destaque As listas Rodapé//
  return (
    <div className='page'>

      {FeaturedData &&
      <FeaturedMovie item={setFeaturedData}/>
      }

      <section className='lists'>
        {movieList.map((item, key) => (
            <MovieRow key={key} title= {item.title} items = {item.items}/>
        ))}
      </section>
    </div>
  );
}
