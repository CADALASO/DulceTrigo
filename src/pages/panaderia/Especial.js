import React from 'react';
import '../../pages/Styles.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import WhatsApp from '../../components/whatsApp/WhatsApp';
import NavbarCatalogo from '../../components/navbarCatalago/NavbarCatalogo';
import { getLast3PropNav } from '../../components/navbarCatalago/PropiedadesNav';

function Especial() {
   const propnav = getLast3PropNav();

    return (
        <div>
        <Navbar/>
        <Header/>
        <h2 className='title-page'>Especiales</h2>
            <div>
                {
                    propnav.map(pn => (
                        <NavbarCatalogo
                            p1={pn.icd}
                            p2={pn.titulo}
                            p3={pn.icon}
                        />
                    ))
                }
            </div>
        <WhatsApp/>
        <Footer/>
        </div>
    );
}
export default Especial;