import React from 'react';
import './CarList.css';

const CarCard = ({ car, onSelect }) => {
  return (
    <div className="car-card" onClick={() => onSelect(car)}>
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>Price per day: ${car.pricePerDay}</p>
      <p>Transmission: {car.transmission}</p>
      <p>Fuel: {car.fuel}</p>
    </div>
  );
};

const dummyCars = [
  {
    id: 1,
    name: 'Toyota Corolla',
    image: 'https://source.unsplash.com/400x200/?toyota,car',
    pricePerDay: 45,
    transmission: 'Automatic',
    fuel: 'Petrol',
  },
  {
    id: 2,
    name: 'Honda Civic',
    image: 'https://source.unsplash.com/400x200/?honda,car',
    pricePerDay: 55,
    transmission: 'Manual',
    fuel: 'Diesel',
  },
  {
    id: 3,
    name: 'Tesla Model 3',
    image: 'https://source.unsplash.com/400x200/?tesla,car',
    pricePerDay: 90,
    transmission: 'Automatic',
    fuel: 'Electric',
  },
];

const CarList = ({ onSelect }) => {
  return (
    <section className="car-list">
      {dummyCars.map((car) => (
        <CarCard key={car.id} car={car} onSelect={onSelect} />
      ))}
    </section>
  );
};

export default CarList;
