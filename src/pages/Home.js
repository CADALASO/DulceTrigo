import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Botonhome from '../components/home/Botonhome';

function Home() {
    return (
        <div>
        <Navbar/>
        <Header/>
        <Botonhome/>
        <Footer/>
        </div>
    );
}
export default Home;
