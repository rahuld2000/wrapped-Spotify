import React, { useEffect, useState } from "react";
import axios from "axios";
import "./topartist_track.css";
import {motion} from "framer-motion"
const TopArtist = () => {
    const [artists, setArtist] = useState("");
    const [term,setTerm]=useState("short_term")
    useEffect(() => {
        const api = () => {
            axios.get(`https://api.spotify.com/v1/me/top/artists?limit=50&time_range=${term}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then(response => {
                setArtist(response.data);
                console.log(artists);
            })
        }
        api();
    },[term])
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
               <button className="time"  onClick={medium}>6 months</button>
               <button className="time"  onClick={past}>All years</button>
            </div>
            

            {
                artists.items &&
                <div className="list">
                    
                    <div className="artist2_list">
                        {
                            artists.items.map((artist, index) => {

                                return (
                                    <div className="artist_container" key={index} >
                                       
                                        <img className="artist_img" src={artist.images[2].url} alt="error" />
                                        <div className="artist_txt"> <p>{index+1}.</p>
                                        <h4>{artist.name}</h4>
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
export default TopArtist