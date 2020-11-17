import React, { useState, useEffect } from 'react';
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer';
import Data from './components/data/Data'





function App() {

  

  const [trendingAll, setTrendingAll] = useState([])
  const [trendingMovie, setTrendingMovie] = useState([])
  const [trendingSerie, setTrendingSerie] = useState([])
  // const []

  const getData = async () =>{
    const apiKey = `efa94efe0174531c44b75ad069c9637d`
    const urlAll = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`
    const urlMovies = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
    const urlSeries = `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`
    try{
      const all = await fetch(urlAll)
      const movies = await fetch(urlMovies)
      const series = await fetch(urlSeries)
      const resultsAll = await all.json()
      setTrendingAll(resultsAll.results)
      const resultsMovie = await movies.json()
      setTrendingMovie(resultsMovie.results)
      const resultsSerie = await series.json()
      setTrendingSerie(resultsSerie.results)
    }catch (error){
        console.log('Fetch error!', error)
    } 
  }
  

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Navbar/>
      <Data
        data = {trendingAll}
        title = "Trending of Week"
        selector="All"
      />
      <hr/>
      <Data
        data = {trendingMovie}
        title = "Movies"
        selector="Movies"
      />
      <hr/>

      <Data
        data = {trendingSerie}
        title = "Series"
        selector="Series"
      />
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
