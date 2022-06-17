import React from 'react';
import './CardsProductos.css';
import ModalProductos from "./ModalProductos";
import ModalPedido from "../modalPedido/ModalPedido";


function CardsProductos(props) {
    return (
        <div>
            <section>
                <div class="row g-0 center ">
                    <div class="col-md-12 text-center">
                        <img src={props.p2} class="imgCard" alt={props.p3} />
                    </div>
                    <div class="col-md-12">
                        <div class="card-body cardsPersonalizados ">
                            <h5 class="card-title">{props.p3}</h5>
                            <p class="card-text">{props.p4}</p>
                            <div>
                            <button type="button" className="btn btn-ver" data-bs-toggle="modal" data-bs-target={`#id${props.p1}`}>
                                Ver más
                            </button>
                            <ModalPedido />
                            </div>
                        </div>
                    </div>
                    <ModalProductos
                        pm1={`id${props.p1}`}
                        pm2={props.p2}
                        pm3={props.p3}
                        pm4={props.p4}
                        pm5={props.p5}
                        pm6={props.p6}
                        pm7={props.p7}
                        pm8={props.p8} />
                </div>
            </section>
        </div>
    );
}
export default CardsProductos;