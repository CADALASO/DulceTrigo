import React from 'react';
import './Acercade.css';
import Collage from '../../assets/img/Collage-Acercade.png';
import Line from '../../assets/img/Line.png'
function Acercade() {
    return (
        <section className="acercade-container">
        <h2 className='title'>Acerca de...</h2>
        <div className="container-collage">
            <p>Somos una empresa enfocada en realizar productos de panadería y pastelería, donde queremos dar a nuestros
                clientes productos no solo de excelente calidad sino también novedosos; combinaciones diferentes que le
                agraden a nuestros clientes siendo parte de su día a día.</p>
                <img src={Collage} alt="Collage"  className="collage" />
        </div>
        <img src={Line} alt="line" className="line" />
    </section>
    );
}
export default Acercade;