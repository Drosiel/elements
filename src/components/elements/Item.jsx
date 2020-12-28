import React from 'react';

const ElementsItem = (props) => {
	const { elem, openPopup } = props;

	return (
		<div className='grid__item'>
			{elem?.id ? (
				<div
					onClick={() => openPopup(elem)}
					className={`card ${elem.focus ? 'card__focus' : ''}`}
					style={{ background: `${elem.families}` }}
				>
					<div className='card__top'>
						<div className='card__info'>
							<div className='card__symbol'>{elem.symbol}</div>

							<div className='card__number'>{elem.id}</div>
						</div>

						<div className='card__mass'>
							{elem.aem ? elem.aem : 'нет данных'}
						</div>
					</div>

					<div className='card__name'>{elem.name}</div>
				</div>
			) : (
				<div className='card__empty'></div>
			)}
		</div>
	);
};

export default ElementsItem;
