import React from 'react';
import { useState } from 'react';
import logo from '../../img/logo.png';
import svg from '../../img/style.svg';

export const Header = () => {
	const [tog, setTog] = useState(false);

	const toggleClass = () => {
		setTog(!tog);
	};

	return (
		<div className='header'>
			<div className='header__top'>
				<div className='menu container'>
					<div className='menu__main'>
						<div className='menu__item'>Купить оптом</div>
						<div className='menu__item'>Продать оптом</div>
						<div className='menu__item'>
							Найти оптового поставщика
						</div>
					</div>

					<div className='menu__mini'>
						<div className='menu__burger' onClick={toggleClass}>
							|||
						</div>
						<div className={`menu__drop ${tog ? 'activ' : ''}`}>
							<div className='menu__drop-item'>Купить оптом</div>
							<div className='menu__drop-item'>Продать оптом</div>
							<div className='menu__drop-item'>
								Найти оптового поставщика
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='header__bottom container'>
				<a href='#' className='logo'>
					<img src={logo} alt='лого' />
				</a>
				<div className='search'>
					<div className='search__form'>
						<div className='search__inner'>
							<svg className='search__icon'>
								<use href={`${svg}#search`} />
							</svg>
							<input
								className='search__input'
								type='text'
								placeholder='Найти'
							/>
							<select name='' id='' className='search__select'>
								<option value='везде'>везде</option>
								<option value='везде'>везде</option>
								<option value='везде'>везде</option>
							</select>
						</div>
						<button className='btn search__btn'>Найти</button>
					</div>
				</div>
				<div className='auth'>
					<div className='auth__item'>
						<svg className='auth__icon'>
							<use href={`${svg}#auth`} />
						</svg>
						Войти
					</div>
					<div className='auth__item'>Регистрация</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
