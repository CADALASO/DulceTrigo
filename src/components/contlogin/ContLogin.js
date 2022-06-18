import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/LogoDulceTrigo.svg';
import '../contlogin/ContLogin.css';
import Swal from 'sweetalert2';

function ContLogin() {

    const [input, setInput] = useState({
        user: '',
        pass: ''
    });
    const validacionValue = e => {
        const { target } = e;
        const { name, value } = target;

        const newValue = {
            ...input, [name]: value,
        }

        setInput(newValue);
    }
    const validacionlogin = e => {
        e.preventDefault();
        const user = input.user;
        const pass = input.password;

        if (user == "AdminDulce" && pass == "DulceTrigo2022") {
            window.setTimeout(() => { window.location.href = '/login/dashboard' }, 800);
        } else if (input.user != "AdminDulce" || input.pass != "DulceTrigo2022") {
            Swal.fire({
                icon: 'error',
                html:
                    'Tu <strong>Usuario </strong> o <strong>Contraseña </strong> son incorrectos, '
            })
        }

    }


    return (
        <div className='cont-login'>
            <form className='form-login'>
                <img src={logo} className='img-login' />
                <label for='user'>Usuario</label>
                <input name='user' value={input.user} onChange={validacionValue} />
                <label for='password'>Contraseña</label>
                <input name='password' type="password" value={input.password} onChange={validacionValue} />
                <div className='btn-volver-login'>
                    <button className='btn-login' onClick={validacionlogin}>Ingresar</button>
                    <Link to='/' className='btn-login'>Volver</Link>
                </div>
            </form>
        </div>
    );
}

export default ContLogin;