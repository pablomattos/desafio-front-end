import React from "react";
import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/carrousselcontent.css';

const CarrousselContent = () => {
        return(
            <div className="carroussel-content">
                <Swiper 
                slidesPerView={1}
                navigation={{clickable:true}}
                pagination={{clickable:true}}
                modules={[Navigation, Pagination]}
                
                >
                    <SwiperSlide className="carroussel-content-slide-one">
                        <p>Música para todos</p>
                        <div className="buttons">
                            <a className="button-one" href="https://www.spotify.com/br-pt/free/" 
                            target='_blank' rel='noreferrer'>APROVEITE O SPOTIFY FREE
                            </a>
                            <a className="button-two" href="https://www.spotify.com/br-pt/premium/" 
                                target='_blank' rel='noreferrer'>OBTER O SPOTIFY PREMIUM
                            </a>
                        </div>
                    </SwiperSlide >
                    <SwiperSlide className="carroussel-content-slide-one">
                        <p>As melhores rádios</p>
                        <a className="button-two"
                         href="https://open.spotify.com/playlist/15HKxDvPW2wYkOFEisw3Up">
                            OUÇA AGORA
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        )
    }  
    
    export default CarrousselContent;


