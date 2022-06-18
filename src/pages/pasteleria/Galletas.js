import React from 'react';
import '../../pages/Styles.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import WhatsApp from '../../components/whatsApp/WhatsApp';
import NavbarCatalogo from '../../components/navbarCatalago/NavbarCatalogo';
import { getFirst3PropNav } from '../../components/navbarCatalago/PropiedadesNav';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CatGalletas from '../../components/catalogo/CatGalletas';
import { Row, Modal } from 'react-bootstrap';


function Galletas() {

    const propnav = getFirst3PropNav();

    const url = "http://localhost:5000/catalogo?tipo_like=galletas";

    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    const [List, setList] = useState([]);

    const [dataModal, setDataModal] = useState({});

    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false); }
    const handleOpen = () => { setShow(true); }


    useEffect(() => {
        getData().then((response) => {
            setList(response.data);
        });
    });


    return (
        <div>
            <Navbar />
            <Header />
            <h2 className='title-page'>Galletas</h2>
            <div className='d-flex'>
                <div>
                    {
                        propnav.map(pn => (
                            <NavbarCatalogo
                                p1={pn.id}
                                p2={pn.titulo}
                                p3={pn.icon}
                                p4={pn.direccion}
                            />
                        ))
                    }
                </div>

                {
                    <Row>
                        {
                            List.map((t, index) => (
                                <CatGalletas
                                    key={index}
                                    catalogo={t}
                                    handleOpen={handleOpen}
                                    setDataModal={setDataModal}
                                />
                            ))
                        }
                    </Row>
                }
            </div >
            <Modal show={show} onHide={handleClose}>
                <div className='box-modal'>
                    <Modal.Header>
                        <Modal.Title className='title-modal-edit'>
                            {dataModal.nombre}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='row'>
                        <div className='cont-img-modal col-12 col-md-6'>
                            <img src={dataModal.fotoModal} className='img-modal-catalog'/>
                        </div>
                        <div className='cont-body-modal col-12 col-md-6'>
                            <p className='p-2'>{dataModal.descripcion}</p>
                            <p className='text-center'>{dataModal.porciones}</p>
                            <p className='text-center'>{dataModal.precio}</p>
                            <div class="btn-window-cakes">
                                <button type="submit">
                                    <i class="bi bi-plus-lg"></i>
                                </button>
                                <h3>1</h3>
                                <button type="submit">
                                    <i class="bi bi-dash-lg"></i>
                                </button>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center'>
                            <button className='btn btn-modal' type="submit">
                                Agregar al carrito
                            </button>
                            <button className='btn btn-modal' onClick={handleClose}>
                                Cerrar
                            </button>
                        </div>
                    </Modal.Body>
                </div>
            </Modal>
            <WhatsApp />
            <Footer />

        </div>
    );
}
export default Galletas;