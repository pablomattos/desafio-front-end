import React from "react";
import HeaderContentLogo from "./HeaderContentLogo";
import '../styles/headercontent.css'

const HeaderContent = () => {
    return(
        <div className="header-content">
            <HeaderContentLogo/>
            <div className="header-content-itens">
                <a href="https://www.spotify.com/br-pt/premium/" target='_blank'
                rel='noreferrer'>Premium</a>
                <a href="https://support.spotify.com/br-pt/category/account-help/" target='_blank' rel='noreferrer'>Ajuda</a>
                <a href="https://www.spotify.com/br-pt/download/" target='_blank' rel='noreferrer'>Baixar</a>
                <a href="https://open.spotify.com/intl-pt">|</a>
                <a href="https://accounts.spotify.com/en/login" target='_blank' rel='noreferrer'>Entrar</a>
            </div>
        </div>
    )
}

export default HeaderContent;