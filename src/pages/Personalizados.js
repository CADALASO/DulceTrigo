import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import WhatsApp from '../components/whatsApp/WhatsApp';
import Intro from "../components/personalizados/intro/Intro"
import {getAll} from "../components/personalizados/cardsPersonalizados/Productos";
import CardsPersonalizados from "../components/personalizados/cardsPersonalizados/CardsProductos"

function Personalizados() {
    const productos=getAll()

    return (
        <div>
        <Navbar/>
        <Header/>
        <Intro />
            <div className="row  row-cols-1 row-cols-lg-3 g-0">
            {
                productos.map(p=>(
                    <CardsPersonalizados 
                    p1={p.id}
                    p2={p.thumbnail}
                    p3={p.producto}
                    p4={p.descripcion}
                    p5={p.imgSlider1}
                    p6={p.imgSlider2}
                    p7={p.imgSlider3} 
                    p8={p.acercade}
                    />
                ))
            }
        </div>
        <WhatsApp/>
        <Footer/>
        </div>
    );
}
export default Personalizados;