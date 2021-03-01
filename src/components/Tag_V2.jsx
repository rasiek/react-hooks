import React, { useState } from 'react'
import useGif from '../useGif'

const Tag = () => {

    const [tag, setTag] = useState("dog")
    const { gif, fetchGif } = useGif(tag)

    return (
        <div>
            <h1>Random {tag} GIF</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={() => fetchGif(tag)}>
                CLICK FOR NEW GIF
            </button>
        </div >
    )

}

export default Tag
