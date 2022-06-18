import './FormCatalogo.css';
import axios from "axios";
import { useState } from "react";
import Swal from 'sweetalert2';
import { Container, Form } from 'react-bootstrap';
import { Link, Navigate } from "react-router-dom";
import Logo from './../../assets/img/LogoDulceTrigo.svg';

function FormCatalogo() {

    /*Inicializando los inputs en el estado, para poder escribir los datos o los valores que el usuario
    digite en el form y manejarlos o controlarlos*/
    const [data, setData] = useState({ id: "", tipo: "", nombre: "", foto: "", fotoModal: "", descripcion: "", porciones: "", precio: "" });
    const handleChange = ({ target }) => {

        /*Cada vez que exista un cambio, se guarda el valor en el estado data*/
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    /*Peticiones asíncronas para conectar con la bd*/
    const url = "http://localhost:5000/catalogo";

    /*Crear una función para procesar el envio de datos al formulario*/
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(url, data);
        console.log(response);
        if (response.status === 201) {
            Swal.fire(
                'Guardado!',
                `Tu producto: <strong>
                ${response.data.nombre}
                </strong>
                ha sido guardado exitosamente!`,
                'success'
            )
            Navigate.push("/");
        } else {
            Swal.fire(
                'Error!',
                `Hubo un problema al registrar tu producto!`,
                'error'
            )
        }
    }

    return (
        <div className='cont-form'>

            <Container>
                <Link to="/login/dashboard" className="btn btn-form btn-volver">Volver</Link>
                <div className='cont-imgform'>
                    <img src={Logo} className='logo-form' />
                </div>
                <h1 className='title-form'>Datos del producto</h1>
                <Form className='form-new-product' onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <Form.Group class="mb-3">
                                <Form.Label>Tipo</Form.Label>
                                <Form.Select className='form-select'
                                    name="tipo"
                                    onChange={handleChange}>
                                    <option>Selecciona el tipo producto...</option>
                                    <option value="especial">Panes especiales</option>
                                    <option value="dietetico">Dietético</option>
                                    <option value="pasabocas">Pasabocas</option>
                                    <option value="torta">Torta</option>
                                    <option value="postre">Postre</option>
                                    <option value="galletas">Galletas</option>

                                </Form.Select>
                            </Form.Group>
                            <Form.Group class="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    onChange={handleChange}
                                    value={data.nombre}
                                />
                            </Form.Group>
                            <Form.Group class="mb-3">
                                <Form.Label>Foto producto</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="foto"
                                    onChange={handleChange}
                                    value={data.foto}
                                />
                            </Form.Group>
                        </div>

                        <div className='col-12 col-md-6'>
                            <Form.Group class="mb-3">
                                <Form.Label>Foto del producto para la ventana emergente</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="fotoModal"
                                    onChange={handleChange}
                                    value={data.fotoModal}
                                />
                            </Form.Group>
                            <Form.Group class="mb-3">
                                <Form.Label>Porciones o cantidad</Form.Label>
                                <Form.Control
                                    type="texttarea"
                                    name="porciones"
                                    onChange={handleChange}
                                    value={data.porciones}
                                />
                            </Form.Group>
                            <Form.Group class="mb-3">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="precios"
                                    onChange={handleChange}
                                    value={data.precio}
                                />
                            </Form.Group>
                        </div>
                        <Form.Group class="mb-3">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text"
                                name="descripcion"
                                onChange={handleChange}
                                value={data.descripcion}
                            />
                        </Form.Group>
                        <div className='btn-guardar'>
                            <button className='btn btn-form' type="submit">
                                Guardar
                            </button>
                        </div>
                    </div>
                </Form >
            </Container>
        </div>
    );
}
export default FormCatalogo;