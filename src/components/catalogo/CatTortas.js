import './Catalogo.css';
import { Card } from 'react-bootstrap';

function CatTortas({ catalogo, handleOpen, setDataModal }) {
    const handleOpenModal = () => {
        handleOpen();
        setDataModal(catalogo);
    }

    return (
        <div className="col-6 col-md-4">
            <Card className='card' style={{ width: '11rem', background: 'transparent', border: 'none' }}>
                <Card.Img variant="top" src={catalogo.foto} width="200px" height="200px" 
                onClick={handleOpenModal}/>
                <Card.Body className='text-modal'>
                    <h4 classnName="text-center">{catalogo.nombre}</h4>
                </Card.Body>
            </Card>

        </div>

    );
}

export default CatTortas;

