import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import WhatsApp from '../components/whatsApp/WhatsApp';
import Acercade from "../components/acercade/acercade";
import Tips from "../components/acercade/tips/Tips"


function acercade() {
    return (
        <div>
            <Navbar />
            <Header />
            <Acercade/>
            <Tips />
            <WhatsApp />
            <Footer />
        </div>
    );
}
export default acercade;