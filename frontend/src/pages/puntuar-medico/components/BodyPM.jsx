import NavigationTo from "../../../componets/NavigationTo"

const BodyPM = (props) => {
    return <>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha385-AYmEC3Yw5cVb3ZcuHt0A93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
        <div className="row cuerpo">
        <div className="col"></div>
        <div className="col-6">
            <div className="row">
                <div className="col"></div>
                <div className="col text-end" id="divImgMedico">
                    <img className="imgMedico" src={props.foto} alt="Foto medico"></img>
                </div>
                <div className="col-5">
                    <div className="fs-2 fw-bold">Nombre médico</div>
                    <div>
                        <span className="fs-4">Especialidad:</span>
                        &nbsp;
                        <span className="fs-5">#######</span>
                    </div>
                    <div className="fs-4">Calificar:</div>
                </div>
                <div className="col"></div>
            </div>
        </div>
        <div className="col"></div>
    </div>
    
    <div className="text-center mt-3">
        <span className="fa fa-star" id="estrella1"></span>
        <span className="fa fa-star" id="estrella2"></span>
        <span className="fa fa-star" id="estrella3"></span>
        <span className="fa fa-star" id="estrella4"></span>
        <span className="fa fa-star" id="estrella5"></span>
    </div>
    <div className="text-center mt-4">
        <textarea placeholder="Añadir comentario (opcional)" id="comentario" cols="50" rows="5"></textarea>
    </div>
    <div className="text-center mt-4">
        <form method="get" action="/BuscarMedico/BuscarMedico.html">
            <NavigationTo href="/buscar-medico">
                <button className="btn btn-outline-info">Aceptar</button>
            </NavigationTo>
        </form>
    </div>
    </>
}
export default BodyPM