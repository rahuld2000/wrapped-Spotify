import React from "react";
import Navbar from "./navBar";
import "./Home.css";
import {motion} from "framer-motion"
import { Outlet } from "react-router-dom";
const Home=()=>{
    return(
        <motion.div className="home">
      <Navbar />
      <Outlet/>
          </motion.div>
    )
}
export default Home;