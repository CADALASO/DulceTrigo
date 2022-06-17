import './Catalogo.css';

function CatTortas({ catalogo }) {
    return (
        <div>
            <section id="container-tortas" class="tortas">
                <article>
                    <img src={catalogo.foto} />
                    <p>{catalogo.nombre}</p>
                </article>
            </section>
        </div>


    );
}

export default CatTortas;

/*export function getcatalogoTortas() {
    return catalogo.filter(item => item.tipo == "tortas");
}*/
