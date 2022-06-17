import React from 'react';
import '../navbarCatalago/NavbarCatalago.css';
import { Link } from 'react-router-dom';


function NavbarCatalogo(props) {

    /*const propnav =()=>{
        if(props.p2 == "tortas"){
            <Link to='/tortas'></Link>
        }else if(props.p2 == "galletas"){
            <Link to='/galletas'></Link>
        }
    }*/

    return (
        <div class="btn-pasteleria">
            <button name='btntortas' className='border-btn'>
                <img src={props.p3} />
                <Link to={props.p4} className="itemcata">{props.p2}</Link>
            </button>
        </div>
    );
}

export default  NavbarCatalogo;