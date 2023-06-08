
import React from 'react';
import Layout from "../components/Layout";
import WeProvide from '../components/WeProvideTxt';
import '../global.css';
import './HomePage.scss'
import BootstrapSlider from '../components/BootstrapSlider';
import SloganCrusoe from '../components/SloganCrusoe';
import Highlights from '../components/Highlights';
import Awards from '../components/Awards';
import RoomAdminWidget from '../components/RoomAdminWidget';
import Together from '../components/Together';
import BootstrapReviewCarusel from '../components/BootstrapReviewCarusel';
import HeaderTxt  from "../components/HeaderTxt";
import InvitationTxt from "../components/InvitationTxt";


const HomePage = () => {
    return (
        <Layout>
            <div className="content-container">
                <RoomAdminWidget/>
                <SloganCrusoe/>
                <div className='content-container_up'>
                    <div className="header-container">
                        <HeaderTxt />
                    </div>
                    <div className="apartment-card-block">
                        <div className="apartment-card-block-left-side">
                            <InvitationTxt />
                            <WeProvide />
                        </div>
                        <div className="apartment-card-block-right-side">
                            <BootstrapSlider />
                        </div>
                    </div>
                </div>
                <div className='content-container_mid'>
                    <Highlights/>
                </div>
                <div className='content-container_lower'>
                    <Awards/>
                    <Together/>
                </div>
                <div className='content-container_bottom'>
                    <BootstrapReviewCarusel/>
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;