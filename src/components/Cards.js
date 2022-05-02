import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/metallica.jpg'
              text='Best rock tunes'
              label='Rock'
              path='/products'
            />
            <CardItem
              src='images/daftpunk.jpg'
              text='Best electronic tunes'
              label='Electronic'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/dualipa.jpg'
              text='Best pop tunes'
              label='Pop'
              path='/products'
            />
            <CardItem
              src='images/badbunny.jpg'
              text='Best Trap tunes'
              label='Trap'
              path='/products'
            />
            <CardItem
              src='images/kavinsky.jpg'
              text='Best Synthwave tunes'
              label='Synthwave'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
