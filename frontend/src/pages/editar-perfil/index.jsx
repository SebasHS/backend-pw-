import React, { useEffect, useState } from 'react'
import NavigationTo from '../../componets/NavigationTo'
import usePerfilService from '../../services/perfil'
import useAppContext from '../../hooks/useAppContext'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import './index.css'

const useProfile = () => {
    const [perfil, setPerfil] = useState()
    const { verPerfil, actualizarPerfil } = usePerfilService()

    const obtenerPerfil = async () => {
        const response = await verPerfil()
        setPerfil(response.data.data)
    }

    const _actualizarPerfil = async (data) => {
        await actualizarPerfil(data)
    }

    useEffect(() => {
        obtenerPerfil()
    }, [])

    return {
        perfil,
        obtenerPerfil,
        actualizarPerfil: _actualizarPerfil
    }
}

const Input = ({ label, onChange, value }) => {
    return (
        <>
            <label className="form-label mt-2 h5" id="letra">
                {label}
            </label>
            <input
                value={value}
                onChange={onChange}
                type="text"
                className="form-control mt-2 mb-2"
            />
        </>
    )
}

const DatosDePaciente = () => {
    const { perfil, actualizarPerfil } = useProfile()
    const { setLoading } = useAppContext()
    const navigation = useNavigate()

    const onSubmit = async (values, helper) => {
        setLoading(true)
        try {
            await actualizarPerfil(values)
            navigation('/')
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }

    if (!perfil) {
        return null
    }

    return (
        <Formik initialValues={{ ...perfil }} onSubmit={onSubmit}>
            {({ handleSubmit, values, handleChange }) => {
                return (
                    <form onSubmit={handleSubmit}>
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
                                            <Input
                                                label={'Nombres '}
                                                value={values.nombre}
                                                onChange={handleChange('nombre')}
                                            />
                                        </div>

                                        <div className="col-sm-6">
                                            <Input
                                                label={'Apellidos '}
                                                value={values.apellidoPaterno}
                                                onChange={handleChange('apellidoPaterno')}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-sm-6">
                                            <label className="form-label Labels">Usuario</label>
                                            <input type={"text"} className="form-control cuadroLleno"  />
                                        </div>

                                        <div className="col-sm-6">
                                            <Input
                                                label={'Email:'}
                                                value={values.email}
                                                onChange={handleChange('email')}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-sm-6">
                                            <label className="form-label Labels">Nueva Contraseña</label>
                                            <input type={"password"} className="form-control cuadroLleno"  />
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-sm-6">
                                            <label className="form-label Labels">Confirmar Nueva Contraseña</label>
                                            <input type={"password"} className=" cuadroLleno form-control" />
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-sm-6">
                                            <Input
                                                label={'Telefono:'}
                                                value={values.numContacto}
                                                onChange={handleChange('numContacto')}
                                            />
                                        </div>
                                    </div>

                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-2 Boton">
                                        <input className="btn btn-primary" type={'submit'}>
                
                                        </input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                )
            }}
        </Formik>
    )
}

export default DatosDePaciente