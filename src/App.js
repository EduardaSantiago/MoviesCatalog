import React, { useEffect, useState } from "react";
import MovieRow from "./Componente/MovieRow";
import tmdb from './tmdb';
import './App.css';
import FeaturedMovie from "./Componente/FeaturedMovie";
import Header from "./Componente/Header";


const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [FeaturedData, setFeaturedData] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await tmdb.getHomeList();
      setMovieList(list);
      //pegando o featured
      let originals = list.filter(i => i.slug === 'Originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items?.results.length - 1));
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
      <Header />
      {FeaturedData &&
        <FeaturedMovie item={FeaturedData} />
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      {movieList >= 0 ? <> <div className="loading">
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Loading" />
      </div> </> : null}
    </div>
  );
}

export default App;
