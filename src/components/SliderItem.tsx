import React from 'react';

// interfaces
import { Person } from '../interfaces/person.interface';

const SliderItem = ({
  person: { name, picture, position, biography }
}: SliderItemProps) => {
  return (
    <div className="flex items-center justify-center w-full">
      <p className="text-gray-900 text-4xl">{name}</p>
    </div>
  );
};

type SliderItemProps = {
  person: Person;
};

export default SliderItem;
