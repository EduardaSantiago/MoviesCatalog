const API_KEY = '536d8318e7afbd5b13ac70772f314318';
const API_BASE = 'https://api.themoviedb.org/3';

/* o que vamos precisar pegar na netflix
- originais da netflix
-  Recomendados (trending)
- Em alta (top rated)
-Ação
-Comédia
-terror
-romance
-documentários
*/
//endpoint vai buscar pela URl  //
const basicFecth = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    req.responseType = 'json';
    const json = await req.json();
    return json;
    
}


export default  {
    getHomeList: async () => {
        return [
          {
              slug: 'Originals',
              title: 'Originais do Netflix',
              items: await basicFecth(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
          },
          /* {
              slug: 'Trending',
              title: ' Recomendados para Você',
              items: await basicFecth(`/treindg/all/week&language=pt-BR&api-key=${API_KEY}`)
          }, */
          {
            slug: 'Troprataded',
            title: 'Em Alta',
            items: await basicFecth(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            //requição de um serviço externo//
          },
          {
              slug: 'Action',
              title: 'Ação',
              items: await basicFecth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
          },
          {
             slug: 'Comedy',
             title: 'Comédia',
             items: await basicFecth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
          },
          {
              slug: 'Horror',
              title: 'Terror',
              items: await basicFecth(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
          },
          {
              slug: 'Romance',
              title: 'Roamance',
              items:await basicFecth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
          },
    
        ];
    },
    getMovieInfo: async (movieId, type) =>{
        let info = {};
        
        if(movieId) {
            switch (type) {
                case 'movie': 
                info = await basicFecth(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);

                break;
                case 'tv':
                    info = await basicFecth(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    

               break;
               default:
                   info = null;
                   break;
                  
            }
        }
        return info; 
}

}