import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import WhatsApp from '../components/whatsApp/WhatsApp';

function Contacto(){
    return(
        <div>
        <Navbar/>
        <Header/>
        <WhatsApp/>
        <Footer/>
        </div>
    );
}
export default Contacto;