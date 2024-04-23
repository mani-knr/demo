import React from "react";
import { Appointment } from "./Appointment";
import { useSelector } from "react-redux";
export const Appointments = () => {
	const appointments = useSelector((state) => {
		return state.listReducer;
	});
	return (
		<table className="down-container">
			{appointments.length > 0 && (
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

			{appointments.length > 0 &&
				appointments.map((details, idx) => {
					return <Appointment details={details} index={idx} />;
				})}
		</table>
	);
};
