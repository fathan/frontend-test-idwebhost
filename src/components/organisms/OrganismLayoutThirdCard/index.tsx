import React from 'react';
import MoleculeCard from './../../molecules/MoleculeCard';

const OrganismLayoutThirdCard: React.FC = () => {
  const cardsData = [
    { title: 'Sendangrejo', content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', updatedAt: 'Last updated 5 mins ago' },
    { title: 'Sleman', content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', updatedAt: 'Last updated 10 mins ago' },
    { title: 'Minggir', content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', updatedAt: 'Last updated 15 mins ago' },
    { title: 'Sendangrejo', content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', updatedAt: 'Last updated 5 mins ago' },
    { title: 'Sleman', content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', updatedAt: 'Last updated 10 mins ago' },
    { title: 'Minggir', content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', updatedAt: 'Last updated 15 mins ago' }
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {cardsData.map((card, index) => (
        <MoleculeCard 
          key={index}
          title={card.title}
          content={card.content}
          updatedAt={card.updatedAt}
          backgroundColor='bg-white'
        />
      ))}
    </div>
  );
};

export default OrganismLayoutThirdCard;
