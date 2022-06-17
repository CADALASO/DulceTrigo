import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import WhatsApp from '../components/whatsApp/WhatsApp';
import Banner from "../components/contacto/banner/Banner";
import FormContacto from "../components/contacto/formContacto/FormContacto";
import Contactos from "../components/contacto/contactos/contacto";
import LineVertical from "../assets/img/Line-vertical.png"

function contacto(){
    return(
        <div>
        <Navbar/>
        <Header/>
        <Banner/>
            <div className="section">
            <FormContacto/>
            <img src={LineVertical} alt="line vertical" class="line-vertical"/>
            <Contactos/>
            </div>
        <WhatsApp/>
        <Footer/>
        </div>
    );
}
export default contacto;