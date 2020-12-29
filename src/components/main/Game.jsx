import React, { useState } from 'react';

import elements from '../../general/elements';

const Game = () => {
	const [elem, setElem] = useState([]);
	const [toggler, setToggler] = useState();

	const getRandom = () => {
		const random = Math.floor(Math.random() * (127 - 1 + 1)) + 1;
		setElem(elements[random]);
		setToggler();
	};

	const setAnswer = (e) => {
		const value = e.target.value.toLowerCase();
		if (e.key === 'Enter') {
			if (value == elem?.name.toLowerCase()) {
				setToggler('да');
			} else {
				setToggler('нет');
			}
		}
	};

	return (
		<>
			<div className='section__top'>
				<h2 className='section__title'>
					мини-игра "угадай элемент по символу"
				</h2>
			</div>
			<div className='section__body game'>
				<button className='game__btn' onClick={() => getRandom()}>
					Нажать для получения рандомного Элемента
				</button>
				<div className='game__random'>
					<div>{elem.symbol}</div>
				</div>

				<input
					className='game__input'
					type='text'
					onKeyPress={(e) => setAnswer(e)}
				/>

				<div className='game__answer'>{toggler}</div>
			</div>
		</>
	);
};

export default Game;
