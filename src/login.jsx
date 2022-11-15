import React from "react";
import {useEffect,useState} from "react";
import Home from "./home";
import spotify_logo from "./login/login_1.png"
import banner1 from "./login/login_2.jpeg"
import Navbar from "./navBar";
import "./Login.css"

const Login = () => {
    const client_ID = "711a022098d84f0ab4a1d35724c8b163";
    const redirect_URL = "http://localhost:3000";
    const auth_URL = "https://accounts.spotify.com/authorize";
    const respnse_TYPE = "token";
    const Scope="user-top-read playlist-read-private";
    const [token,setToken]=useState("");
    useEffect(()=>{
        const hash= window.location.hash;
        let token=window.localStorage.getItem("token")
        if(!token && hash){
            token=hash.substring(1).split("&").find(elem=>elem.startsWith("access_token")).split("=")[1];
            window.location.hash="";
            window.localStorage.setItem("token", token)
            
        }
        setToken(token)
           
       
    },[])
    function handleClick(){
        window.location.href = `${auth_URL}?client_id=${client_ID}&redirect_uri=${redirect_URL}&response_type=${respnse_TYPE}&scope=${Scope}`;
         }
         const date = new Date().getFullYear();

return (
    
    <div>
        
       {!token ?(<div className="login_page"> <img className="login_img1" src={spotify_logo} alt="spotify logo" />
       <h1 className="login_txt">Your {date} Wrapped.</h1>
       <div className="container">
       <img className="login_img2" src={banner1} alt="Clinton kane" />
        <button className="login_btn" onClick={handleClick}>Launch App</button>
        </div>
        </div>
       ):(
        <div>
         <Navbar/>
         <Home/>   
        </div>

        )}
        
    </div>
)

}
export default Login;