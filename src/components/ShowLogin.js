import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const ShowLogin = ({ setShowFullItem }) => {
  const [activeComponent, setActiveComponent] = useState('login'); // Устанавливаем начальное состояние

  const handleToggle = (component) => {
    setActiveComponent(component); // Изменяем активный компонент
  };

  const handleClose = () => {
    setShowFullItem(false); // Закрываем модальное окно
  };

  return (
    <div className='modal-overlay'>
      <div className='modal-window'>
        <button className='close-button' onClick={handleClose}>X</button> {/* Кнопка для закрытия */}
        <b>
          <span
            className='logSpan'
            onClick={() => handleToggle('login')}
            style={{ color: activeComponent === 'login' ? 'green' : 'black', cursor: 'pointer', marginRight: '10px' }}
          >
            Login
          </span>
          |
          <span
            className='regSpan'
            onClick={() => handleToggle('register')}
            style={{ color: activeComponent === 'register' ? 'green' : 'black', cursor: 'pointer', marginLeft: '10px' }}
          >
            Register
          </span>
        </b>

        {/* Условное отображение компонента */}
        {activeComponent === 'login' && <Login />}
        {activeComponent === 'register' && <Register />}
      </div>
    </div>
  );
};

export default ShowLogin;
