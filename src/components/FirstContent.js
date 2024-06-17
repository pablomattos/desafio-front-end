import React from "react";
import HeaderContent from "./HeaderContent";
import CarrousselContent from "./CarrousselContent";
import '../styles/firstcontent.css';

const FirstContent = () => {
    return(
        <div className="first-content">
            <HeaderContent/>
            <CarrousselContent></CarrousselContent>
        </div>
    )
}

export default FirstContent;