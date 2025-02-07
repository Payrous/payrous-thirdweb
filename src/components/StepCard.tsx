import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface StepCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ image, title, description }) => {
  return (
    <div className='bg-white rounded-lg font-source text-base text-colors-BlueGray shadow-md hover:shadow-lg relative pt-8'>
      {/* Blurred image at the bottom */}
      <div className="relative flex flex-col items-center">
                <Image src={image} alt={title} className="" />
                <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-white via-white/80 to-transparent"></div> 
            </div>

      {/* Content */}
      <div className='relative z-10 p-6 text-left'>
        <p className='text-bold text-xl font-bold mb-2'>{title}</p>
        <p className='text-sm text-gray-600'>{description}</p>
      </div>
    </div>
  );
};

export default StepCard;