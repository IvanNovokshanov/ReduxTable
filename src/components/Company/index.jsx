import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selected } from '../../store/peopleSlice';
import {
	selectedCompanyAction,
	editCompanyAction,
	editAddressSave,
	editCompanySave,
} from '../../store/companySlice';

export const Company = ({ companyItem, people }) => {
	const dispatch = useDispatch();
	const [editCompany, setEditCompany] = useState('');
	const [editAddress, setEditAddress] = useState('');

	const saveEdit = (id) => {
		if (editCompany.length > 0) {
			dispatch(editCompanySave({ editCompany, id }));
		}
		if (editAddress.length > 0) {
			dispatch(editAddressSave({ editAddress, id }));
		}
		dispatch(editCompanyAction(id));
	};

	const handlerCompany = (e) => {
		setEditCompany(e.target.value);
	};
	const handlerAddress = (e) => {
		setEditAddress(e.target.value);
	};

	const clickEdit = (id) => {
		dispatch(editCompanyAction(id));
	};
	const selectedCompanyCheck = (event, companyName) => {
		if (event.target.checked) {
			dispatch(selected(companyName));
			dispatch(selectedCompanyAction(companyName));
		} else {
			dispatch(selected(companyName));
			dispatch(selectedCompanyAction(companyName));
		}
	};
	const counterPeople = (companyName) => {
		return people.filter((el) => el.company === companyName).length;
	};
	return (
		<>
			{companyItem.map((item) => (
				<tr
					key={item.id}
					className={item.selected ? styles.fields : styles.not}
				>
					<td>
						<input
							type='checkbox'
							checked={item.selected}
							onChange={(event) =>
								selectedCompanyCheck(event, item.companyName)
							}
						/>
					</td>
					<td className={styles.company_name}>
						{!item.edit ? (
							item.companyName
						) : (
							<input
								type='text'
								value={editCompany}
								placeholder={item.companyName}
								onChange={(e) => handlerCompany(e)}
							/>
						)}
					</td>
					<td className={styles.company_address}>
						{!item.edit ? (
							item.address
						) : (
							<input
								type='text'
								value={editAddress}
								placeholder={item.address}
								onChange={(e) => handlerAddress(e)}
							/>
						)}
					</td>
					<td className={styles.people_counter}>
						{counterPeople(item.companyName)}
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
			))}
		</>
	);
};
