import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import axios from "axios";
import spotify_logo2 from "./home/home_1.png";
const Navbar = () => {
  const [profile, setProfile] = useState("");
  const [image, setimage] = useState("");
  useEffect(() => {
    const api = () => {
      axios
        .get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          setProfile(response.data);
          setimage(response.data.images[0]);
        });
    };
    api();
  }, []);

  return (
    <div className="home">
      <nav>
        <div className="nav_logo">
          <span className="home_logo">
            <img src={spotify_logo2} width="60px" alt="" />
            Wrapped
          </span>
          <NavLink className="profile_page" to="/Profile">
            {profile.display_name} <img src={image.url} alt="loading.." />
          </NavLink>
        </div>

        <ul className="nav_bar">
          <li>
            <NavLink to="/" className="nav_home">
              HOME
            </NavLink>
          </li>
          <div className="nav_type">
            <li>
              <NavLink className="types" to="/topTrack">
                Top Tracks
              </NavLink>{" "}
            </li>
            <li>
              <NavLink className="types" to="/topArtist">
                Top Artists
              </NavLink>{" "}
            </li>
            <li>
              <NavLink className="types" to="/Playlist">
                Playlist
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
