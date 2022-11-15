import React, { useEffect, useState } from "react";
import axios from "axios";
import "./topartist_track.css"
import {motion} from "framer-motion"
const Toptrack = () => {
    const [Tracks, setTrack] = useState("");
    useEffect(() => {
        const api = () => {
            axios.get("https://api.spotify.com/v1/me/top/tracks", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then(response => {
                setTrack(response.data);
                console.log(Tracks);
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