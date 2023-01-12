import React from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl } from '../../Constants/Constants'
import { useEffect, useState } from "react";

function RowPost(props) {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovie(response.data.results)
    })
  })
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((movie) =>
          <img className={props.isSmall?'smallposter':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="" />
        )}
      </div>
    </div>
  )
}

export default RowPost  