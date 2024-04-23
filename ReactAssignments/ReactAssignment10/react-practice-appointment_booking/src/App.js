import { useState } from "react";
import "./App.css";
import { Appointments } from "./components/Appointments";
import { Form } from "./components/Form";

function App() {
  // localStorage.setItem("appointments", JSON.stringify([{}]));
  const [appointments, setAppointments] = useState(
    localStorage.getItem("appointments") === null
      ? []
      : JSON.parse(localStorage.getItem("appointments"))
  );
  const emptyObject = {
    patientName: "",
    phoneNum: "",
    doctorName: "",
    gender: "",
    date: "",
    appointmentType: "",
    age: "",
    time: "",
  };
  const [formObj, setFormObj] = useState(emptyObject);
  const [updateFlag, setUpdateFlag] = useState("");
  const updateAppointments = (id) => {
    setFormObj({
      patientName: appointments[id].patientName,
      phoneNum: appointments[id].phoneNum,
      doctorName: appointments[id].doctorName,
      gender: appointments[id].gender,
      date: appointments[id].date,
      appointmentType: appointments[id].appointmentType,
      age: appointments[id].age,
      time: appointments[id].time,
    });
    setUpdateFlag(id);
  };
  const deleteAppointMents = (id) => {
    let newArray = [...appointments];
    newArray.splice(id, 1);
    localStorage.setItem("appointments", JSON.stringify(newArray));
    setAppointments(newArray);
  };
  const addAppointments = (newAppointment) => {
    if (updateFlag !== "") {
      let updateIndex = parseInt(updateFlag);
      let newArray = [...appointments];
      newArray[updateIndex] = newAppointment;
      localStorage.setItem("appointments", JSON.stringify(newArray));
      setAppointments(newArray);
      setUpdateFlag("");
    } else {
      localStorage.setItem(
        "appointments",
        JSON.stringify([...appointments, newAppointment])
      );
      setAppointments([...appointments, newAppointment]);
    }

    setFormObj(emptyObject);
  };
  return (
    <div className="main-container">
      <Form
        addAppointment={addAppointments}
        obj={formObj}
        setObj={setFormObj}
        flag={updateFlag}
      />
      <div className="divider"></div>
      <Appointments
        appoints={appointments}
        updateAppointments={updateAppointments}
        deleteAppointMents={deleteAppointMents}
      />
    </div>
  );
}

export default App;
