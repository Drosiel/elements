import React, { useEffect, useState } from 'react';
// import svg from '../../img/style.svg';

import SimpleSlider from '../main/Slider';
import elements from '../../general/elements';

import Popup from '../main/Popup';
import ElementsItem from '../elements/Item';
import Sort from '../elements/Sort';

const Main = () => {
	const [list, setList] = useState([]);
	const [other, setOther] = useState([]);
	const [isShowPopup, setIsShowPopup] = useState(false);
	const [dataPopup, setDataPopup] = useState(null);
	const [value, setValue] = useState('');

	const setInputValue = (e) => {
		const value = e.target.value;

		setValue(value);

		if (value !== '') {
			setList((prev) =>
				prev.map((item) =>
					item != 'empty'
						? item.name.toLowerCase().includes(value.toLowerCase())
							? { ...item, focus: true }
							: { ...item, focus: false }
						: 'empty'
				)
			);
		} else {
			getFields();
		}
	};

	const openPopup = (elem) => {
		setDataPopup(elem);
		setIsShowPopup(!isShowPopup);
	};

	const voids = [
		{
			from: 1,
			length: 16,
		},
		{
			from: 4,
			length: 10,
		},
		{
			from: 12,
			length: 10,
		},
		{
			from: 56,
			length: 1,
		},
		{
			from: 88,
			length: 1,
		},
	];

	const getFields = () => {
		const arr = [];
		const count = 18 * 7;
		const twise = [];

		for (let i = 0; i < count; i++) {
			if (
				(i > 55 && i < 71) ||
				(i > 87 && i < 103) ||
				(i > 117 && i < 126)
			) {
				twise.push(elements[i]);
			} else {
				if (elements[i]) {
					if (voids.find((item) => item.from === elements[i].id)) {
						arr.push(elements[i]);
						const lengthVoid = voids.find(
							(item) => item.from === elements[i].id
						).length;

						for (let j = 0; j < lengthVoid; j++) {
							arr.push(j);
						}
					} else {
						arr.push(elements[i]);
					}
				} else {
					arr.push(i);
				}
			}
		}
		setList(arr);
		setOther(twise);
	};

	useEffect(() => {
		getFields();
	}, []);

	return (
		<div className='main'>
			{/* <SimpleSlider /> */}

			<section className='section container'>
				<div className='section__top'>
					<h2 className='section__title'>
						Периодическая система химических элементов
					</h2>
				</div>

				<Sort setList={setList} />

				<div className='section__search'>
					<span>поиск элемента по названию:</span>
					<input
						className='section__input'
						type='text'
						placeholder='найти элемент'
						value={value}
						onChange={(e) => setInputValue(e)}
					/>
				</div>

				<div className='section__body'>
					<div className='grid'>
						{list.map((elem, index) => (
							<ElementsItem
								key={index}
								elem={elem}
								openPopup={openPopup}
							/>
						))}
					</div>

					<div className='grid'>
						<div className='grid__add'>
							{other.map((elem, index) => (
								<ElementsItem
									key={index}
									elem={elem}
									openPopup={openPopup}
								/>
							))}
						</div>
					</div>
				</div>
			</section>

			{isShowPopup && <Popup data={dataPopup} openPopup={openPopup} />}
		</div>
	);
};

export default Main;
