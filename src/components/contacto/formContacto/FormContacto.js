import React, { useState } from 'react';
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError, TextTarea } from '../../../elements/form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../../personalizados/formPersonalizados/Input';
import Line from "../../../assets/img/Line.png";
import '../contactos/Contacto.css';

const FormContacto = () => {
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [telefono, cambiarTelefono] = useState({ campo: '', valido: null });
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const [textTarea, cambiarTextTarea] = useState(null);


    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    }


    const onSubmit = (e) => {
        e.preventDefault();

        if (
            nombre.valido === 'true' &&
            correo.valido === 'true' &&
            telefono.valido === 'true'
        ) {
            cambiarFormularioValido(true);
            cambiarNombre({ campo: '', valido: null });
            cambiarCorreo({ campo: '', valido: null });
            cambiarTelefono({ campo: '', valido: null });

            // ... 
        } else {
            cambiarFormularioValido(false);
        }
    }


    return (
        <main>
            <article className="container-form">
                <i class="fa-solid fa-circle-question"></i>
                <h3>Danos tu opinión:</h3>
                <p className='text'>Ayudanos a mejorar para brindarte una mejor experiencia y productos de la más alta calidad</p>
                <Formulario action="" onSubmit={onSubmit}>

                    <Input
                        estado={nombre}
                        cambiarEstado={cambiarNombre}
                        placeholder="Nombre"
                        tipo="text"
                        name="usuario"
                        leyendaError="El nombre solo puede contener letras y espacios."
                        expresionRegular={expresiones.nombre}
                    />
                    <Input
                        estado={telefono}
                        cambiarEstado={cambiarTelefono}
                        tipo="text"
                        placeholder="Número de contacto"
                        name="telefono"
                        leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
                        expresionRegular={expresiones.telefono}
                    />
                    <Input
                        estado={correo}
                        cambiarEstado={cambiarCorreo}
                        tipo="email"
                        placeholder="Correo Electrónico"
                        name="correo"
                        leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
                        expresionRegular={expresiones.correo}
                    />
                    <TextTarea
                        name="textarea"
                        rows="5"
                        cols="50"
                        placeholder="Mensaje"
                        estado={textTarea}
                        cambiarEstado={cambiarTextTarea}></TextTarea>


                    {formularioValido === false && <MensajeError>
                        <p className='prueba'>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            <b>Error: </b> Por favor diligenciar el formulario correctamente</p>
                    </MensajeError>}
                    <ContenedorBotonCentrado>
                        <Boton type="submit">Enviar</Boton>
                        {formularioValido === true && <MensajeExito>Muchas gracias, tomaremos en cuenta su mensaje y daremos pronta solución.</MensajeExito>}
                    </ContenedorBotonCentrado>

                </Formulario>
                <img src={Line} alt="Line" class="line-horizontal" />
            </article>
        </main>

    );
}



export default FormContacto;