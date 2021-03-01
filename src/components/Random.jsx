import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

const Random = () => {

    const [gif, setGif] = useState(" ")
    const fetchGif = async () => {

        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        const { data } = await axios.get(url)

        // console.log(data)
        const imageSrc = data.data.images.downsized_large.url
        // console.log(imageSrc)
        setGif(imageSrc)
    }
    const handleClick = () => {
        fetchGif()
    }

    useEffect(() => {

        fetchGif()

    }, [])
    return (
        <div>
            <h1>Random GIF</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <button onClick={handleClick}>
                CLICK FOR NEW GIF
            </button>
        </div>
    )
}

export default Random
