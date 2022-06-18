import './Botonhome.css';
import Line from '../../assets/img/Line.png';
import { Link } from 'react-router-dom';

function Botonhome() {
    return (
        <div className='home'>
            <h2>¿De que te antojaste hoy?</h2>
            <div className='lineahome'>
            <img src={Line} alt="Line" class="line-horizontalh" />
            </div>
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
            <div className='lineahome'>
            <img src={Line} alt="Line" className='line-horizontalh'  />
            </div>
        </div>

    )
}

export default Botonhome;
