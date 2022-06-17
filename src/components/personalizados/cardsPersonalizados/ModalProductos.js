
function ModalProductos(props) {
  return (
    <div className="modal fade" id={props.pm1} tabindex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header color">
            <h5 className="modal-title modaltitle" id="exampleModalLabel">{props.pm3}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div id="carouselExampleInterval" class="carousel slide color-body" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={props.pm5} class="d-block w-img" alt={props.pm3}/>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={props.pm6} class="d-block w-img" alt={props.pm3}/>
              </div>
              <div class="carousel-item">
                <img src={props.pm7} class="d-block w-img" alt={props.pm3}/>
              </div>
            </div>
            <button class="carousel-control-prev color-btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next color-btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden ">Next</span>
            </button>
          </div>
          <div className="modal-footer color footerModal">
              <button type="button" className="btn-order" data-bs-toggle="modal" data-bs-target="#exampleModal">
                !Haz tu pedido aqui!
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalProductos;