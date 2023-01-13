import React from 'react'
import './RowPost.css'
import axios from '../../axios'
import YouTube from 'react-youtube'
import { imageUrl, API_KEY } from '../../Constants/Constants'
import { useEffect, useState } from "react";

function RowPost(props) {
  const [movie, setMovie] = useState([]);
  const [urlId, setUrlId] = useState('');
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovie(response.data.results)
    })
  })

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {

    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        if (res.data.results !== 0) {
          setUrlId(res.data.results[0]);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((movie) =>
          <img onClick={() => { handleMovie(movie.id) }} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl + movie.backdrop_path}`} alt="" />
        )}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost  
