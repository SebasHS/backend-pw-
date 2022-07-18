import "./index.css"
import React from "react"
import NavigationTo from "../../componets/NavigationTo"
const Pagina_EP = () => {
    const [nombrePaciente, setNombrePaciente] = React.useState("")
    const [apellidosPaciente, setApellidosPaciente] = React.useState("")
    const [userNamePaciente, setUserNamePaciente] = React.useState("")
    const [emailPaciente, setEmailPaciente] = React.useState("")
    const [contraseniaPaciente, setContraseniaPaciente] = React.useState("")
    const [confircontraseniaPaciente, setConfirContraseniaPaciente] = React.useState("")
    const [celPaciente, setCelPaciente] = React.useState("")


    const onNombrePacienteChange = (evt) => {
        setNombrePaciente(evt.target.value)
    }
    const onApellidosPacienteChange = (evt) => {
        setApellidosPaciente(evt.target.value)
    }
    const onUserNamePacienteChange = (evt) => {
        setUserNamePaciente(evt.target.value)
    }
    const onEmailPacienteChange = (evt) => {
        setEmailPaciente(evt.target.value)
    }
    const onContraseniaChange = (evt) => {
        setContraseniaPaciente(evt.target.value)
    }
    const onConfirContraseniaChange = (evt) => {
        setConfirContraseniaPaciente(evt.target.value)
    }
    const onCelPacienteChange = (evt) => {
        setCelPaciente(evt.target.value)
    }


    const registrarPacienteOnClick = () => {
        const datosPaciente = {
            nombre : nombrePaciente,
            apellidos : apellidosPaciente,
            UserName : userNamePaciente,
            Email : emailPaciente,
            contrasenia : contraseniaPaciente,
            confircontrasenia : confircontraseniaPaciente,
            cel: celPaciente
        }
        console.log("Se ha guardado el edit del paciente", datosPaciente)
    }
       
    return (
        <div className="fondo2">
            <div className="mt-2">
                <div className="card mb-5">
                    <div className="card-header encabezadoPerfil">
                        <h4>
                            <div>
                                <NavigationTo href="/inicio-paciente">Principal</NavigationTo>
                                /
                                <NavigationTo href="#">EditarPerfil</NavigationTo>
                            </div>
                        </h4>
                        <h1 id="LetraHeader">EDITAR PERFIL</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-sm-6" >
                            <label className="form-label Labels">Nombres</label>
                            <input type={"text"} className="form-control cuadroLleno" value={nombrePaciente} onChange={onNombrePacienteChange} />
                        </div>
                        <div className="col-sm-6">
                            <label className="form-label Labels">Apellidos</label>
                            <input type={"text"} className="form-control cuadroLleno" value={apellidosPaciente} onChange={onApellidosPacienteChange} />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-6">
                            <label className="form-label Labels">Usuario</label>
                            <input type={"text"} className="form-control cuadroLleno" value={userNamePaciente} onChange={onUserNamePacienteChange} />
                        </div>
                        <div className="col-sm-6">
                            <label className="form-label Labels">Correo</label>
                            <input type={"text"} className="form-control cuadroLleno" value={emailPaciente} onChange={onEmailPacienteChange} />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-6">
                            <label className="form-label Labels">Nueva Contraseña</label>
                            <input type={"password"} className="form-control cuadroLleno" value={contraseniaPaciente} onChange={onContraseniaChange} />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-6">
                            <label className="form-label Labels">Confirmar Nueva Contraseña</label>
                            <input type={"password"} className=" cuadroLleno form-control" value={confircontraseniaPaciente} onChange={onConfirContraseniaChange} />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-6">
                            <label className="form-label Labels">Teléfono</label>
                            <input type={"text"} className="cuadroLleno form-control" value={celPaciente} onChange={onCelPacienteChange} />
                        </div>
                    </div>

                    <div className="Boton">
                        <button id="BotonGuardar" className="mt-5 btn btn--outline-secondary" onClick={registrarPacienteOnClick} type="button">
                            <NavigationTo id="LetraGuardar" href="/inicio-paciente">Guardar</NavigationTo>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Pagina_EP