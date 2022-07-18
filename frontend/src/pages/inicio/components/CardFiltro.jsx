import React from 'react'

const CardFiltro = (props) => {
  return (
    <div>
      <div className="container card mt-1" id="card-color">
        <div id="columnas" className="container">
          <div>
            <h5 className="mt-3" id="letra">
              Filtro:
            </h5>
          </div>
          <div>
            <h5 className="mt-3" id="letra">
              Calificación:
            </h5>
          </div>
          <div className="mt-3">
            <span className="fa fa-star" id="estrella1"></span>
            <span className="fa fa-star" id="estrella2"></span>
            <span className="fa fa-star" id="estrella3"></span>
            <span className="fa fa-star" id="estrella4"></span>
            <span className="fa fa-star" id="estrella5"></span>
          </div>
          <div>
            <h5 className="mt-3" id="letra">
              Comentarios:
            </h5>
          </div>
          <div className="row mt-2 mb-3">
            <div className="card mt-2">
              <div className="card-body scroll">
                <p className="card-text">
                  a With supporting text below as a natural lead-in to additional content.
                </p>
                <p className="card-text">
                  Aenean tincidunt turpis purus, non dictum neque dapibus vel. Etiam
                  consequat a metus vitae tincidunt. Nulla non sapien et ipsum tempus
                  eleifend. Proin pretium ex feugiat convallis maximus. Nam mollis, urna
                  sit amet ultricies elementum, ante orci pellentesque ligula, eget mattis
                  ipsum augue non ligula supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p className="card-text">
                  Aenean tincidunt turpis purus, non dictum neque dapibus vel. Etiam
                  consequat a metus vitae tincidunt. Nulla non sapien et ipsum tempus
                  eleifend. Proin pretium ex feugiat convallis maximus. Nam mollis, urna
                  sit amet ultricies elementum, ante orci pellentesque ligula, eget mattis
                  ipsum augue non ligula supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p className="card-text">
                  Aenean tincidunt turpis purus, non dictum neque dapibus vel. Etiam
                  consequat a metus vitae tincidunt. Nulla non sapien et ipsum tempus
                  eleifend. Proin pretium ex feugiat convallis maximus. Nam mollis, urna
                  sit amet ultricies elementum, ante orci pellentesque ligula, eget mattis
                  ipsum augue non ligula supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFiltro
