import React from 'react';
import MoleculeCard from './../../molecules/MoleculeCard';

const OrganismLayoutFirstCard: React.FC = () => {
  const cardsData = [
    { title: 'Frontend', content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', updatedAt: 'Last updated 5 mins ago' },
    { title: 'Mockup', content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', updatedAt: 'Last updated 10 mins ago' },
    { title: 'Design', content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', updatedAt: 'Last updated 15 mins ago' },
    { title: 'Test', content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', updatedAt: 'Last updated 20 mins ago' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardsData.map((card, index) => (
        <MoleculeCard 
          key={index}
          title={card.title}
          content={card.content}
          updatedAt={card.updatedAt}
          backgroundColor='bg-gray-100'
        />
      ))}
    </div>
  );
};

export default OrganismLayoutFirstCard;
