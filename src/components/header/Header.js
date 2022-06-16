import React from 'react';
import './Header.css'
import logo from '../../assets/img/LogoDulceTrigo.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header id="header-container">
            <Link to="/home"> <img src={logo} alt="Logo dulce trigo" /></Link>
            <div class="button-header">
                <h3 class="header-title">“Traemos el dulce sabor que le hace falta a tu vida”</h3>
                <div class="buttons-container">
                    <input type="search" id="search" className='icon-search' name="search" placeholder=" " />
                    <Link to="/compras">
                        <button type="submit">
                            <i class="fa-solid fa-cart-shopping shop"></i>
                        </button>
                    </Link>
                    <Link to="/login">
                        <button type="submit">
                            <i class="fa-solid fa-user user"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
export default Header;