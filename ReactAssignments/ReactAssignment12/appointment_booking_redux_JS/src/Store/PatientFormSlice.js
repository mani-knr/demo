import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	updateIndex: -1,
	obj: {
		patientName: "",
		phoneNum: "",
		doctorName: "",
		gender: "",
		date: "",
		appointmentType: "",
		age: "",
		time: "",
	},
};

const patientSlice = createSlice({
	name: "patient",
	initialState,
	reducers: {
		resetInitial: (state) => {
			console.log("reset");
			return (state = initialState);
		},
		updateFormObject: (state, action) => {
			state.updateIndex = action.payload.id;
			state.obj = action.payload.obj;
		},
		handleObjChange: (state, action) => {
			state.obj = action.payload;
		},
	},
});
export const { handleObjChange, updateFormObject, resetInitial } =
	patientSlice.actions;

export default patientSlice.reducer;
