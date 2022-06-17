import React from 'react';
import './Contacto.css';


function Contacto() {
    return (
<article className="container-contact">
            <div className="maps">
                <i className="fa-solid fa-location-dot"></i>
                <h3>Visítanos</h3>
                <p> <span>Dirección:</span> Calle P Sherman W 42 sidney</p>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3526934184993!2d-74.12613568573688!3d4.708651842900885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f84aaa74ef7ef%3A0xe9e63c725e04fc!2sCra.%20107b%20Bis%20%2371-46%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1649986854258!5m2!1ses!2sco"
                allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"/>
            <div className="container-cards">
                <div className="card">
                    <p><span>Teléfono:</span></p><p>3000000000</p>
                </div>
                <div className="card">
                    <p> <span>E-mail:</span></p><p>info@dulcetrigo.com</p>
                </div>
            </div>
        </article>
    );
}
export default Contacto;