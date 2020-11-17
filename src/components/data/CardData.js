import React, {useState} from 'react';
import ModalDetail from './ModalDetail'
import Button from 'react-bootstrap/Button'
import CardDataStyle from './CardDataStyle.css'
const CardData = ({title, name, image, qualification, id, mediaType}) => {
    const [modalShow, setModalShow] = useState(false);

    return ( 
        <>
            <div className="card">
                <img src={`https://image.tmdb.org/t/p/original${image}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{ title == undefined ? name : title}</h5>
                    <p className="card-text"><b>Qualification: </b><span>{qualification}</span></p>
                    <button type="button" className="btn btn-primary" onClick={() => setModalShow(true)}>+</button>
                </div>
            </div> 
            <ModalDetail
                id = {id}
                mediaType = {mediaType}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
  );
}
 
export default CardData;