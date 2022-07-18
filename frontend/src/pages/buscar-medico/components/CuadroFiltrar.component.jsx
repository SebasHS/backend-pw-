const CuadroFiltrar = (props) => {

    const ArmarListaEspecialidades = () => {
        const ListaEspecialidades = []
        props.especialidades.forEach((especialidad,index) => {
            ListaEspecialidades.push(
                <div className="form-check ms-5" key={`${index}`}>
                    <input className="form-check-input" type="checkbox"></input>
                    <label htmlFor="check2" className="form-check-label">
                        {`${especialidad}`}
                    </label>
                </div>
            )
        })
        return ListaEspecialidades
    }
    return <>
        <div className="col-lg mt-5">
            <div id="rectanguloEspecialidad" className="rectangulosCuerpo fs-4">
                <div className="m-2">Filtrar por:</div>
                <div className="fw-bold ms-2">Especialidad:</div>
                <div className="mt">
                    <div className="form-check ms-5">
                        <input className="form-check-input" type="checkbox" id="check1" defaultChecked></input>
                        <label htmlFor="check1" className="form-check-label">
                            Todos
                        </label>
                    </div>
                    {ArmarListaEspecialidades()}
                </div>
                <div className="fw-bold ms-2">Tipo de atencion:</div>
                <div className="mt">
                    <div className="form-check ms-5">
                        <input className="form-check-input" type="checkbox" id="check1" defaultChecked></input>
                        <label htmlFor="check1" className="form-check-label">
                            Todos
                        </label>
                    </div>
                    <div className="form-check ms-5">
                        <input className="form-check-input" type="checkbox" id="check2"></input>
                        <label htmlFor="check2" className="form-check-label">
                            Presencial
                        </label>
                    </div>
                    <div className="form-check ms-5">
                        <input className="form-check-input" type="checkbox" id="check2"></input>
                        <label htmlFor="check2" className="form-check-label">
                            Virtual
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CuadroFiltrar