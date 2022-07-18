import React from "react"
import './index.css'
import NavigationTo from "../../componets/NavigationTo"


const Pagina_MP = () => {
    const [nombres, setNombrePaciente] = React.useState("")
    const [email, setEmailPaciente] = React.useState("")


    const onNombrePacienteChange = (evt) => {
        setNombrePaciente(evt.target.value)
    }
    const onEmailPacienteChange = (evt) => {
        setEmailPaciente(evt.target.value)
    }

    const registrarMetodoPagoOnClick = () => {
        const datosPaciente = {
            nombre: nombres,
            Email: email,
        }
        console.log("Se ha registrado correctamente datos de paciente", datosPaciente)
    }

    return (
        <div className="container2" id="fondo">
            <div>
                <div className="mt-5">
                    <h1>Elige método de Pago</h1>
                </div>
                <div className="mt-5">
                    <div className="item">
                        <div>
                            <label htmlFor="exampleFormControlInput1" className="form-label Labels">Nombres</label>
                            <input type={"text"} className="form-control cuadroLleno" value={nombres} onChange={onNombrePacienteChange} />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="exampleFormControlInput1" className="form-label Labels">Correo electronico</label>
                            <input type={"text"} className="form-control cuadroLleno" value={email} onChange={onEmailPacienteChange} />
                        </div>
                        <div id="Boton">
                            <button id="BotonTarjetaCredito" className="mt-5 btn btn--outline-secondary dropdown-toggle" type="button">
                                <NavigationTo href="/tarjeta-pago">Tarjeta de Crédito o Débito</NavigationTo>
                            </button>
                        </div>

                        <div className="form-check mt-5">
                            <input className="form-check-input" type="checkbox" id="box" />
                            <label className="form-check-label" htmlFor="box" id="checkbox1">
                                Deseo que los medicamentos se envíen a casa
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label" id="checkbox2">
                                Acepto los <u>Términos y Condiciones,</u> la <u>Polítca de Privacidad</u> y <u>Tratamiento necesario de datos</u>
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label" id="checkbox2">
                                He leído y acepto las finalidades de trataimiento adicionales
                            </label>
                        </div>

                        <div id="Boton">
                            <button id="BotonPagar" className="mt-5 btn btn--outline-secondary" type="button" onClick={registrarMetodoPagoOnClick}>
                                <NavigationTo href="/citas-paciente" id="pagar">Pagar</NavigationTo>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Pagina_MP