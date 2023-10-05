import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./profile.css"
import axios from "axios";
import { motion } from "framer-motion"
const Profile = () => {

    const [profile, setProfile] = useState("");
    const [image, setimage] = useState("");
    const [follow,setFollow]= useState("");
    useEffect(() => {
        const api = () => {
            axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }).then(response => {
                setProfile(response.data);
                setimage(response.data.images[0])
                setFollow(response.data.followers)
                console.log(follow);
            })
        }
        api();

    }, [])
    function handleLogout() {
        window.localStorage.removeItem("token");
        window.location.href = "/"
    }
    return (

        <motion.div className="profile"
       animate={{y:0}}
       initial={{y:"100%"}}
       transition={{duration:0.5,
    type:"spring"}}
       
        >
            <h1><Link className="profile_home" to="/">Home</Link></h1>
            <div className="profile_main">
                <div className="profile_cont1">
                    <img className="profile_img" src={image.url} alt="error" />
                </div>
                <div className="profile_cont2">
                 <p>Name: {profile.display_name}</p> 
                    <p>Followers: {follow.total}</p>
                    <p>ID: {profile.id}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>

        </motion.div>
    )
}
export default Profile;