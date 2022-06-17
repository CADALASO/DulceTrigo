import './Catalogo.css';
import { Card } from 'react-bootstrap';

function CatTortas({ catalogo }) {
    return (
        <div className="col-4">
        <Card className='card' style={{ width: '18rem', background: 'rgba(250, 235, 215, 0.6)' }}>
            <Card.Img variant="top" src={catalogo.foto} width="200px" height="300px" />
            <Card.Body>
                <Card.Title className='text-center'>{catalogo.nombre}</Card.Title>
            </Card.Body>
        </Card>
    </div>
    );
}

export default CatTortas;

/*export function getcatalogoTortas() {
    return catalogo.filter(item => item.tipo == "tortas");
}*/
