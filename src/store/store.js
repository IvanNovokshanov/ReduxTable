import { configureStore } from '@reduxjs/toolkit';
import { companySliceReducer } from './companySlice';
import { peopleSliceReducer } from './peopleSlice';

export const store = configureStore({
	reducer: {
		companyList: companySliceReducer,
		peopleList: peopleSliceReducer,
	},
});
