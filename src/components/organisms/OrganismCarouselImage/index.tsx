import React from 'react';
import { Carousel } from "flowbite-react";

interface IImage {
  src: string;
  name: string;
  text?: string;
}

interface ICarouselImageProps {
  images: IImage[];
}

const OrganismCarouselImage: React.FC<ICarouselImageProps> = ({ images }) => {
  return (
    <div className="h-56 sm:h-[350px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] mb-4">
      <Carousel indicators={false}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image.src} alt={image.name} className="w-full h-full object-cover" />
            {image.text && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
                <img src={image.text} alt="logo" className='w-2/12' />
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default OrganismCarouselImage;