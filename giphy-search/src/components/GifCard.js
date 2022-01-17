import React, {useState, useEffect} from 'react'
import axios from 'axios'
//import SearchField from './SearchField'

function GifCard() {

    let [post, setPost] = useState([])
    const [gif, setGif] = useState([])

    const fetchPost = async () => {
        const response = await axios(`http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=efd9tZUH8eWQP62dcQtIZvx4K63dbt1I`)
        setPost(response.data.data)
        console.log(response.data.data)
    }

    const displayTrending = async () => {
        const trending = await axios(`http://api.giphy.com/v1/gifs/trending?api_key=efd9tZUH8eWQP62dcQtIZvx4K63dbt1I`)
        setPost(trending.data.data)
        console.log(trending.data.data)
    }

    const displayRandom = async () => {
        let random = await axios('http://api.giphy.com/v1/gifs/random?api_key=efd9tZUH8eWQP62dcQtIZvx4K63dbt1I')
        let randomArr = []
        randomArr.push(random.data.data)
        setPost(randomArr)
        console.log(randomArr)
    }

    useEffect( () => {
        displayTrending()
    }, [])

    return (
        <div className = "GifSearch">
            <h1>Hello</h1>
            <div>
                <input type = "text" value = {gif} onChange = {e => setGif(e.target.value)}/>
                <button onClick = {fetchPost}>Search</button>
                <button onClick = {displayRandom}>Random GIF</button>
            </div>
            {/* <SearchField/> */}
            <div>
                {post.map(element => {
                    return(
                        <div className = "gif" key={element.id}>
                        <img src = {element.images.original.url} alt = "GIFs"/>
                        </div>
        
                )})}</div>
        </div>
    );
}

export default GifCard
