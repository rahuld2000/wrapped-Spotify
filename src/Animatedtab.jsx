import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Login from './login';
import TopArtist from './topArtist';
import Toptrack from './topTrack';
import Playlist from './Playlist';
import Profile from './Profile';
import MainHeader from './MainHeader';
import { AnimatePresence } from "framer-motion"
function Animatedtab() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/" element={<MainHeader />}>
                    <Route path="/topArtist" element={<TopArtist />} />
                    <Route path="/topTrack" element={<Toptrack />} />
                    <Route path="/Playlist" element={<Playlist />} />
                </Route>
                <Route path="/Profile" element={<Profile />} />

            </Routes>
        </AnimatePresence>
    );
}

export default Animatedtab;