import React from 'react';
import { PeopleList } from './components/PeopleList';
import { CompanyList } from './components/CompanyList';
import { PeopleTitle } from './components/PeopleTitle';
import { CompanyTitle } from './components/CompanyTitle';
import { useSelector } from 'react-redux';

export const App = () => {
	const company = useSelector((state) => state.companyList);
	const people = useSelector((state) => state.peopleList);

	return (
		<div className='container'>
			<div className='title'>
				<div className='container_company'>
					<CompanyTitle company={company} />
					<CompanyList company={company} people={people} />
				</div>
				<div className='container_people'>
					<PeopleTitle peopleList={people} />

					<PeopleList peopleList={people} />
				</div>
			</div>
		</div>
	);
};
