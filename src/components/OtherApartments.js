import React from "react";
import apartmentsLogo from "../assets/footer/apartments-logo.png";
import "../global.css";

const OtherApartments = () => {
    const handleButtonApartmentFirst = () => {
        window.open("https://apartamenty-krakow.crusoe.info/", "_blank");
    }
    const handleButtonApartmentSecond = () => {
        window.open("https://apartament-zakopane.crusoe.info/", "_blank");
    }

    return (
        <div className="other-apartments-container">
            <div className="other-apartments-first" onClick={handleButtonApartmentFirst}>
                <img className="other-aparments-logo-first" src={apartmentsLogo} alt="apartments-logo" />
                <span>Crusoe Kraków</span>
            </div>
            <div className="other-apartments-second" onClick={handleButtonApartmentSecond} >
                <img className="other-aparments-logo-second" src={apartmentsLogo} alt="apartments-logo" />
                <span>Crusoe Zakopane</span>
            </div>
        </div>);
}

export default OtherApartments;