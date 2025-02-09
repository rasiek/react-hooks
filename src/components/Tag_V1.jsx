import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

const Tag = () => {

    const [tag, setTag] = useState("dog")
    const [gif, setGif] = useState(" ")
    const fetchGif = async (tag) => {

        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`

        const { data } = await axios.get(url)

        // console.log(data)
        const imageSrc = data.data.images.downsized_large.url
        // console.log(imageSrc)
        setGif(imageSrc)
    }
    const handleClick = () => {
        fetchGif(tag)
    }

    useEffect(() => {

        fetchGif(tag)

    }, [])
    return (
        <div>
            <h1>Random {tag} GIF</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={handleClick}>
                CLICK FOR NEW GIF
            </button>
        </div >
    )
}

export default Tag