import React from 'react';
import styles from './style.module.css';
import { Company } from '../Company';
export const CompanyList = ({ company, people }) => {
	return (
		<div className={styles.table}>
			<table>
				<thead>
					<tr>
						<td className={styles.check_box}></td>

						<td className={styles.data}>Название компании</td>
						<td className={styles.data}>Адрес компании</td>
						<td className={styles.people_counter}>Кол. сотр.</td>
						<td className={styles.edit}>Редактирование</td>
					</tr>
				</thead>
				<tbody>
					<Company companyItem={company} people={people} />
				</tbody>
			</table>
		</div>
	);
};
