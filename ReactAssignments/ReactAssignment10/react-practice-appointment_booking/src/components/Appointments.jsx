import React from "react";
import { Appointment } from "./Appointment";

export const Appointments = (props) => {
	return (
		<table className="down-container">
			{props.appoints.length > 0 && (
				<tr className="appointments-template gridhead">
					<td colSpan={2} className="grid-item patient-cell">
						PATIENT NAME
					</td>
					<td className="grid-item">STATUS</td>
					<td className="grid-item">APPOINTMENT</td>
					<td className="grid-item">PHONE</td>
					<td className="grid-item">DOCTOR</td>
					<td className="grid-item">ACTIONS</td>
				</tr>
			)}

			{props.appoints.length > 0 &&
				props.appoints.map((details, idx) => {
					return (
						<Appointment
							details={details}
							update={props.updateAppointments}
							delete={props.deleteAppointMents}
							index={idx}
						/>
					);
				})}
		</table>
	);
};
