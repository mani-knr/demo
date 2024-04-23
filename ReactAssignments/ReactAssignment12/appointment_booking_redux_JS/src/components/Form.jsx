import { handleObjChange, resetInitial } from "../Store/PatientFormSlice";
import { addAppointment, updateAppointment } from "../Store/PatientListSlice";
import { useDispatch, useSelector } from "react-redux";
export const Form = () => {
	const { updateIndex, obj } = useSelector((state) => {
		return state.formReducer;
	});

	const dispatch = useDispatch();
	const handleChange = (e) => {
		dispatch(handleObjChange({ ...obj, [e.target.name]: e.target.value }));
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (updateIndex === -1) dispatch(addAppointment(obj));
		else {
			dispatch(updateAppointment({ updateIndex, obj }));
		}
		dispatch(resetInitial());
	};
	let date = new Date();
	let minDate = `${date.getFullYear()}-${
		date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
	}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
	return (
		<div className="container">
			<div className="form-head">GRADIOUS APPOINTMENT BOOKING</div>
			<form onSubmit={handleFormSubmit}>
				<div className="parent">
					<div className="child">
						<input
							type="text"
							placeholder="Patient Name *"
							name="patientName"
							onChange={handleChange}
							pattern="[A-z\s.]{3,}"
							value={obj.patientName}
							required
						/>
					</div>
					<div className="child">
						<input
							type="tel"
							placeholder="Phone Number *"
							name="phoneNum"
							onChange={handleChange}
							value={obj.phoneNum}
							pattern="[6-9]{1}[0-9]{9}"
							required
						/>
					</div>
					<div className="child">
						<input
							type="text"
							placeholder="Doctor Name *"
							pattern="[A-z\s.]{3,}"
							name="doctorName"
							onChange={handleChange}
							value={obj.doctorName}
							required
						/>
					</div>
					<div className="child">
						<select
							name="gender"
							onChange={handleChange}
							value={obj.gender}
							required
						>
							<option default value={""}>
								Gender
							</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
					</div>
					<div className="child">
						<input
							type="date"
							placeholder="Date *"
							name="date"
							min={minDate}
							onChange={handleChange}
							value={obj.date}
							required
						/>
					</div>
					<div className="child">
						<select
							name="appointmentType"
							onChange={handleChange}
							value={obj.appointmentType}
							required
						>
							<option default value={""}>
								Appointment Type
							</option>
							<option value="Consult">Consult</option>
							<option value="Visit">Visit</option>
						</select>
					</div>
					<div className="child">
						<input
							type="text"
							placeholder="Age *"
							name="age"
							onChange={handleChange}
							value={obj.age}
							pattern="[0-9]{1,3}"
							required
						/>
					</div>
					<div className="child">
						<input
							type="time"
							name="time"
							onChange={handleChange}
							value={obj.time}
							required
						/>
					</div>
				</div>
				<div
					style={{
						padding: "0 1% 2%",
						display: "flex",
						justifyContent: "center",
						gap: "2rem",
					}}
				>
					<button className="submit">
						{updateIndex !== -1 ? "Update Appointment" : "Book Appointment"}
					</button>
					<button className="reset" onClick={() => dispatch(resetInitial())}>
						Reset
					</button>
				</div>
			</form>
		</div>
	);
};
