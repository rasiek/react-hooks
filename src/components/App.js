import React from 'react'


import Random from './Random_V2'
import Tag from './Tag_V1'


import './App.css'

const App = () => {

    return (
        <div>
            <h1>Random GIF App</h1>
            <div className="main-container">

                <Random />

                <Tag />
            </div>
        </div>
    )
}

export default App
