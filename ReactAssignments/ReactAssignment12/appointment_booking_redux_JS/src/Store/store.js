import { configureStore } from "@reduxjs/toolkit";
import patientFormReducer from "./PatientFormSlice";
import patientListReducer from "./PatientListSlice";
const store = configureStore({
	reducer: {
		formReducer: patientFormReducer,
		listReducer: patientListReducer,
	},
});
export { store };
