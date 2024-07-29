import OrganismLayoutThirdCard from '../../organisms/OrganismLayoutThirdCard';
import OrganismFilter from '../../organisms/OrganismFilter';

const TestSelect = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row gap-10 container p-4'>
        <div className='w-full lg:w-3/12'>
          <OrganismFilter />
        </div>

        <div className='w-full lg:w-9/12'>
          <OrganismLayoutThirdCard />
        </div>
      </div>
    </>
  );
};

export default TestSelect;
