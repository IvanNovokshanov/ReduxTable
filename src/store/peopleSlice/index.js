import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
export const initialState = [
	{
		id: nanoid(3),
		firstName: 'Иван',
		lastName: 'Петров',
		position: 'Руководитель',
		selected: false,
		selectedPeople: false,
		company: 'Google',
		edit: false,
	},
	{
		id: nanoid(3),
		firstName: 'Петр',
		lastName: 'Иванов',
		position: 'Строитель',
		selected: false,
		selectedPeople: false,
		company: 'Apple',
		edit: false,
	},
	{
		id: nanoid(3),
		firstName: 'Сергей',
		lastName: 'Козлов',
		position: 'Водитель',
		selected: false,
		selectedPeople: false,
		company: 'Google',
		edit: false,
	},
	{
		id: nanoid(3),
		firstName: 'Борис',
		lastName: 'Сергеев',
		position: 'Бухгалтер',
		selected: false,
		selectedPeople: false,
		company: 'Apple',
		edit: false,
	},
	{
		id: nanoid(3),
		firstName: 'Антон',
		lastName: 'Борисов',
		position: 'Вахтер',
		selected: false,
		selectedPeople: false,
		company: 'Asus',
		edit: false,
	},
	{
		id: nanoid(3),
		firstName: 'Игнат',
		lastName: 'Пушкин',
		position: 'Консультант',
		selected: false,
		selectedPeople: false,
		company: 'Ford',
		edit: false,
	},
	{
		id: nanoid(3),
		firstName: 'Семен',
		lastName: 'Игнатов',
		position: 'Продавец',
		selected: false,
		selectedPeople: false,
		company: 'Asus',
		edit: false,
	},
	{
		id: nanoid(3),
		firstName: 'Дмитрий',
		lastName: 'Семенов',
		position: 'Уборщик',
		selected: false,
		selectedPeople: false,
		company: 'Asus',
		edit: false,
	},
	{
		id: nanoid(3),
		firstName: 'Анатолий',
		lastName: 'Дмитриев',
		position: 'Разработчик',
		selected: false,
		selectedPeople: false,
		company: 'Asus',
		edit: false,
	},
	{
		id: nanoid(3),
		firstName: 'Владимир',
		lastName: 'Маяковский',
		position: 'frontend',
		selected: false,
		selectedPeople: false,
		company: 'Ford',
		edit: false,
	},
];

export const peopleSlice = createSlice({
	name: 'people',
	initialState,
	reducers: {
		peopleCreate: (state, action) => state.concat(action.payload),
		selected: (state, action) =>
			state.map((obj) =>
				obj.company === action.payload
					? { ...obj, selected: !obj.selected }
					: obj
			),
		selectedPeople: (state, action) =>
			state.map((obj) =>
				obj.id === action.payload
					? { ...obj, selectedPeople: !obj.selectedPeople }
					: obj
			),
		deletePeople: (state, action) =>
			state.map((obj) => ({ ...obj, selected: false })),
		deleteSelectedPeople: (state, action) =>
			state.filter((el) => !el.selectedPeople),

		selectedAllPeople: (state, action) =>
			state.map((obj) => ({ ...obj, selected: true })),
		selectedAllPeopleBlock: (state, action) =>
			state.map((obj) =>
				obj.selected === true
					? { ...obj, selectedPeople: !obj.selectedPeople }
					: obj
			),
		editPeopleAction: (state, action) =>
			state.map((obj) =>
				obj.id === action.payload ? { ...obj, edit: !obj.edit } : obj
			),
		unSelectedAllPeople: (state, action) =>
			state.map((obj) => ({ ...obj, selected: false })),
		unSelectedAllPeopleBlock: (state, action) =>
			state.map((obj) => ({ ...obj, selectedPeople: false })),
		editFirstNameSave: (state, action) =>
			state.map((obj) =>
				obj.id === action.payload.id
					? { ...obj, firstName: action.payload.editFirstName }
					: obj
			),
		editLastNameSave: (state, action) =>
			state.map((obj) =>
				obj.id === action.payload.id
					? { ...obj, lastName: action.payload.editLastName }
					: obj
			),
		editPositionSave: (state, action) =>
			state.map((obj) =>
				obj.id === action.payload.id
					? { ...obj, position: action.payload.editPosition }
					: obj
			),
		editCompanySave: (state, action) =>
			state.map((obj) =>
				obj.id === action.payload.id
					? { ...obj, company: action.payload.editCompany }
					: obj
			),
	},
});

export const {
	editFirstNameSave,
	editLastNameSave,
	editPositionSave,
	editCompanySave,
	peopleCreate,
	editPeopleAction,
	unSelectedAllPeopleBlock,
	deleteSelectedPeople,
	selectedAllPeopleBlock,
	employeesCompany,
	selected,
	deletePeople,
	selectedAllPeople,
	unSelectedAllPeople,
	selectedPeople,
} = peopleSlice.actions;

export const peopleSliceReducer = peopleSlice.reducer;
