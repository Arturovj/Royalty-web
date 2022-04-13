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
              src='images/img-9.jpg'
              text='Best rock tunes'
              label='Rock'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Best electronic tunes'
              label='Electronic'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Best pop tunes'
              label='Pop'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Best Trap tunes'
              label='Trap'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Best Synthwave tunes'
              label='Synthwave'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
