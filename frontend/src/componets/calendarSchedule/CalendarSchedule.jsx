/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler'
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  AppointmentTooltip,
  AppointmentForm
} from '@devexpress/dx-react-scheduler-material-ui'
import useDoctorService from '../../services/doctor'
import { useStore } from 'react-redux'
import useDoctorInfo from '../../hooks/useDoctorInfo'

export const appointments = [
  {
    title: 'Website Re-Design Plan',
    startDate: new Date(2018, 5, 25, 9, 35),
    endDate: new Date(2018, 5, 25, 11, 30),
    id: 0,
    location: 'Room 1'
  },
  {
    title: 'Book Flights to San Fran for Sales Trip',
    startDate: new Date(2018, 5, 25, 12, 11),
    endDate: new Date(2018, 5, 25, 13, 0),
    id: 1,
    location: 'Room 1'
  },
  {
    title: 'Install New Router in Dev Room',
    startDate: new Date(2018, 5, 25, 14, 30),
    endDate: new Date(2018, 5, 25, 15, 35),
    id: 2,
    location: 'Room 2'
  }
]

const CalendarSchedule = () => {
  const { doctor } = useDoctorInfo()
  const [appointments, setAppointments] = useState([])
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    if (doctor) {
      const horarios = doctor.horarios
      setCurrentDate(horarios[0]?.fechaInicio ? new Date(horarios[0]?.fechaInicio): new Date())
      setAppointments(
        horarios.map((horario) => ({
          title: horario?.cita?.paciente?.nombre,
          startDate: new Date(horario.fechaInicio),
          endDate: new Date(horario.fechaFin),
          id: horario.id
        }))
      )
    }
  }, [doctor])

  useEffect(() => {}, [])

  return (
    <Paper>
      <Scheduler data={appointments} locale={'es'}>
        <ViewState currentDate={currentDate} onCurrentDateChange={setCurrentDate} />
        <EditingState
          onCommitChanges={(changes) => {
            console.log('changes', changes)
          }}
        />
        <WeekView startDayHour={9} endDayHour={19} />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
        <AppointmentTooltip showOpenButton />
        <AppointmentForm booleanEditorComponent={() => null} />
      </Scheduler>
    </Paper>
  )
}

export default CalendarSchedule