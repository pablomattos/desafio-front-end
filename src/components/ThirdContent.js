import React from "react";
import ImageOne from '../img/image-iphone-one.png'
import ImageTwo from '../img/image-iphone-two.png'
import '../styles/thirdcontent.css'


const ThirdContent = () => {
    return(
        <div className="third-content">
            <div className="third-content-one">
                <h1>Fácil</h1>
                <h2>Buscar</h2>
                <p> 
                    Já sabe o que quer escutar?<br/>
                    É só procurar e apertar o play.
                </p>
                <h2>Navegar</h2>
                <p>
                    Veja os novos lançamentos, o que está <br/>
                    bombando nas paradas e as melhores <br/>
                    playlists para o seu momento.
                </p>
                <h2>Descobrir</h2>
                <p> 
                    Curta músicas novas toda segunda-feira<br/> 
                    com uma playlist personalizada pra<br/> 
                    você. Ou relaxe e curta uma das rádios
                </p>
            </div>
            <div className="third-content-two">
                <div className="image-one">
                    <img src={ImageOne} alt="Imagem de um iphone"/>
                </div>
                <div className="image-two">
                    <img src={ImageTwo} alt="Imagem de um iphone"/>
                </div>
            </div>
        </div>
    )
}

export default ThirdContent;