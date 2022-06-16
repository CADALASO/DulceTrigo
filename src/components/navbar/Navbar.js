import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import lineanav from '../../assets/img/linea-nav.svg';

function Navbar() {
    return (
        <div>
            <nav>
                <input type={'checkbox'} id="chk-menu" />
                <label for="chk-menu" className="btn-menu">
                    <i className="fa-solid fa-bars"></i>
                </label>
                <div className="items">
                    <Link to="/home" className="item">Home</Link>
                    <hr className="line-nav" />
                    <Link to="/acercade" className="item">Acerca de</Link>
                    <hr className="line-nav" />
                    <Link to="/personalizados" className="item">Productos personalizados</Link>
                    <hr class="line-nav" />
                    <Link to="/contacto" className="item">Contacto</Link>
                </div>
            </nav>
            <img src={lineanav} alt="Linea" class="linea-nav2" />
        </div>
    );
}
export default Navbar;