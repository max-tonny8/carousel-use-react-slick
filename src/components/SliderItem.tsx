import React from 'react';

// interfaces
import { Person } from '../interfaces/person.interface';

const SliderItem = ({
  person: { name, picture, position, biography }
}: SliderItemProps) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="p-4">
        <div className="h-full text-center">
          <img
            alt={name}
            className="inline-block mb-8 w-20 h-20 bg-gray-100 border-2 border-gray-200 rounded-full object-cover object-center"
            src={picture}
          />
          <p className="leading-relaxed">{biography}</p>
          <span className="inline-block mb-4 mt-6 w-10 h-1 bg-indigo-500 rounded"></span>
          <h2 className="text-gray-900 text-sm font-medium tracking-wider uppercase">
            {name}
          </h2>
          <p className="text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
};

type SliderItemProps = {
  person: Person;
};

export default SliderItem;
