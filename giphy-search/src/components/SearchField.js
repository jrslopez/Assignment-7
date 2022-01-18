import React, {useState, useEffect} from 'react'
import axios from 'axios'
import GifCard from "./GifCard"

function SearchField() {
    const [post, setPost] = useState([])
    const [gif, setGif] = useState([])

    const fetchPost = async () => {
        const response = await axios(`http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=efd9tZUH8eWQP62dcQtIZvx4K63dbt1I`)
        setPost(response.data.data)
    }

    const displayTrending = async () => {
        const trending = await axios(`http://api.giphy.com/v1/gifs/trending?api_key=efd9tZUH8eWQP62dcQtIZvx4K63dbt1I`)
        setPost(trending.data.data)
    }

    const displayRandom = async () => {
        const random = await axios('http://api.giphy.com/v1/gifs/random?api_key=efd9tZUH8eWQP62dcQtIZvx4K63dbt1I')
        let randomArr = []
        randomArr.push(random.data.data)
        setPost(randomArr)
    }

    useEffect( () => {
        displayTrending()
    }, [])

    return (
        <div id = "GifSearch">
            <h1>Welcome to GIPHY!</h1>
            <div>
                <input type = "text" value = {gif} onChange = {e => setGif(e.target.value)}/>
                <button onClick = {fetchPost}>Search</button>
                <button onClick = {displayTrending}>Trending</button>
                <button onClick = {displayRandom}>Random GIF</button>
            </div>
            <div>
                <GifCard gif = {post}/>
            </div>
        </div>
    )
}

export default SearchField
