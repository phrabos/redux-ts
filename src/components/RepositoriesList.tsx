import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelectors';
import { useActions } from '../hooks/useActions';

export const RepositoriesList: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const { searchRepositories } = useActions();
	const { data, error, loading } = useTypedSelector(
		(state) => state.repositories
	);

	function onSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		searchRepositories(searchTerm);
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					value={searchTerm}
					onChange={(event) => setSearchTerm(event.target.value)}
				/>
				<button>Search</button>
			</form>
			{error && <h3>{error}</h3>}
			{loading && <h3>Loading...</h3>}
			{!error && !loading && data.map((el) => <p key={el}>{el}</p>)}
		</div>
	);
};
