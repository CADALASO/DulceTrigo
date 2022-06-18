import React from 'react';
import Carrito from '../components/carrito/Carrito';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import WhatsApp from '../components/whatsApp/WhatsApp';

function Compras() {
    return (
        <div>
        <Navbar/>
        <Header/>
        <Carrito/>
        <WhatsApp/>
        <Footer/>
        </div>
    );
}
export default Compras;