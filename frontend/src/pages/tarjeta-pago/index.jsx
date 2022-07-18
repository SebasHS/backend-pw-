import React from 'react'
import './index.css'
import amex from "../../assets/amex.png"
import diner from "../../assets/diner.png"
import mastercard from "../../assets/masterca.png"
import visa from "../../assets/visa.png"
import NavigationTo from '../../componets/NavigationTo'
//import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Pagina_TP = () => {
        const [numeroTarjeta, setNumeroTarjeta] = React.useState("")
        const [calendarioTarjeta, setCalendarioTarjeta] = React.useState("")
        const [cvvTarjeta, setCvvTarjeta] = React.useState("")
        const [nombreTarjeta, setNombreTarjeta] = React.useState("")
        const [tipoDocTarjeta, setTipoDocTarjeta] = React.useState("")
        const [numDocTarjeta, setNumDocTarjeta] = React.useState("")
    
    
        const onNumeroTarjetaChange = (evt) => {
            setNumeroTarjeta(evt.target.value)
        }
        const onCalendarioTarjetaChange = (evt) => {
            setCalendarioTarjeta(evt.target.value)
        }
        const onCvvTarjetaChange = (evt) => {
            setCvvTarjeta(evt.target.value)
        }
        const onNombreTarjetaChange = (evt) => {
            setNombreTarjeta(evt.target.value)
        }
        const onTipoDocTarjetaChange = (evt) => {
            setTipoDocTarjeta(evt.target.value)
        }
        const onNumDocTarjetaChange = (evt) => {
            setNumDocTarjeta(evt.target.value)
        }
    
        const registrarTarjetaClick = () => {
            const datosPaciente = {
                numTarjeta: numeroTarjeta,
                calendario: calendarioTarjeta,
                cvv: cvvTarjeta,
                nombre: nombreTarjeta,
                tipoDoc: tipoDocTarjeta,
                numDocumento: numDocTarjeta,
            }
            console.log("Se ha guardado datos de tarjeta", datosPaciente)
        }
    return(
        <div className="container2" id="fondo">
        <div>
        <div className="mt-5">
                <div className="item">
                    <div>
                        <table>
                        <tbody>
                            <tr className="trvirus">
                                <td className="tdvirus"><img className="imgvirus" src={visa}/></td>
                                <td className="tdvirus"><img className="imgvirus" src={amex}/></td>
                                <td className="tdvirus"><img className="imgvirus" src={mastercard}/></td>
                                <td className="tdvirus"><img className="imgvirus" src={diner}/></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>

                    <div className="mt-5">
                        <input type="text" className="form-control cuadroLleno" placeholder="Numero de Tarjeta" value={numeroTarjeta} onChange={ onNumeroTarjetaChange}/>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-7">
                            <input type="month" className="form-control" id="calendario" name="" min="2010-01" max="2035-12" value={calendarioTarjeta} onChange={onCalendarioTarjetaChange}/>
                        </div>
                        <div className="col-sm-5">
                            <input type="number" className="form-control cuadroLleno" max="9999" min="100" placeholder="CVV" value={cvvTarjeta} onChange={ onCvvTarjetaChange}/>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="form-label Labels">Nombre titular de la tarjeta</label>
                        <input type="text" className="form-control cuadroLleno" value={nombreTarjeta} onChange={ onNombreTarjetaChange}/>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-4">

                            <label className="form-label" id="Ocultar">a</label>
                            <select className="form-select cuadroLleno" aria-label="Default select example" value={tipoDocTarjeta} onChange={onTipoDocTarjetaChange}>
                                <option value="0">DNI</option>
                                <option value="1">C.E</option>
                            </select>

                        </div>
                        <div className="col-sm-8">
                            <label className="form-label Labels">N Documento</label>
                            <input type="text" className="form-control cuadroLleno" value={numDocTarjeta} onChange={ onNumDocTarjetaChange}></input>
                        </div>
                    </div>


                    <div id="Boton">
                        <button id="BotonAceptar" className="mt-5 btn btn--outline-secondary" type="button" onClick={registrarTarjetaClick}>
                            <NavigationTo href="/metodo-pago" id="LetraBoton">Aceptar</NavigationTo>
                        </button>
                    </div>


                </div>
            </div>
        </div>
        </div>
    )
}

export default Pagina_TP