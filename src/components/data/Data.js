import React from 'react';
import DataStyle from './DataStyle.css'
import CardData from './CardData';
const Data = ({data, title, selector}) => {
    return ( 
        <section className="gird-movies" id={selector}>
            <br></br>
            <br></br>
            <br></br>
            <h2>{title}</h2>
            <div className="movies" >
                <article className="movie">
                <>
                {data.map(movie => 
                    <CardData
                        id = {movie.id}
                        title = {movie.original_title}
                        name = {movie.original_name}
                        image= {movie.poster_path}
                        qualification = {movie.vote_average}
                        mediaType = {movie.media_type}
                    />
                )}
                </>
                </article>
            </div>
        </section>
     );
}
 
export default Data;