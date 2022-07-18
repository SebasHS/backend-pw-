import React from "react";
import {useState, useEffect} from "react";

const Articulo =() =>{

    const[projectData, setProjectData] = useState([]);
    const[data, setData] = useState([]);
    const [buscar, setBuscar] = useState("");

    const getResponse = async () => {
        console.log("getResponse");
        const response = await fetch(`https://grupo6-backend-pw.herokuapp.com/articulos`);
        const dato = await response.json();
        console.log(dato);
        setProjectData(dato);
        setData(dato);
    }

    useEffect(_ => {getResponse()}, []);

    const Noticia = (props) => {
    return(
        <div className="row">
            <div className="col-md-4 d-flex align-items-center">
                <img src={props.item.FOTO} alt="foto"  className="item-foto "/>
            </div> 
            <div className="col-md-8 mt-4 mb-4">
                <div className="fs-2 fw-bold">{props.item.TITULO_ART}</div>
                <div className="fs-3">{props.item.AUTOR_ART}</div>
                <div className="fs-4">{props.item.TEMA_ART}</div>
                <div className="fs-8">{props.item.MES} / {props.item.ANIO}</div>
                <p> {props.item.DESC}</p>
                <a href={props.item.URL}>Ver más</a>
            </div>
        </div>
    )};

    //mostrar data
    
    const filtroData = (event) => {
        setBuscar(event.target.value);
        if(buscar == ""){
            setData(projectData);
        }
        else{
            let filterData = projectData.filter((item) => 
            {
                if (buscar == ""){
                    return item;
                } else if (item.TEMA_ART.toLocaleLowerCase().includes(buscar.toLocaleLowerCase())){return(item)}
            });
            setData(filterData);
        }
    }


    return (
        <div>
            <div className="row ">
                <div className="col-md-12 ">
                    <div className="row color-item4 p-2">
                        <div className='col-auto  d-flex align-items-center fw-bold fs-5'>TEMA</div>
                        <div className="col-md">
                            <input type="text" className="form-control" id="area" placeholder='Buscar...' 
                            value = {buscar}
                            onChange= {filtroData} />
                        </div>
                    </div>
                </div>   
            </div>

            <div className="row mt-3">
                <p className="fs-1 fw-bold ">RECOMENDACIONES</p>
            </div>

            <div className="container">
                {(buscar == "") ? 
                    (projectData.map((item)=>(<Noticia item = {item}/>))) : 
                    (data.map((item)=>(<Noticia item = {item}/>)))
                }
            </div>
        </div>
        
    );
}


export default Articulo;