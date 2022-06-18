import './Botonhome.css';
import hr from '../../assets/img/linea-nav.svg';
import { Link } from 'react-router-dom';

function Botonhome() {
    return (
        <div className='home'>
            <h2>¿De que te antojaste hoy?</h2>
            <img src={hr} alt="linea" className='hr'/>
            <div className='buttons'>
                <button className='boton1 cake'>
                    <Link to="/pasteleria/tortas">
                        <div>
                            <span>
                                <h1 className='thome'>Pasteleria</h1>
                                <hr/>
                            </span>
                        </div>
                    </Link>
                </button>
                <button className='boton2 bakery'>
                    <Link to="/panaderia/especial">
                        <div>
                            <span>
                                <h1 className='thome'>Panaderia</h1>
                                <hr/>
                            </span>
                        </div>
                    </Link>
                </button>   
            </div>
            <img src={hr} alt="linea" className='hrdown'/>
        </div>

    )
}

export default Botonhome;
