import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { PiSignInFill } from "react-icons/pi";


export default function Header({ showFullItem, setShowFullItem }) {
    const [activeItem, setActiveItem] = useState(null);

  const handleClick = (index) => {
    setActiveItem(index);
  };

   // Функция для открытия/закрытия модального окна
   const toggleFullItem = () => {
    setShowFullItem(prev => !prev); // Переключаем состояние
  };

  return (
    <header>
        <div className='container-logo'>
            <div className='logo-section'>
                <img src='./img/logo.png' alt='Изображение логотипа GS'></img>
                <span className='name-logo'>GREENSHOP</span>
            </div>
            <ul className='nav'>
                <li onClick={() => handleClick(0)} className={activeItem == 0 ? 'active' : ''}>Home</li>
                <li onClick={() => handleClick(1)} className={activeItem == 1 ? 'active' : ''}>Shop</li>
                <li onClick={() => handleClick(2)} className={activeItem == 2 ? 'active' : ''}>Plant Care</li>
                <li onClick={() => handleClick(3)} className={activeItem == 3 ? 'active' : ''}>Blogs</li>
            </ul>
            <div className='button-section'>
                <FaSearch className='icon'/>
                <FaShoppingCart className='icon'/>
                <button className='login-button' onClick={toggleFullItem}>
                    <PiSignInFill className='icon' /> Login
                </button>
            </div>
        </div>
        <div className='line'></div>
    </header>
  )
}