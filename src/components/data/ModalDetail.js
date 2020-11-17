import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ModalDetail = ({onHide, show, movie, character}) => {
    let genres = []
    if (movie.genres === undefined){
        console.error('genres undefined')
    }else{
        genres = movie.genres
    }
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
                <img alt={movie.original_title} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
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