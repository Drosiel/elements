import React from 'react';
import svg from '../../img/style.svg';

const Popup = (props) => {
	const { data, openPopup } = props;

	const closePopup = () => {
		openPopup();
	};

	return (
		<div className='popup'>
			<div className='popup__wrapper' onClick={closePopup}></div>

			<div className='popup__form'>
				<div className='popup__content'>
					<div className='popup__left'>
						<div>
							{data?.symbol && (
								<h1 style={{ color: `${data.families}` }}>
									{data.symbol}
								</h1>
							)}
						</div>
						<div>
							название элемента:
							{data?.name ? (
								<span>{data.name}</span>
							) : (
								<span>'нет данных'</span>
							)}
						</div>
						<div>
							лат. название элемента:
							{data?.latname ? (
								<span>{data.latname}</span>
							) : (
								<span>'нет данных'</span>
							)}
						</div>
						<div>
							температура плавления:
							{data?.melting ? (
								<span>{data.melting}</span>
							) : (
								<span>'нет данных'</span>
							)}
						</div>
						<div>
							температура кипения:
							{data?.boiling ? (
								<span>{data.boiling}</span>
							) : (
								<span>'нет данных'</span>
							)}
						</div>
						<div>
							год открытия:
							{data?.opening ? (
								<span>{data.opening}</span>
							) : (
								<span>'нет данных'</span>
							)}
						</div>
						<div>
							кто открыл:
							{data?.discoverer ? (
								<span>{data.discoverer}</span>
							) : (
								<span>'нет данных'</span>
							)}
						</div>
					</div>

					<div className='popup__right'>
						{data?.img && (
							<img
								className='popup__img'
								src={data.img}
								alt={data.name}
							/>
						)}
					</div>
				</div>

				<div className='popup__close'>
					<svg className='popup__icon' onClick={closePopup}>
						<use href={`${svg}#close`}></use>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Popup;
