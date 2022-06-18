import axios from 'axios';
import { useEffect, useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import TableCatalogo from './TableCatalogo';
import Swal from 'sweetalert2';


function ListCatalogo() {

    /* 1. Definir url del API a la que me voy a conectar */
    const url = "http://localhost:5000/catalogo";

    /* 2. Generar función asincrona para conectarme al API */
    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    /* 3. UseState para guardar la respueta de la petición */
    const [list, setList] = useState([]);

    /* 5. Crear otro estado para refrescar el listado despuéss de eliminar */
    const [upList, setUplist] = useState([false]);


    /*Agregar una constante para actualizar el estado del modal*/
    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false); }
    const handleOpen = () => { setShow(true); }

    const [dataModal, setDataModal] = useState({});

    const handleChangeModal = ({ target }) => {
        setDataModal({ ...dataModal, [target.name]: target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.put(`${url}/${dataModal.id}`,dataModal);

        if (response.status === 200) {
            Swal.fire(
                'Cambio guardado!',
                `Tu producto: <strong>
                ${response.data.nombre}
                </strong>
                ha sido editado exitosamente!`,
                'success'
            )
            handleClose();
            setUplist(!upList);
        } else {
            Swal.fire(
                'Error!',
                `Hubo un problema al editar tu producto!`,
                'error'
            )
        }
    }

    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        });
    }, [upList]);

    console.log(list);
    return (
        <div className='cont-table'>
            <table className='table table-striped'>
                <thead className='title-table text-center border-table'>
                    <th className='p-3'>Tipo</th>
                    <th className='p-3'>Nombre</th>
                    <th className='p-3'>Foto</th>
                    <th className='p-3'>Foto ventana</th>
                    <th className='p-3'>Descripción</th>
                    <th className='p-3'>Cantidad</th>
                    <th className='p-3'>Precio</th>
                    <th className='p-3' colSpan="2">Acciones</th>
                </thead>
                <tbody className='text-table text-center'>
                    {
                        list.map((t, index) => (
                            <TableCatalogo
                                key={index}
                                catalogo={t}
                                setUplist={setUplist}
                                upList={upList}
                                handleClose={handleClose}
                                handleOpen={handleOpen}
                                setDataModal={setDataModal}
                            />
                        ))
                    }
                </tbody>
            </table>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className='title-modal-edit'>
                        Editar Producto
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='form-new-product' onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <Form.Group class="mb-3">
                                    <Form.Label>Tipo</Form.Label>
                                    <Form.Select className='form-select'
                                        name="tipo"
                                        onChange={handleChangeModal}>
                                        <option>{dataModal.tipo}</option>
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
                                        onChange={handleChangeModal}
                                        value={dataModal.nombre}
                                    />
                                </Form.Group>
                                <Form.Group class="mb-3">
                                    <Form.Label>Foto producto</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="foto"
                                        onChange={handleChangeModal}
                                        value={dataModal.foto}
                                    />
                                </Form.Group>
                            </div>

                            <div className='col-12 col-md-6'>
                                <Form.Group class="mb-3">
                                    <Form.Label>Foto ventana</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fotoModal"
                                        onChange={handleChangeModal}
                                        value={dataModal.fotoModal}
                                    />
                                </Form.Group>
                                <Form.Group class="mb-3">
                                    <Form.Label>Porciones o cantidad</Form.Label>
                                    <Form.Control
                                        type="texttarea"
                                        name="porciones"
                                        onChange={handleChangeModal}
                                        value={dataModal.porciones}
                                    />
                                </Form.Group>
                                <Form.Group class="mb-3">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="precios"
                                        onChange={handleChangeModal}
                                        value={dataModal.precio}
                                    />
                                </Form.Group>
                            </div>
                            <Form.Group class="mb-3">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control className='input-description'
                                    as="textarea"
                                    rows={2}
                                    name="descripcion"
                                    onChange={handleChangeModal}
                                    value={dataModal.descripcion}
                                />
                            </Form.Group>
                            <Modal.Footer className='d-flex justify-content-center'>
                                <button className='btn btn-form' type="submit">
                                    Guardar
                                </button>
                                <button className='btn btn-form btn-volver' onClick={handleClose}>
                                    Cerrar
                                </button>
                            </Modal.Footer>
                        </div>
                    </Form >
                </Modal.Body>
            </Modal>
        </div >
    );
}

export default ListCatalogo;