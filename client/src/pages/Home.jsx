import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [tracks,setTracks] = useState();

    useEffect(() => {
        async function get () {
            try {
                const resp = await axios.get('/api/tracks');
                setTracks(resp.data);
            } catch (error) {console.log(error)}
        }
        get()
    }, [])

    return (
        <div>
        {
            tracks?.map((track)=>{
            return(
                <audio controls>
                    <source src={track.url} type="audio/mp3" />
                </audio>   
            )})}
        </div>
    )
}

export default Home
