import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectedPeople,
	editPeopleAction,
	editFirstNameSave,
	editLastNameSave,
	editPositionSave,
	editCompanySave,
} from '../../store/peopleSlice';

export const People = ({ peopleList }) => {
	const dispatch = useDispatch();

	const [editFirstName, setEditFirstName] = useState('');
	const [editLastName, setEditLastName] = useState('');
	const [editPosition, setEditPosition] = useState('');
	const [editCompany, setEditCompany] = useState('');

	const saveEdit = (id) => {
		if (editFirstName.length > 0) {
			dispatch(editFirstNameSave({ editFirstName, id }));
		}
		if (editLastName.length > 0) {
			dispatch(editLastNameSave({ editLastName, id }));
		}
		if (editPosition.length > 0) {
			dispatch(editPositionSave({ editPosition, id }));
		}
		if (editCompany.length > 0) {
			dispatch(editCompanySave({ editCompany, id }));
		}
		dispatch(editPeopleAction(id));
	};

	const handlerFirstName = (e) => {
		setEditFirstName(e.target.value);
	};
	const handlerLastName = (e) => {
		setEditLastName(e.target.value);
	};
	const handlerPosition = (e) => {
		setEditPosition(e.target.value);
	};
	const handlerCompany = (e) => {
		setEditCompany(e.target.value);
	};

	const clickEdit = (id) => {
		dispatch(editPeopleAction(id));
	};

	const selectedPeopleCheck = (event, id) => {
		if (event.target.checked) {
			dispatch(selectedPeople(id));
		} else {
			dispatch(selectedPeople(id));
		}
	};

	return (
		<>
			{peopleList.map(
				(item) =>
					item.selected && (
						<tr
							key={item.id}
							className={item.selectedPeople ? styles.fields : styles.not}
						>
							<td>
								<input
									type='checkbox'
									checked={item.selectedPeople}
									onChange={(event) => selectedPeopleCheck(event, item.id)}
								/>
							</td>

							<td className={styles.first_name}>
								{!item.edit ? (
									item.firstName
								) : (
									<input
										type='text'
										value={editFirstName}
										placeholder={item.firstName}
										onChange={(e) => handlerFirstName(e)}
									/>
								)}
							</td>
							<td className={styles.last_name}>
								{!item.edit ? (
									item.lastName
								) : (
									<input
										type='text'
										value={editLastName}
										placeholder={item.lastName}
										onChange={(e) => handlerLastName(e)}
									/>
								)}
							</td>
							<td className={styles.position}>
								{!item.edit ? (
									item.position
								) : (
									<input
										type='text'
										value={editPosition}
										placeholder={item.position}
										onChange={(e) => handlerPosition(e)}
									/>
								)}
							</td>
							<td className={styles.company_name}>
								{!item.edit ? (
									item.company
								) : (
									<input
										type='text'
										value={editCompany}
										placeholder={item.company}
										onChange={(e) => handlerCompany(e)}
									/>
								)}
							</td>
							<td className={styles.edit}>
								<button onClick={() => clickEdit(item.id)}>Edit</button>
								{!item.edit ? (
									<></>
								) : (
									<button onClick={() => saveEdit(item.id)}>Save</button>
								)}
							</td>
						</tr>
					)
			)}
		</>
	);
};
