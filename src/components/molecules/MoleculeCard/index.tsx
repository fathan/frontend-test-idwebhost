import React from 'react';

interface IMoleculeCardProps {
  title: string;
  content: string;
  updatedAt: string;
  backgroundColor?: string;
}

const MoleculeCard: React.FC<IMoleculeCardProps> = ({ title, content, updatedAt, backgroundColor = 'bg-white' }) => {
  return (
    <div className={`flex flex-col gap-4 w-full p-4 border border-[#E5E7EB] rounded-lg ${ backgroundColor }`}>
      <div className="font-bold text-lg text-[#1F2937]">
        {title}
      </div>
      <div className="text-base text-[#6B7280]">
        {content}
      </div>
      <div>
        <p className="text-[#6B7280]">
          {updatedAt}
        </p>
      </div>
    </div>
  );
};

export default MoleculeCard;
