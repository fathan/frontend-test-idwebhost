/* eslint-disable max-len */
import { Outlet } from 'react-router-dom';
import OrganismNavbar from '../../organisms/OrganismNavbar';

const TemplateDefault = () => {
  return (
    <>
      <OrganismNavbar />

      <div className='container mx-auto lg:p-6'>
        <Outlet />
      </div>
    </>
  )
}

export default TemplateDefault;
