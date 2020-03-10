import React, {useState} from 'react'
import '../styles/customImg.css'

export default function CustomImg() {
    const [size, setSize] = useState(80);
    const [url, setUrl] = useState(null);

    const handleUrl = e => {
        setUrl(e.target.value)
    }

    const handleSize = e => {
        setSize(e.target.value)
    }

    const imgStyle = {
        height: `${size}px`,
        width: `${size}px`,
    }

    return (
        <div className="customContainer">
            <h1>Customize Image</h1>
            <input className="inputText" onChange={handleUrl} type="text"></input>
            <input className="inputRange" onChange={handleSize} type="range" min="0" max="200"></input>
            <p className="sizeText">{size} x {size} px</p>
            {url && <img style={imgStyle} src={url}></img>}
        </div>
    )
}
