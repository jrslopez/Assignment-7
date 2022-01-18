import React from 'react'

function GifCard(props) {
    const {gif} = props

    return (
            <div>
                {gif.map(element => {
                    return(
                        <div id = "gif" key={element.id}>
                        <img src = {element.images.original.url} alt = "GIFs"/>
                        </div>
                )})}
            </div>
    )
}

export default GifCard
