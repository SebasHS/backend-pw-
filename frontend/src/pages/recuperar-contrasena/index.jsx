import React from 'react'
import NavigationTo from '../../componets/NavigationTo'
import './index.css'
import emailjs from "emailjs-com"


const Pagina_RC = () => {

    const sendEmail = (e) => {
        var templateParams = {
            name: 'James',
            notes: 'Check this out!'
        };

        e.preventDefault();

    emailjs.send('service_xu2kl34', 'template_hm83src', templateParams, 'SlkUzT-CfqIXLvQFh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };

    const [correo, setCorreo] = React.useState("")

    const onCorreoChange = (evt) => {
        setCorreo(evt.target.value)
    }
    const corroborarCorreo = () => {
        const datosAcorroborar = {
            correo: correo,
        }
        console.log("guardado datos", datosAcorroborar)
    }

    return (
        <div >
            <div className="card fondo">
                <div className="card-header fondocabecera">
                    <h1 className="perfil_login">EMPRESA XYZ</h1>
                </div>
            </div>

            <div className="row">
                <div className="col mx-4">
                    <div className="container mt-10 mb-3 aislarcontenido borde color_letra">
                        <div className="row ">
                            <div className="col-10">
                                <h1 className="border-bottom border-info border-2 md">
                                    Recuperar contraseña
                                </h1>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-10 pt-3">
                                <p className="fs-5">
                                    Si ha olvidado su contraseña, introduzca el correo electronico con el que se registró para que pueda recuperar su contraseña
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-10 pt-3">
                                <div className="input-group mb-3">

                                    <input type="email" className="form-control" value={correo} placeholder="Correo electronico" onChange={onCorreoChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-end pt-3 pb-2 ">
                            <div className="d-grid gap-2 col-md-2 mb-2">
                                <NavigationTo href="/login"> <div className="btn btna btn-success me-md-2 fs-5" onClick={sendEmail} role="button">Recuperar</div></NavigationTo>
                            </div>
                            <div className="d-grid gap-2 col-md-2 mb-2 ms-3">
                                <NavigationTo href="/login"> <div className="btn btna btn-danger me-md-2 fs-5" role="button">Cancelar</div></NavigationTo>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pagina_RC