import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {  API_KEY, imageUrlLow } from '../../constants/constants'

function RowPost(props) {

    const [movies, setMovies] = useState([])
    const [ YTvideo, setYTvideo ] = useState()
 
    useEffect(() => {
        axios.get(props.urls).then((response) => {
            console.log(response.data.results)
            setMovies(response.data.results) 
        }).catch( (e)=> console.log(e) ) // eslint-disable-next-line
    }, [])

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
    }

    const playYoutube = (id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then((result)=>{
                console.log(result.data.results[0].key)
                setYTvideo(result.data.results[0].key)
            })
            .catch(e=>console.log('error'))
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters' >
                {
                    movies.map((obj) => {
                        return (
                            <div className='divZoom' onClick={ ()=> { playYoutube(obj.id)}  }>
                                <p className={props.isSmall ? 'smallPosterTitle' : 'posterTitle'}>{obj.original_name}{obj.original_title}</p>
                                <img className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrlLow + obj.backdrop_path}`} />
                            </div>
                        )
                    }
                    )
                }
            </div>
            <div style={{ display: 'flex' , justifyContent: 'center'}}>
                { YTvideo ? <YouTube videoId={ YTvideo } opts={opts}  /> : '' }
            </div>
        </div>
    )
}

export default RowPost