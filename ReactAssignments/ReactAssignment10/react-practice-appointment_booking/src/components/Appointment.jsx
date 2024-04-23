import React from "react";

export const Appointment = (props) => {
  let currTime = props.details.time;
  let times = currTime.split(":");
  if (times[0] === "00") {
    times[0] = "12";
    times.push("AM");
  } else if (times[0] > "12") {
    times[0] = times[0] - "12" < 10 ? "0" + (times[0] - "12") : times[0] - "12";
    times.push("PM");
  } else {
    times.push("AM");
  }
  const handleUpdate = () => {
    props.update(props.index);
  };
  const handleDelete = (e) => {
    props.delete(props.index);
  };
  return (
    <tr className="appointments-template ">
      <td colSpan={2} className="grid-item patient-cell">
        <div className="grid-item patient-cell">
          <div className="img-container">
            <img src={`./assets/${props.details.gender}.png`} alt="" />
          </div>
          <div>
            <div className="patname-cell">{props.details.patientName}</div>
            <div className="age-gender">
              {props.details.age}yrs,{props.details.gender}
            </div>
          </div>
        </div>
      </td>
      <td className="grid-item">
        <button className={props.details.appointmentType}>
          {props.details.appointmentType}
        </button>
      </td>
      <td className="grid-item">
        <div className="time">
          {times[0]} : {times[1]}
          {"  " + times[2]}
        </div>
        {/* <div className="time">Time :{props.details.time}</div> */}
        <div style={{ fontSize: "1rem", fontWeight: "bolder", color: "gray" }}>
          {props.details.date}
        </div>
      </td>
      <td className="grid-item">
        <div style={{ fontWeight: 600 }}>+91 {props.details.phoneNum}</div>
        <div
          style={{ fontSize: "12px", color: "#24a0ed", fontWeight: "bolder" }}
        >
          contact
        </div>
      </td>
      <td className="grid-item" style={{ color: "gray", fontWeight: "bolder" }}>
        Dr.{props.details.doctorName}
      </td>
      <td className="grid-item options">
        <i
          className="fa-solid fa-pen-to-square"
          style={{ color: "#24a0ed" }}
          onClick={handleUpdate}
        ></i>
        &nbsp;&nbsp;
        <i
          style={{ color: "red" }}
          className="fa-sharp fa-solid fa-trash"
          onClick={handleDelete}
        ></i>
      </td>
    </tr>
  );
};
