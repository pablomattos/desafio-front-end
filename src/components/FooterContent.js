import React from "react";
import '../styles/footercontent.css'
import HeaderContentLogo from '../components/HeaderContentLogo'

const FooterContent = () => {
    return(
        <div className="footer-content">
            <HeaderContentLogo/>
            <div className="footer-content-one">
                <h1>COMPANY</h1>
                <a href="https://support.spotify.com/br-pt/article/what-is-spotify/" target="_blank" rel="noreferrer">Sobre</a>
                <a href="https://www.linkedin.com/company/spotify/jobs/?originalSubdomain=br" target="_blank" rel="noreferrer">Empregos</a>
                <a href="https://ads.spotify.com/pt-BR/contato/" target="_blank" rel="noreferrer">Imprensa</a>
                <a href="https://www.tecmundo.com.br/spotify/novidades" target="_blank" rel="noreferrer">Novidades</a>
            </div>
            <div className="footer-content-one">
                <h1>COMUNIDADES</h1>
                <a href="https://artists.spotify.com/home" target="_blank" rel="noreferrer">Artistas</a>
                <a href="https://developer.spotify.com/" target="_blank" rel="noreferrer">Desenvolvedores</a>
                <a href="https://ads.spotify.com/pt-BR/noticias-insights-deprecated/quem-faz-streaming-adora-as-marcas-agora-e-oficial/" target="_blank" rel="noreferrer">Marcas</a>
            </div>
            <div className="footer-content-one">
                <h1>LINKS ÚTEIS</h1>
                <a href="https://support.spotify.com/br-pt/" target="_blank" rel="noreferrer">Ajuda</a>
                <a href="https://support.spotify.com/br-pt/article/gift-cards/" target="_blank" rel="noreferrer">Presentes</a>
                <a href="https://open.spotify.com/intl-pt?nd=1" target="_blank" rel="noreferrer">Player na web</a>
            </div>
            
        </div>
    )
}

export default FooterContent;