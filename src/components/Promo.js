import React from 'react'

export default function Promo() {
  return (
    <div className='promo-container'>
        <div className='promo-text'>
          <h2>WELCOME TO GREENSHOP</h2>
          <h1>LET'S MAKE A BETTER <span>PLANET</span></h1>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
          <button>SHOP NOW</button>
        </div>
        <div className='promo-image'>
          <img src='./img/promo-flower.png' alt='Изображение цветка'></img>
        </div>
    </div>
  )
}
