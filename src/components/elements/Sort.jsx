import React, { useState } from 'react';

const Sort = (props) => {
	const { setList } = props;
	const [value, setValue] = useState(null);

	const onChange = (e) => {
		switch (e.target.value) {
			case 'direct':
				setList((prev) => [...prev].reverse());
				break;

			case 'revers':
				setList((prev) => [...prev].sort((a, b) => a.id - b.id));
				break;

			default:
				break;
		}
	};
	return (
		<div className='sort'>
			<span className='sort__title'>сортировать по:</span>
			<select
				name=''
				id='select'
				className='sort__select'
				onChange={(e) => onChange(e)}
			>
				<option value='none' hidden>
					тип сортировки
				</option>
				<option value='direct'>убавание</option>
				<option value='revers'>возрастание</option>
			</select>
		</div>
	);
};

export default Sort;
