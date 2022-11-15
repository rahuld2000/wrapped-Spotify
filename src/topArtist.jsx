import React, { useEffect, useState } from "react";
import axios from "axios";
import "./topartist_track.css";
import {motion} from "framer-motion"
const TopArtist = () => {
    const [artists, setArtist] = useState("");
    useEffect(() => {
        const api = () => {
            axios.get("https://api.spotify.com/v1/me/top/artists", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then(response => {
                setArtist(response.data);
                console.log(artists);
            })
        }
        api();
    }, [])



    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
            
            

            {
                artists.items &&
                <div className="list">
                    
                    <div className="artist_list">
                        {
                            artists.items.map((artist, index) => {

                                return (
                                    <div key={index} >
                                        <p>{index+1}</p>
                                        <img className="artist_img" src={artist.images[2].url} alt="error" />
                                        <h4>{artist.name}</h4>
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