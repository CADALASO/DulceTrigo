import Swal from 'sweetalert2';
import axios from 'axios';

function TableCatalogo({ catalogo, setUplist, upList, setDataModal, handleOpen }) {

    /* 1. Definir url del API a la que me voy a conectar */
    const url = "http://localhost:5000/catalogo";

    /* 2. Función asincrona para borr<r a partir del listener del botón eliminar */
    const handleDelete = async () => {
        Swal.fire({
            title: '¿Está seguro que desea eliminar este producto?',
            text: "¡No puede revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrarlo!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                /* Eliminando el registro de la base de datos falsa */
                axios.delete(`${url}/${catalogo.id}`).then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        Swal.fire(
                            'Eliminado',
                            'El producto ha sido eliminado :(',
                            'success'
                        )
                        setUplist(!upList);
                    }
                    else {
                        Swal.fire(
                            'Error',
                            'Este producto no pudo ser eliminado',
                            'error'
                        )
                    }
                })

            }
        })
    }

    const handleEdit = () => {
        handleOpen();
        setDataModal(catalogo);
    }

    return (
        <tr>
            <td>{catalogo.tipo}</td>
            <td>{catalogo.nombre}</td>
            <td><img src={catalogo.foto} alt="Imagen dulce trigo" /></td>
            <td><img src={catalogo.fotoModal} alt="Imagen dulce trigo" /></td>
            <td>{catalogo.descripcion}</td>
            <td>{catalogo.porciones}</td>
            <td>{catalogo.precio}</td>
            <td><button className="btn btn-golden m-2" onClick={handleEdit}><i class="bi bi-pencil-square"></i></button>
                <button className="btn btn-wine" onClick={handleDelete}><i class="bi bi-trash3-fill"></i></button>
            </td>
        </tr>
    );
}

export default TableCatalogo;