import React, { useState } from 'react';
import style from './style.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
	deleteCompany,
	selectedAllCompany,
	unSelectedAllCompany,
	companyCreate,
} from '../../store/companySlice';
import {
	deletePeople,
	selectedAllPeople,
	unSelectedAllPeople,
} from '../../store/peopleSlice';

export const CompanyTitle = ({ company }) => {
	const dispatch = useDispatch();
	const [inputCompanyName, setInputCompanyName] = useState('');
	const [inputCompanyAddress, setInputCompanyAddress] = useState('');

	const submitForm = () => {
		const newCompany = {
			id: nanoid(3),
			companyName: inputCompanyName,
			countPeople: 10,
			address: inputCompanyAddress,
			selected: false,
		};
		dispatch(companyCreate(newCompany));
		setInputCompanyName('');
		setInputCompanyAddress('');
	};

	const deleteTargetCompany = () => {
		dispatch(deleteCompany(company));
		dispatch(deletePeople());
	};

	const selectedAll = (event) => {
		if (event.target.checked) {
			dispatch(selectedAllCompany());
			dispatch(selectedAllPeople());
		} else {
			dispatch(unSelectedAllCompany());
			dispatch(unSelectedAllPeople());
		}
	};
	return (
		<div className={style.title}>
			<h2 className={style.title_text}>Компании</h2>
			<div className={style.check_box}>
				<input type='checkbox' onChange={(event) => selectedAll(event)} />{' '}
				Выделить все
			</div>

			<button className={style.delete} onClick={() => deleteTargetCompany()}>
				Удалить выбранные
			</button>

			<div className={style.input_form}>
				<input
					className={style.input_form_company}
					type='text'
					placeholder='название компании'
					value={inputCompanyName}
					onChange={(e) => setInputCompanyName(e.target.value)}
				/>
				<input
					type='text'
					placeholder='адрес компании'
					value={inputCompanyAddress}
					onChange={(e) => setInputCompanyAddress(e.target.value)}
				/>
			</div>
			<button className={style.add} onClick={() => submitForm()}>
				Добавить
			</button>
		</div>
	);
};
