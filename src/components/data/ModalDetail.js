import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ModalDetailStyle from './ModalDetailStyle.css'
const ModalDetail = ({onHide, show, id, mediaType}) => {

    const [movie, setMovie] = useState({})
    const [character, setCast] = useState([])

    const getMovie = async (identificator, type) =>{
        let urlMovie = ``
        let urlCast = ``
        const apiKey = `efa94efe0174531c44b75ad069c9637d`
        type == 'movie'? urlMovie = `https://api.themoviedb.org/3/movie/${identificator}?api_key=${apiKey}` : urlMovie = `https://api.themoviedb.org/3/tv/${identificator}?api_key=${apiKey}`
        type == 'movie'? urlCast = `https://api.themoviedb.org/3/movie/${identificator}/credits?api_key=${apiKey}` : urlCast = `https://api.themoviedb.org/3/tv/${identificator}/credits?api_key=${apiKey}`
        const data = await fetch(urlMovie)
        const dataCast = await fetch(urlCast)
        const results = await data.json()
        const {cast} = await dataCast.json()
        setMovie(results)
        setCast(cast)
    }

    useEffect(() => {
        getMovie(id, mediaType)
      }, {})
      
      const {genres} = movie
      console.log(genres)
      
    return ( 
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {movie.original_title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                <hr/>
                <h4>Cast</h4>
                {character.map(cast => <i>{cast.name}; </i> )}
                <hr/>
                <h4>Genre</h4>
                {genres.map(genre => <i>#{genre.name} </i>)}
                <h4>Qualification</h4>
                <b>{movie.vote_average}</b>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} >Close</Button>
            </Modal.Footer>
        </Modal>    
    );
}
 
export default ModalDetail;