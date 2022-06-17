import { Link } from "react-router-dom";
import './Styles.css';
import ListCatalogo from "../components/catalogo/ListCatalogo";
import Logo from './../assets/img/LogoDulceTrigo.svg';


function Dashboard() {
    return (
        <div>
            <div className="cont-dash">
                <img src={Logo} className='logo-form' />
                <Link to="/login/form" className="btn btn-registrar">Registrar nuevo producto</Link>
            </div>
            <h1 className="title-dashboard text-center">Nuevos productos Dulce trigo</h1>
            <ListCatalogo />
        </div>
    )
}
export default Dashboard;