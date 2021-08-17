import React, { useEffect } from 'react';
import SlickSlider from 'react-slick';

// components
import SliderItem from './SliderItem';
// libs
import { slickSettings } from '../libs/slick-settings';
// interfaces
import { Person } from '../interfaces/person.interface';

export const Slider = ({ people }: SliderProps) => {
  useEffect(() => {}, []);

  return (
    <div className="w-full max-w-full">
      <SlickSlider className="flex overflow-hidden" {...slickSettings}>
        {people.map(person => (
          <SliderItem key={person.id} person={person} />
        ))}
      </SlickSlider>
    </div>
  );
};

type SliderProps = {
  people: Person[];
};
