import './Carrito.css';
import palitroques from '../../assets/img/palitroques.svg';
import tortaArandanos from '../../assets/img/arandanos.svg';
import oreganoSandwich from '../../assets/img/sandwich-oregano.svg';
import tortaZanahoria from '../../assets/img/zanahoria.svg';

function Carrito (){
    
    return(
        <div>
            <h1 className='ttshop'>Carrito de compras</h1>
        <div>   
        <table id="shop-car" className='table'>
            <thead>
            <tr>
                <th>Producto</th>
                <th classNameName="item1">Nombre</th>
                <th>Precio base</th>
                <th className='item3' >Cantidad</th>
                <th >Total</th>
            </tr>
            </thead>
            <tr>
                <td data-label="PRODUCTO" className='td '><img src={palitroques} alt="palitroques" className='imgcompras'/></td>
                <td className="product " data-label="NOMBRE" >Paquete de palitroques sabor Coco x 10</td>
                <td data-label="PRECIO BASE" >$5.000</td>
                <td data-label="CANTIDAD" >3</td>
                <td data-label="TOTAL" >$15.000</td>
            </tr>
            <tr>
                <td data-label="PRODUCTO" className='td'><img src={tortaArandanos} alt="torta de arandanos" className='imgcompras'/></td>
                <td className="product" data-label="NOMBRE">Torta de Arándanos x 10 porciones cuadrada</td>
                <td data-label="PRECIO BASE" >$25.000</td>
                <td data-label="CANTIDAD" >1</td>
                <td data-label="TOTAL" >$25.000</td>
            </tr>
            <tr>
                <td data-label="PRODUCTO" className='td'><img src={oreganoSandwich} alt="Pan oregano sandwich" className='imgcompras'/></td>
                <td className="product" data-label="NOMBRE">Pan de Oregano para Sandwich x 30 cm</td>
                <td data-label="PRECIO BASE" >$1.200</td>
                <td data-label="CANTIDAD" >20</td>
                <td data-label="TOTAL" >$24.000</td>
            </tr>
            <tr>
                <td data-label="PRODUCTO" className='td'><img src={tortaZanahoria} alt="torta de zanahoria" className='imgcompras'/></td>
                <td className="product" data-label="NOMBRE">Torta de Zanahoria x 15 porciones redonda</td>
                <td data-label="PRECIO BASE" >$30.000</td>
                <td data-label="CANTIDAD">2</td>
                <td data-label="TOTAL" >$60.000</td>
            </tr>
            <tr className="final-items">
                <td colspan="5" >Costo de envio: $5.000</td>   
            </tr>
            <tr className="final-items">
                <td colspan="5" > Valor total: $245.000</td>
            </tr>
        </table>
        </div>
        <div className="pay">
        <a href='/'><button type="submit" className="buttons-shop">Atrás</button></a>
        <button type="submit" className="buttons-shop">Pagar</button>
        </div>
        </div>
    )
}

export default Carrito;