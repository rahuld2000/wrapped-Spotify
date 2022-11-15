import React, { useEffect, useState } from "react";
import axios from "axios";
import "./playlist.css"
import {motion} from "framer-motion"
const Playlist = () => {
    const [playlist, setplaylist] = useState("");
    useEffect(() => {
        const api = () => {
            axios.get("https://api.spotify.com/v1/me/playlists", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then(response => {
                setplaylist(response.data);
                console.log(playlist);
            })
        }
        api();
    },[])



    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
           
         
            {
                playlist.items &&
                <div className="list">
                    
                    <div className="playlist_list">
                        {
                             playlist.items.map((play,index)=>{

                                return(
                                    <div key={index}>
                                      
                                        <div className="track_txt">
                                        <h3>{play.name}</h3>
                                        <p>{play.description}</p>
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
export default Playlist;