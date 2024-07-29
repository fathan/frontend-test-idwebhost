import { Link } from 'react-router-dom';
import { useAppSelector } from "../../../redux/hooks";

const OrganismNavbar = () => {
  const navbarName = useAppSelector((state) => state.app.navbarName);

  return (
    <>
      <div className="w-full bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-row justify-between items-center">
            <div className="my-4">
              <Link to="/">
                <h3 className="text-3xl text-black font-bold">
                  Frontend.
                </h3>
              </Link>
            </div>

            <div>
              <p className="flex gap-1">
                <span>{ navbarName }</span>
                <span className="hidden lg:block">Desktop</span>
                <span className="hidden md:block lg:hidden">Tablet</span>
                <span className="block md:hidden">Mobile</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
};

export default OrganismNavbar;