import React, { useEffect } from 'react';
import SlickSlider from 'react-slick';

// components
import SliderItem from './SliderItem';
// interfaces
import { Person } from '../interfaces/person.interface';

const SLICK_SETTINGS = {
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

export const Slider = ({ people }: SliderProps) => {
  useEffect(() => {}, []);

  return (
    <div className="w-full max-w-full">
      <SlickSlider className="overflow-hidden" {...SLICK_SETTINGS}>
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
