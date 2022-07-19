import './index.css'
import React from 'react'
import paciente from '../../assets/1430453.png'
import Articulo_INP from "./Articulo_INP"
import OpcionesEspecialidad_INP from './OpcionesEspecialidad_INP'
import NavigationTo from '../../componets/NavigationTo'
import useAthentication from '../../hooks/useAutentication'


const InicioPaciente = () => {

    const {deslogear} = useAthentication()

    const [especialidadSeleccionada, setEspecialidadSeleccionada] = React.useState("0")

    const data2 = [
        {
            id:"1",
            especialidad: "Especialidad 1"
        },
        {
            id:"2",
            especialidad: "Especialidad 2"
        },
        {
            id:"3",
            especialidad: "Especialidad 3"
        },
        {
            id:"4",
            especialidad: "Especialidad 4"
        },
        {
            id:"5",
            especialidad: "Especialidad 5"
        },
    ]

    const opciones_INP = data2.map(item => {return(
        <OpcionesEspecialidad_INP 
            key = {item.id}
            item = {item}
        />
    )})

    const onEspecialidadSeleccionadaChange = (evt) =>{
        setEspecialidadSeleccionada(evt.target.value)
    }

    const data = [
        {
            id:"1",
            src_image: "https://w0.peakpx.com/wallpaper/526/255/HD-wallpaper-fabulous-nature-landscape-forest-clouds-lake-mountains.jpg",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.",
            id_Especialidad:"5"
            
        },
        {
            id:"2",
            src_image: "https://w0.peakpx.com/wallpaper/776/850/HD-wallpaper-wonderful-castle-in-mountain-lake-landscape-forest-mountains-clouds-castle-lake.jpg    ",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.",
            id_Especialidad:"2"
        },
        {
            id:"3",
            src_image: "https://w0.peakpx.com/wallpaper/825/223/HD-wallpaper-wonderful-nature-landscape-forest-rocks-mountains-clouds-lake.jpg",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.",
            id_Especialidad:"3"
        },
        {
            id:"4",
            src_image: "https://w0.peakpx.com/wallpaper/126/126/HD-wallpaper-fantastic-nature-landscape-r-forest-sun-grass-mountains-r-clouds-lake-valley.jpg",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.",
            id_Especialidad:"4"
        },
        {
            id:"5",
            src_image: "https://w0.peakpx.com/wallpaper/531/651/HD-wallpaper-wonderful-lake-landscape-forest-rocks-mountains-clouds-lake.jpg",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.",
            id_Especialidad:"1"
        },
        {
            id:"6",
            src_image: "https://w0.peakpx.com/wallpaper/776/850/HD-wallpaper-wonderful-castle-in-mountain-lake-landscape-forest-mountains-clouds-castle-lake.jpg    ",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus.",
            id_Especialidad:"5"
        },{
            id:"7",
            src_image: "https://w0.peakpx.com/wallpaper/126/126/HD-wallpaper-fantastic-nature-landscape-r-forest-sun-grass-mountains-r-clouds-lake-valley.jpg",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam cursus nulla quis faucibus2.",
            id_Especialidad:"3"
        }
    ]

    const articulos = data.map(item => {return(
        <Articulo_INP 
            key = {item.id}
            item = {item}
        />
    )})

    return(
        <main>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light fondocabecera" id="nav-color">
                    <div class="container-fluid">
                        <div>  
                            <label class="form-label perfil h5">
                                EMPRESA XYZ |
                            </label>    
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle fs-5 color_letra" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Preguntas</a>
                                    <ul class="dropdown-menu">
                                    <li><NavigationTo class="dropdown-item fs-5 color_letra" href="/buzon">Buzon privado</NavigationTo></li>
                                    <li><div class="dropdown-divider"/></li>
                                    <li><NavigationTo class="dropdown-item fs-5 color_letra" href="/bandejas">Bandeja publica</NavigationTo></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle fs-5 color_letra" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Citas</a>
                                    <ul class="dropdown-menu">
                                        <li><NavigationTo class="dropdown-item fs-5 color_letra" href="/citas-paciente">Mis citas</NavigationTo></li>
                                        <li><div class="dropdown-divider"/></li>
                                        <li><NavigationTo class="dropdown-item fs-5 color_letra" href="/buscar-medico">Agendar citas</NavigationTo></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <NavigationTo class="nav-link fs-5" href="/editar-perfil">Editar datos</NavigationTo>
                                    </li>
                            </ul>
                            <label class="form-label me-2 color_letra h5">
                                | NOMBRE PACIENTE
                            </label>
                            <img src={paciente} class="img-circle"  alt="..." width="50px;"/>    
                            <button className='text-center btn' onClick = {()=> deslogear()}> cerrar sesion</button>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="container mt-5 mb-5 color_letra">
                <div class="row justify-content-evenly ">
                    <div class="col-sm-3  mx-4">
                        <div class="container card mt-4 aislarcontenido borde">
                            <div class="row mb-3">
                                <div class="col text-center">
                                    <img src={paciente} alt=""class="img-fluid p-3 img-circle text-center" />
                                </div>
                            </div>
                            <div class="row">
                                <h3 class="text-center mb-3">Nombre paciente</h3>
                            </div>
                            <div class="row mx-auto">
                                <div class="col">
                                    <h5 class="sm-3"><NavigationTo href="/historial-citas-u"> Historial de citas: </NavigationTo> </h5>
                                    <div> Filtrar por: </div>    
                        <div class="fw-bold mt-2">Especialidad:</div>        
                        <div class="mb-5">
                        <select value={especialidadSeleccionada} className="form-select"  onChange={onEspecialidadSeleccionadaChange}>
                        
                            <option value={"0"}>Todas</option>
                            {opciones_INP}  
                         </select>
                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="container card mt-4 aislarcontenido borde">
                            <div id="columnas" class="container mt-2">
                                <div>
                                    <div class="row mt-3">
                                       {articulos}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </main>
    )
}

export default InicioPaciente