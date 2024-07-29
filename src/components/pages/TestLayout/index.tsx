import { useEffect } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { setNavbarName } from '../../../redux/features/appSlice';

import OrganismCarouselImage from '../../organisms/OrganismCarouselImage';
import OrganismLayoutFirstCard from '../../organisms/OrganismLayoutFirstCard';

import CarouselImage1 from '../../../assets/images/carousel-image-1.png';
import CarouselImage2 from '../../../assets/images/carousel-image-2.png';
import CarouselImage3 from '../../../assets/images/carousel-image-3.png';
import LogoFrontend from '../../../assets/images/logo-frontend.png';

const TestLayout = () => {
  const dispatch = useAppDispatch();

  const images = [
    { src: CarouselImage1, name: 'Carousel Image 1', text: LogoFrontend },
    { src: CarouselImage2, name: 'Carousel Image 2', text: LogoFrontend },
    { src: CarouselImage3, name: 'Carousel Image 3', text: LogoFrontend },
  ];

  const initialize = () => {
    dispatch(setNavbarName('Layout 1'));
  };

  useEffect(() => {
    initialize();
  }); 

  return (
    <>
      <div className='container p-4'>
        <OrganismCarouselImage images={images} />
        <OrganismLayoutFirstCard />
      </div>
    </>
  );
};

export default TestLayout;