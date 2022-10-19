import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import { People } from '../People';
import { useDispatch, useSelector } from 'react-redux';

export const PeopleList = ({ peopleList }) => {
	const dispatch = useDispatch();
	return (
		<div className={styles.table}>
			<table>
				<thead>
					<tr>
						<td className={styles.check_box}></td>
						<td className={styles.data}>Имя</td>
						<td className={styles.data}>Фамилия</td>
						<td className={styles.data}>Должность</td>
						<td className={styles.data}>Компания</td>
						<td className={styles.edit}>Редактирование</td>
					</tr>
				</thead>
				<tbody>
					<People peopleList={peopleList} />
				</tbody>
			</table>
		</div>
	);
};
