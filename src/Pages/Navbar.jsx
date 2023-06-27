
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/your"
                  className="text-gray-800 hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Your
                </Link>
                <Link
                  to="/all"
                  className="text-gray-800 hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  All
                </Link>
                <Link
                  to="/blocked"
                  className="text-gray-800 hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blocked
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="text-gray-800 hover:bg-gray-300 hover:text-gray-800 ml-4"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6ZM5 4C3.89543 4 3 4.89543 3 6V8C3 9.10457 3.89543 10 5 10H19C20.1046 10 21 9.10457 21 8V6C21 4.89543 20.1046 4 19 4H5ZM5 14C3.89543 14 3 14.8954 3 16V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V16C21 14.8954 20.1046 14 19 14H5Z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H4ZM4 12C3.44772 12 3 12.4477 3 13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12H4ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2">
            <div className="mt-2">
              <Link
                to="/your"
                className="block text-gray-800 hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Your
              </Link>
              <Link
                to="/all"
                className="block text-gray-800 hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                All
              </Link>
              <Link
                to="/blocked"
                className="block text-gray-800 hover:bg-gray-300 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Blocked
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
