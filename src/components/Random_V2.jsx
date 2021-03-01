import React from 'react'
import useGif from '../useGif'

const Random = () => {

    const { gif, fetchGif } = useGif()

    return (
        <div>
            <h1>Random GIF</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <button onClick={fetchGif()}>
                CLICK FOR NEW GIF
            </button>
        </div >
    )

}

export default Random