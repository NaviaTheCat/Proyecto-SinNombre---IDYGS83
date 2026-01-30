import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FaUser } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function Dashboard() {
  const events = [{ title: "Meeting", start: new Date() }];

  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>

      <div className="ml-60 mt-16 p-8">
        <div className="flex gap-10 justify-center">
          <div className="bg-[#00CEEE] text-center p-20 rounded-lg shadow-lg w-[50%]">
            <div className="text-white ">
              <FaUser className="mx-auto mb-2" size="4rem" />
              <h1 className="text-[30px] font-bold ">ARTURO DIAZ</h1>
              <p className="text-xl">
                INGENIERÍA EN DESARROLLO Y GESTIÓN DE SOFTWARE
              </p>
              <p className="text-xl">Matricula: 2289015</p>
            </div>
          </div>

          <div className="bg-[#14DCC5] p-20 rounded-lg shadow-lg text-center w-[50%]">
            <div className="text-white">
              <FaUniversity className="mx-auto mb-2" size="4rem" />
              <h1 className="text-[30px] font-bold">IDYGS83</h1>
              <p className="text-xl">Edificio H - H119E</p>
              <p className="text-xl">Octavo cuatrimestre</p>
              <p className="text-xl">Tutor: PREZA MEDINA SERGIO ROBERTO</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-60 pb-10 px-10">
        
        <div className="p-2">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={events}
            eventContent={renderEventContent}
            headerToolbar={{
              left: 'title',
              right: 'today prev,next'
            }}
            height="auto"
            contentHeight="auto"
          />
        </div>
      </div>
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>

    </>
  );
}

export default Dashboard;
