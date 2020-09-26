import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Container} from 'react-bootstrap'
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
        <Container className='d-flex flex-column align-items-center'>
        {
            tracks?.map((track)=>{
            return(
                <audio controls key={track._id} className='m-3'>
                    <source src={track.url} type="audio/mp3" />
                </audio>   
            )})}
        </Container>
    )
}

export default Home
