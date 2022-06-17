import React from 'react';
import '../navbarCatalago/NavbarCatalago.css';
import { Link } from 'react-router-dom';


function NavbarCatalogo(props) {
    return (
        <div class="btn-pasteleria">
            <button name='btntortas' className='border-btn'>
                <img src={props.p3} />
                <Link to='/tortas' className="itemcata">{props.p2}</Link>
            </button>
        </div>
    );
}

export default  NavbarCatalogo;