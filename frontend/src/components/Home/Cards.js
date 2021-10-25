import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of our services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'                                                                                                                                                                                                                                                                                                            
              text='Waste Collection Scheduling'
              label='Hauling'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Recycling services'
              label='Recycling'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Waste Management Equipment Hire'
              label='Hire'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Waste Containers'
              label='Containers'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Waste Compactor Hire'
              label='Compacting'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;