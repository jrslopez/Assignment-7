import React, {useState, useEffect} from 'react'
import axios from 'axios'

function GifCard() {

    const [post, setPost] = useState([])
    const [gif, setGif] = useState([])

    const fetchPost = async () => {
        const response = await axios(`http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=efd9tZUH8eWQP62dcQtIZvx4K63dbt1I`)
        setPost(response.data.data)
        console.log(response.data.data)
    }

    useEffect( () => {
        fetchPost()
    }, [])

    return (
        <div className = "GifSearch">
            <h1>Hello</h1>
            <div>
                <input type = "text" value = {gif} onChange = {e => setGif(e.target.value)}/>
                <button onClick = {fetchPost}>Search</button>
            </div>
            <div>
                {post.map(element => {
                    return(
                        <div className = "gif" key={element.id}>
                        <div>{element.url}</div>
                        <div>{element.images.original.url}</div>
                        </div>
                    
                )})}</div>
        </div>
    );
}

export default GifCard
