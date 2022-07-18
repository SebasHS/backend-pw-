import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"

export default function Calendar(){
    const handleEventClick = (e) => {
        console.log(e.event.startStr)
    }
    return(
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right:"dayGridMonth,timeGridWeek"
                }}
                businessHours = {{
                    startTime: "7:00",
                    endTime: "19:00",
                    daysOfWeek: [1,2,3,4,5]
                }}
                timeZone="local"
                events={[
                    {title: "Cita 1", start: "2022-07-18T12:30:00",  end: "2022-07-18T13:30:00", backgroundColor: "red", borderColor: "red", nombre_participante:"Sebas" },
                    {title: "Cita 2", start: "2022-07-18T14:30:00", end: "2022-07-18T16:30:00",nombre_participante:"Pedro"}
                ]}
                eventClick={handleEventClick}
                eventContent={renderEventContent}
            />
        </div>
    )
}

function renderEventContent(eventInfo){
    return(
        <div>
            <div>
                {eventInfo.event.title}
            </div>
            <div>
                {eventInfo.event.extendedProps.nombre_participante}
            </div>
        </div>
    )
}