import React, { useEffect, useState } from "react";
import axios from "axios";
import "./topartist_track.css"
import {motion} from "framer-motion"
const Toptrack = () => {
    const [Tracks, setTrack] = useState("");
    const [term,setTerm]=useState("short_term")
    useEffect(() => {
        const api = () => {
            axios.get(`https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=${term}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then(response => {
                setTrack(response.data);
                console.log(Tracks);
            })
        }
        api();
    }, [term])
    function short(){
        setTerm("short_term")
    }
    function medium(){
        setTerm("medium_term")
        
    }
    function past(){
        setTerm("long_term")
    }
    
    


    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
            
            <div className="duration">
               <button className="time" onClick={short}>4 weeks</button>
               <button className="time" onClick={medium}>6 months</button>
               <button className="time" onClick={past}>All years</button>
            </div>
            {
                Tracks.items &&
                <div className="list">
                    <div className="artist_list">
                        {
                            Tracks.items.map((track, index) => {

                                return (
                                    <div key={index}>
                                        <p>{index+1}</p>
                                        <img className="track_img" src={track.album.images[1].url} alt="error" />
                                        <div className="track_txt">
                                        <h4>{track.name}</h4>
                                        <p>{track.artists[0].name}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>


            }
        </motion.div>

    )
}
export default Toptrack;