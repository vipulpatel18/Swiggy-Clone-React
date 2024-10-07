import React from 'react';
import Boxs from './Boxs'

export default function BestPlace () {
  const boxs = [
    'Best Restaurants in Bangalore',
  'Best Restaurants in Pune',
  'Best Restaurants in Mumbai',
  'Best Restaurants in Delhi',
  'Best Restaurants in Hyderabad',
  'Best Restaurants in Kolkata',
  'Best Restaurants in Chennai',
  'Best Restaurants in Chandigarh',
  'Best Restaurants in Ahmedabad',
  'Best Restaurants in Jaipur',
  'Best Restaurants in Nagpur',
  'Best Restaurants in Bhubaneswar',
  'Best Restaurants in Kochi',
  'Best Restaurants in Surat',
  'Best Restaurants in Dehradun',
  'Best Restaurants in Ludhiana',
  'Best Restaurants in Patna',
  'Best Restaurants in Mangaluru',
  'Best Restaurants in Bhopal',
  'Best Restaurants in Gurgaon',
  'Best Restaurants in Coimbatore',
  'Best Restaurants in Agra',
  'Best Restaurants in Noida',
  'Best Restaurants in Vijayawada',
  'Best Restaurants in Guwahati',
  'Best Restaurants in Mysore',
  'Best Restaurants in Pondicherry',
  'Best Restaurants in Thiruvananthapuram',
  'Best Restaurants in Ranchi',
  'Best Restaurants in Vizag',
  'Best Restaurants in Udaipur',
  'Best Restaurants in Vadodara'
  ];

  return (
    <div className='max-w-6xl m-auto mb-9'>
        <h1 className='text-2xl font-bold ms-9'>Best Places to Eat Across Cities</h1>
        <Boxs boxs={boxs}/>
    </div>
  );
};

