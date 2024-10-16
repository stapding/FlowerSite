import React, { useState, useEffect } from 'react';

export default function Products() {
    // Устанавливаем состояние по умолчанию на 'all'
  const [selectedOption, setSelectedOption] = useState('all');

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Обновляем состояние при изменении
  };
    
  // Инициализация состояния для значения слайдера
  const [priceRange, setPriceRange] = useState(50);

  // Обработчик изменения значения слайдера
  const handleSliderChange = (event) => {
      setPriceRange(event.target.value); // Обновляем состояние при изменении
  };

  const [activeIndex, setActiveIndex] = useState(null);
  // Состояние для хранения активного элемента
  const [activeIndex2, setActiveIndex2] = useState(null);

  // Обработчик клика по элементу
  const handleClick2 = (index) => {
    setActiveIndex2(index);
  };

    const handleClick = (index) => {
        if (activeIndex === index) {
            // Если нажатый элемент уже активен, сбросить состояние
            setActiveIndex(null);
        } else {
            // Установить нажатый элемент активным
            setActiveIndex(index);
        }
    };
    

    // Состояние для активного индекса в sidebar-size
    const [activeSizeIndex, setActiveSizeIndex] = useState(null);

    const handleSizeClick = (index) => {
        if (activeSizeIndex === index) {
            setActiveSizeIndex(null);
        } else {
            setActiveSizeIndex(index);
        }
    };
    


    
  
  return (
    <div className='grid-container'>
        <div className='sidebar'>
          <div className='sidebar-categories'>
            <p className='main-punkt'>Categories</p>
            <p onClick={() => handleClick(0)} 
                style={{ color: activeIndex === 0 ? 'green' : activeIndex !== null ? 'black' : 'initial' }}>House Plants<span>(33)</span></p>
            <p onClick={() => handleClick(1)} 
                style={{ color: activeIndex === 1 ? 'green' : activeIndex !== null ? 'black' : 'initial' }}>Potter Plants<span>(12)</span></p>
            <p onClick={() => handleClick(2)} 
                style={{ color: activeIndex === 2 ? 'green' : activeIndex !== null ? 'black' : 'initial' }}>Seeds<span>(65)</span></p>
            <p onClick={() => handleClick(3)} 
                style={{ color: activeIndex === 3 ? 'green' : activeIndex !== null ? 'black' : 'initial' }}>Small Plants<span>(39)</span></p>
            <p onClick={() => handleClick(4)} 
                style={{ color: activeIndex === 4 ? 'green' : activeIndex !== null ? 'black' : 'initial' }}>Big Plants<span>(23)</span></p>
            <p onClick={() => handleClick(5)} 
                style={{ color: activeIndex === 5 ? 'green' : activeIndex !== null ? 'black' : 'initial' }}>Succulents<span>(17)</span></p>
            <p onClick={() => handleClick(6)} 
                style={{ color: activeIndex === 6 ? 'green' : activeIndex !== null ? 'black' : 'initial' }}>Terrariums<span>(19)</span></p>
            <p onClick={() => handleClick(7)} 
                style={{ color: activeIndex === 7 ? 'green' : activeIndex !== null ? 'black' : 'initial' }}>Gardening<span>(13)</span></p>
            <p onClick={() => handleClick(8)} 
                style={{ color: activeIndex === 8 ? 'green' : activeIndex !== null ? 'black' : 'initial' }}>Accessories<span>(18)</span></p>
          </div>
          

          <div className='sidebar-price'>
            <p className='main-punkt'>Price Range</p>
            <div className="slider-container">
                        <input 
                            type="range" 
                            min="39" 
                            max="2000" 
                            value={priceRange} // Привязка состояния к значению слайдера
                            className="slider" 
                            id="mySlider" 
                            onChange={handleSliderChange} // Обработчик изменения
                        />
                    </div>
                    <p>Price: <span>$39 - ${priceRange}</span></p>
                    <button>Filter</button>
          </div>

          <div className='sidebar-size'>
            <p className='main-punkt'>Size</p>
            <p onClick={() => handleSizeClick(0)} 
                style={{ color: activeSizeIndex === 0 ? 'green' : activeSizeIndex !== null ? 'black' : 'initial' }}>Small<span>(119)</span></p>
            <p onClick={() => handleSizeClick(1)} 
                style={{ color: activeSizeIndex === 1 ? 'green' : activeSizeIndex !== null ? 'black' : 'initial' }}>Medium<span>(86)</span></p>
            <p onClick={() => handleSizeClick(2)} 
                style={{ color: activeSizeIndex === 2 ? 'green' : activeSizeIndex !== null ? 'black' : 'initial' }}>Large<span>(78)</span></p>
          </div>
          <div className='sidebar-image-container'></div>
        </div>
        
        <div className='sort'>
            <div className='sort-category'>
                <p onClick={() => handleClick2(0)} 
          className={activeIndex2 === 0 ? 'active' : ''}>All Plants</p>
                <p onClick={() => handleClick2(1)} 
          className={activeIndex2 === 1 ? 'active' : ''}>New Arrivals</p>
                <p onClick={() => handleClick2(2)} 
          className={activeIndex2 === 2 ? 'active' : ''}>Sale</p>
            </div>
            <div className='sort-by'>
                <p>Sort by: </p>
                <select class="dropdown">
                    <option value="all">Default sorting ↓</option>
                    <option value="az">A-Z sorting ↓</option>
                    <option value="priceasc">Price ASC sorting ↓</option>
                </select>
            </div>
        </div>
        
        <div className='products'>
            <div className='item'>
            <img src='./img/flower1.png'></img>
            <p>Barberton Daisy</p>
            <p className='priceT'>$119.00</p> 
            </div>

            <div className='item'>
            <img src='./img/flower2.png'></img>
            <p>Angel Wing Begonia</p>
            <p className='priceT'>$169.00</p> 
            </div>

            <div className='item'>
            <img src='./img/flower3.png'></img>
            <p>African Violet</p>
            <p className='priceT'>$199.00</p> 
            </div>

            <div className='item'>
            <img src='./img/flower4.png'></img>
            <p>Beach Spider Lily</p>
            <p className='priceT'>$129.00</p> 
            </div>

            <div className='item'>
            <img src='./img/flower5.png'></img>
            <p>Blushing Bromeliad</p>
            <p className='priceT'>$139.00</p> 
            </div>

            <div className='item'>
            <img src='./img/flower6.png'></img>
            <p>Aluminum Plant</p>
            <p className='priceT'>$179.00</p> 
            </div>

            <div className='item'>
            <img src='./img/flower7.png'></img>
            <p>Bird's Nest Fern</p>
            <p className='priceT'>$99.00</p> 
            </div>

            <div className='item'>
            <img src='./img/flower8.png'></img>
            <p>Broadleaf Lady Palm</p>
            <p className='priceT'>$59.00</p> 
            </div>

            <div className='item'>
            <img src='./img/flower9.png'></img>
            <p>Chinese Evergreen</p>
            <p className='priceT'>$39.00</p> 
            </div>
      </div>

        <div className='nav'>
            <div className='nav-buttons'>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>&gt;</button>
            </div>
        </div>

    </div>
  )
}
