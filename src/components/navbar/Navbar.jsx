import React, { Fragment, useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { RxCross2 } from 'react-icons/rx';
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';

function Navbar() {
  const context = useContext(myContext);
  const { mode, toggleMode } = context;

  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const cartItems = useSelector((state) => state.cart);

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login';
  };

  return (
    <div className={`sticky top-0 z-50`}>
      {/* Mobile Menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          {/* Dialog transition code... */}
        </Dialog>
      </Transition.Root>

      {/* Main Navbar */}
      <header className="relative mb-2">
        <nav aria-label="Top" className={`px-4 sm:px-6 lg:px-8 shadow-xl ${mode === 'dark' ? 'bg-yellow-600 text-white' : 'bg-yellow-300 text-gray-900'}`}>
          <div>
            <div className={`flex h-16 items-center`}>
              <button
                type="button"
                className={`rounded-md p-2 lg:hidden ${mode === 'dark' ? 'bg-yellow-500 text-white' : 'bg-yellow-300 text-gray-400'}`}
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to='/' className='flex'>
                  <h1 className={`text-2xl font-bold px-2 py-1 rounded ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Food<span className='text-[#eecc99]'>Store</span>
                  </h1>
                </Link>
              </div>

              {/* Navbar Links */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link to='/allproducts' className={`text-sm font-medium ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                    All Products
                  </Link>
                  {user ? (
                    <Link to='/order' className={`text-sm font-medium ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      Order
                    </Link>
                  ) : (
                    <Link to='/signup' className={`text-sm font-medium ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      Signup
                    </Link>
                  )}

                  {user?.user?.email === 'admin@gmail.com' && (
                    <Link to='/dashboard' className={`text-sm font-medium ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      Dashboard
                    </Link>
                  )}

                  {user && (
                    <a onClick={logout} className={`text-sm font-medium cursor-pointer ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      Logout
                    </a>
                  )}
                </div>

                {/* Country Selection */}
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className={`flex items-center ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/2560px-Flag-of-Pakistan.svg.png"
                      alt="Pakistan Flag"
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium">PAK</span>
                  </a>
                </div>

                {/* Theme Toggle */}
                <button onClick={toggleMode} className="hidden h-7 w-7 ml-3 lg:block">
                  {mode === 'dark' ? (
                    <FiSun className='text-xl' />
                  ) : (
                    <BsFillCloudSunFill className='text-yellow-500 text-xl' />
                  )}
                </button>

                {/* Cart Icon */}
                <Link to='/cart' className={`relative ml-4`}>
                  <IoCartSharp className={`text-2xl ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`} />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-semibold text-white">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
