import React from 'react';
import '../../pages/Styles.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import WhatsApp from '../../components/whatsApp/WhatsApp';
import NavbarCatalogo from '../../components/navbarCatalago/NavbarCatalogo';
import { getFirst3PropNav } from '../../components/navbarCatalago/PropiedadesNav';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CatTortas from '../../components/catalogo/CatTortas';

function Tortas() {

    const propnav = getFirst3PropNav();

    const url = "http://localhost:5000/catalogo";

    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    const [List, setList] = useState([]);

    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        });
    });


    return (
        <div>
            <Navbar />
            <Header />
            <h2 className='title-page'>Tortas</h2>
            <div>
                {
                    propnav.map(pn => (
                        <NavbarCatalogo
                            p1={pn.id}
                            p2={pn.titulo}
                            p3={pn.icon}
                            p4={pn.direccion}
                        />
                    ))
                }

                {
                    List.map((t, index) => (
                        <CatTortas
                            key={index}
                            catalogo={t}
                        />
                    ))
                }

            </div>
            <WhatsApp />
            <Footer />
        </div>
    );
}
export default Tortas;