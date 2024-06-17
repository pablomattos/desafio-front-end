import React from "react";
import SpotifyTitle from '../img/spotify.svg'
import '../styles/headercontentlogo.css'


const HeaderContentLogo = () =>{
    return(
        <div className="header-content-logo">
                <img src={SpotifyTitle} alt="Título da Spotify"/>                
            </div>
    )
}
            
export default HeaderContentLogo;