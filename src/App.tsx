import React from 'react';

// components
import { Slider } from './components/Slider';
// interfaces
import { Person } from './interfaces/person.interface';
// api
import data from './api/data.json';

export const App = () => {
  const people: Person[] = data;
  console.log(people);
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-gray-900 text-5xl font-bold">
          Carousel - React Slick
        </h1>
        <div className="mt-10 w-full max-w-full">
          <Slider people={people} />
        </div>
      </div>
    </div>
  );
};
