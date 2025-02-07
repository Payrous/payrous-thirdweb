import Image from 'next/image';
import React from 'react';

interface PropCardProps {
  icon: string;
  description: string;
}

const PropCard: React.FC<PropCardProps> = ({ icon, description }) => {
  return (
    <div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center p-6 gap-4 text-center relative z-20 justify-center'>
      <Image src={icon} alt='icon' className='w-12 h-12 md:w-16 md:h-16' />
      <p className='text-sm md:text-base font-source text-colors-BlueGray'>{description}</p>
    </div>
  );
};

export default PropCard;