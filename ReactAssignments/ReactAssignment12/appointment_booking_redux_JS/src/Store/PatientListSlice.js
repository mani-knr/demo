import { createSlice } from "@reduxjs/toolkit";
const initialState = JSON.parse(localStorage.getItem("appointments")) || [];

const patientListSlice = createSlice({
	name: "patientList",
	initialState,
	reducers: {
		deleteAppointment: (state, action) => {
			state.splice(action.payload, 1);
			localStorage.setItem("appointments", JSON.stringify(state));
		},
		addAppointment: (state, action) => {
			state.push(action.payload);
			localStorage.setItem("appointments", JSON.stringify(state));
		},
		updateAppointment: (state, action) => {
			state[action.payload.updateIndex] = action.payload.obj;
			localStorage.setItem("appointments", JSON.stringify(state));
		},
	},
});

export const { deleteAppointment, addAppointment, updateAppointment } =
	patientListSlice.actions;
export default patientListSlice.reducer;
