import React from "react";
import banner2 from "./home/home_2.jpeg";
import "./Home.css";
import {motion} from "framer-motion"
import { Outlet } from "react-router-dom";
const Home=()=>{
    return(
        <motion.div className="home" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
      <div className="H_container">
        <span className="H_text1">Know Your Stats.</span> <span className="H_text2">VIBE</span>
      <img className="home_img1" src={banner2} alt="banner_img" />
      </div>
      <Outlet/>
          </motion.div>
    )
}
export default Home;