// import './App.scss'
import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const routesAuth = [
  /*{
    path: 'registro',
    element: lazy(() => import('../pages/registro'))
  },*/
  {
    path: 'login',
    element: lazy(() => import('../pages/login'))
  },
  {
    path: 'registro-paciente',
    element: lazy(() => import('../pages/registro-paciente'))
  },
  {
    path: 'registro-medico',
    element: lazy(() => import('../pages/registro-medico'))
  },
  {
    path: '*',
    element: () => <Navigate to={'/login'} />
  },
  {
    path: 'recuperar-contrasena',
    element: lazy(() => import('../pages/recuperar-contrasena'))
  }
]

const routes = [
  {
    path: '',
    element: lazy(() => import('../pages/inicio'))
  },
  {
    path: 'inicio-paciente',
    element: lazy(() => import('../pages/inicio-paciente'))
  },
  {
    path: 'proximas-citas',
    element: lazy(() => import('../pages/proximas-citas'))
  },
  {
    path: 'preguntas-pacientes',
    element: lazy(() => import('../pages/preguntas-pacientes'))
  },
  {
    path: 'preguntas-publicas',
    element: lazy(() => import('../pages/preguntas-publicas'))
  },
 
  {
    path: 'medios-de-pago',
    element: lazy(() => import('../pages/medios-de-pago'))
  },
  {
    path: 'mensajes-privados',
    element: lazy(() => import('../pages/mensajes-privados'))
  },
  {
    path: 'mensajes-publicos',
    element: lazy(() => import('../pages/mensajes-publicos'))
  },
  {
    path: 'puntuar-medico',
    element: lazy(() => import('../pages/puntuar-medico'))
  },
  {
    path: 'recuperar-contrasena',
    element: lazy(() => import('../pages/recuperar-contrasena'))
  },
  {
    path: 'registrar-cita-medico',
    element: lazy(() => import('../pages/registrar-cita-medico'))
  },
  {
    path: 'registrar-cita-paciente',
    element: lazy(() => import('../pages/registrar-cita-paciente'))
  },
  {
    path: 'tarjeta-pago',
    element: lazy(() => import('../pages/tarjeta-pago'))
  },


  {
    path: 'bandejas',
    element: lazy(() => import('../pages/bandejas'))
  },

  {
    path: 'buscar-medico',
    element: lazy(() => import('../pages/buscar-medico'))
  },
  {
    path: 'buzon',
    element: lazy(() => import('../pages/buzon'))
  },
  {
    path: 'calendario-de-citas',
    element: lazy(() => import('../pages/calendario-de-citas'))
  },
  {
    path: 'citas-paciente',
    element: lazy(() => import('../pages/citas-paciente'))
  },
  {
    path: 'editar-perfil',
    element: lazy(() => import('../pages/editar-perfil'))
  },
  {
    path: 'historial-citas-u',
    element: lazy(() => import('../pages/historial-citas-u'))
  },
  {
    path: 'historial-de-citas',
    element: lazy(() => import('../pages/historial-de-citas'))
  },
  {
    path: 'horario-de-atencion',
    element: lazy(() => import('../pages/horario-de-atencion'))
  },
  {
    path: 'info-paciente-medico',
    element: lazy(() => import('../pages/info-paciente-medico'))
  },
  {
    path: 'informacion-medico',
    element: lazy(() => import('../pages/informacion-medico'))
  },
  {
    path: 'datos-de-contacto',
    element: lazy(() => import('../pages/datos-de-contacto'))
  },/*{
    path: 'registro',
    element: lazy(() => import('../pages/registro'))
  },*/
  




  {
    path: '*',
    element: () => <Navigate to={'/'} />
  }
]

const Element = ({ children: Children }) => {
  return <Suspense fallback="cargando..">{<Children />}</Suspense>
}

function Navigation() {
  const accessToken = useSelector((s) => s.sesion.accessToken)
  const dataRoutes = accessToken ? routes : routesAuth
  console.log('accessToken', accessToken)
  return (
    <BrowserRouter>
      <Routes>
        {dataRoutes.map((params, index) => {
          return (
            <Route
              key={index.toString()}
              {...params}
              element={<Element>{params.element}</Element>}
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation