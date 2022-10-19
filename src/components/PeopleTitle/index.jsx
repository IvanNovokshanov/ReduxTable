import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	peopleCreate,
	deleteSelectedPeople,
	selectedAllPeopleBlock,
	unSelectedAllPeopleBlock,
} from '../../store/peopleSlice';

export const PeopleTitle = ({ peopleList }) => {
	const dispatch = useDispatch();
	const [inputFirstName, setInputFirstName] = useState('');
	const [inputlastName, setInputLastName] = useState('');
	const [inputPosition, setInputPosition] = useState('');
	const [inputCompany, setInputCompany] = useState('');

	const submitForm = () => {
		const newPeople = {
			id: nanoid(3),
			firstName: inputFirstName,
			lastName: inputlastName,
			position: inputPosition,
			selected: false,
			selectedPeople: false,
			company: inputCompany,
		};
		dispatch(peopleCreate(newPeople));
		setInputFirstName('');
		setInputLastName('');
		setInputPosition('');
		setInputCompany('');
	};
	const deleteTargetPeople = () => {
		dispatch(deleteSelectedPeople());
	};
	const selectedAllPeople = (event) => {
		if (event.target.checked) {
			dispatch(selectedAllPeopleBlock());
		} else {
			dispatch(unSelectedAllPeopleBlock());
		}
	};
	return (
		<div className={style.title}>
			<h2 className={style.title_text}>Сотрудники</h2>
			<div className={style.check_box}>
				<input type='checkbox' onChange={(event) => selectedAllPeople(event)} />{' '}
				Выделить все
			</div>

			<button className={style.delete} onClick={() => deleteTargetPeople()}>
				Удалить выбранные
			</button>

			<div className={style.input_form}>
				<input
					className={style.input_form_company}
					type='text'
					placeholder='имя'
					value={inputFirstName}
					onChange={(e) => setInputFirstName(e.target.value)}
				/>
				<input
					type='text'
					placeholder='фамилия'
					value={inputlastName}
					onChange={(e) => setInputLastName(e.target.value)}
				/>
			</div>
			<div className={style.input_form}>
				<input
					className={style.input_form_company}
					type='text'
					placeholder='должность'
					value={inputPosition}
					onChange={(e) => setInputPosition(e.target.value)}
				/>
				<input
					type='text'
					placeholder='компания'
					value={inputCompany}
					onChange={(e) => setInputCompany(e.target.value)}
				/>
			</div>
			<button className={style.add} onClick={() => submitForm()}>
				Добавить
			</button>
		</div>
	);
};
