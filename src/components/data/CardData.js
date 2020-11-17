import React, {useState, useEffect} from 'react';
import ModalDetail from './ModalDetail'
import CardDataStyle from './CardDataStyle.css'
const CardData = ({title, name, image, qualification, id, mediaType}) => {
    const [modalShow, setModalShow] = useState(false);
    const [movie, setMovie] = useState({})
    const [character, setCast] = useState([])

    const getMovie = async (identificator, type) =>{
        let urlMovie = ``
        let urlCast = ``
        const apiKey = `efa94efe0174531c44b75ad069c9637d`
        type === 'movie'? urlMovie = `https://api.themoviedb.org/3/movie/${identificator}?api_key=${apiKey}` : urlMovie = `https://api.themoviedb.org/3/tv/${identificator}?api_key=${apiKey}`
        type === 'movie'? urlCast = `https://api.themoviedb.org/3/movie/${identificator}/credits?api_key=${apiKey}` : urlCast = `https://api.themoviedb.org/3/tv/${identificator}/credits?api_key=${apiKey}`
        const data = await fetch(urlMovie)
        const dataCast = await fetch(urlCast)
        const results = await data.json()
        const {cast} = await dataCast.json()
        setMovie(results)
        setCast(cast)
    }

    useEffect(() => {
        getMovie(id, mediaType)
      }, [])
      
     
    return ( 
        <>
            <div className="card">
                <img src={`https://image.tmdb.org/t/p/original${image}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{ title === undefined ? name : title}</h5>
                    <p className="card-text"><b>Qualification: </b><span>{qualification}</span></p>
                    <button type="button" className="btn btn-primary" onClick={() => setModalShow(true)}>+</button>
                </div>
            </div> 
            <ModalDetail
                id = {id}
                character = {character}
                movie = {movie}
                mediaType = {mediaType}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
  );
}
 
export default CardData;