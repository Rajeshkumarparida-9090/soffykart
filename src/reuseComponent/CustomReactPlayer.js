import React from 'react'
import ReactPlayer from 'react-player'

// Render a YouTube video player
const CustomReactPlayer = ()=>{
    return(
        <ReactPlayer 
            url="https://www.youtube.com/shorts/KRhoJTADJQ0" 
            width='100%'
            height='100%'
            playing="true"
            muted
            loop
        />
    )
}
export default CustomReactPlayer;