import React from "react";
import '../styles/imagedescription.css'

const DescriptionContent = () =>{
    return(
        <div className="image-description-content">
            <div className="image-description">
                <div className="image-description-space">
                    <h1>O que o Spotify tem?</h1>
                    <h2>Músicas</h2>
                </div>
                <p>
                    O Spotify tem milhões de músicas. Escute seus sons favoritos,descubra
                    novas músicas e reúna seus favoritos em um só lugar.
                </p>
                <div className="image-description-space">
                    <h2>Playlists</h2>
                </div>
                 <p>No Spotify você encontra uma playlist para cada momento. 
                    Todas feitas por fanáticos e especialistas da música.
                </p>
                <div className="image-description-space">
                    <h2>Novos lançamentos</h2>
                </div>
                 <p>
                    Escute os novos lançamentos de singles e álbuns da semana e 
                    veja o que está bombando no Top 50
                </p>
            </div>
        </div>
    )
}

export default DescriptionContent;