import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
	{
		id: nanoid(3),
		companyName: 'Google',
		address: 'Ленина 19',
		selected: false,
		edit: false,
	},
	{
		id: nanoid(3),
		companyName: 'Apple',
		address: 'Попова 29',
		selected: false,
	},
	{
		id: nanoid(3),
		companyName: 'Asus',
		address: 'Шишкина 48',
		selected: false,
	},
	{
		id: nanoid(3),
		companyName: 'Ford',
		address: 'Пушкина 25',
		selected: false,
	},
];

export const companySlice = createSlice({
	name: 'company',
	initialState,
	reducers: {
		companyCreate: (state, action) => state.concat(action.payload),
		addTodo: (state, action) => ({
			...state,
			todos: state.todos.concat(action.payload),
		}),
		editCompanyAction: (state, action) =>
			state.map((obj) =>
				obj.id === action.payload ? { ...obj, edit: !obj.edit } : obj
			),
		selectedCompanyAction: (state, action) =>
			state.map((obj) =>
				obj.companyName === action.payload
					? { ...obj, selected: !obj.selected }
					: obj
			),
		editCompanySave: (state, action) =>
			state.map((obj) =>
				obj.id === action.payload.id
					? { ...obj, companyName: action.payload.editCompany }
					: obj
			),
		editAddressSave: (state, action) =>
			state.map((obj) =>
				obj.id === action.payload.id
					? { ...obj, address: action.payload.editAddress }
					: obj
			),
		deleteCompany: (state, action) => state.filter((el) => !el.selected),

		selectedAllCompany: (state, action) =>
			state.map((obj) => ({ ...obj, selected: true })),
		unSelectedAllCompany: (state, action) =>
			state.map((obj) => ({ ...obj, selected: false })),
	},
});

export const {
	editCompanyAction,
	editCompanySave,
	editAddressSave,
	companyCreate,
	addTodo,
	selectedCompanyAction,
	selectedAllCompany,
	deleteCompany,
	unSelectedAllCompany,
} = companySlice.actions;

export const companySliceReducer = companySlice.reducer;
