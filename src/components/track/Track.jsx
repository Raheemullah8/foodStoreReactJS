import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function Track() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <div>
            <section>
                <div className="container mx-auto px-5 md:py-5">
                    <div className="flex flex-wrap -m-4 text-center">
                        {/* Item 1: Fresh Fruits */}
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 rounded-lg" 
                                 style={{ 
                                     backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '#ddb925', // Change background color here
                                     color: mode === 'dark' ? 'white' : '' 
                                 }}>
                                <svg className="text-[#c89954] w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path d="M12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2Z" />
                                    <path d="M6 9H18C18.5523 9 19 9.44772 19 10V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V10C5 9.44772 5.44772 9 6 9Z" />
                                </svg>
                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Fresh Fruits</h2>
                                <p className="leading-relaxed">Enjoy a variety of fresh, organic fruits delivered straight to your doorstep.</p>
                            </div>
                        </div>

                        {/* Item 2: Gourmet Cheeses */}
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 rounded-lg" 
                                 style={{ 
                                     backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '#ddb925', // Change background color here
                                     color: mode === 'dark' ? 'white' : '' 
                                 }}>
                                <svg className="text-[#c8a165] w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path d="M12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2Z" />
                                    <path d="M6 9H18C18.5523 9 19 9.44772 19 10V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V10C5 9.44772 5.44772 9 6 9Z" />
                                </svg>
                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Gourmet Cheeses</h2>
                                <p className="leading-relaxed">Explore our selection of artisanal cheeses from around the world.</p>
                            </div>
                        </div>

                        {/* Item 3: Artisan Breads */}
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 rounded-lg" 
                                 style={{ 
                                     backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '#ddb925', // Change background color here
                                     color: mode === 'dark' ? 'white' : '' 
                                 }}>
                                <svg className="text-[#c8a165] w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path d="M12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2Z" />
                                    <path d="M6 9H18C18.5523 9 19 9.44772 19 10V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V10C5 9.44772 5.44772 9 6 9Z" />
                                </svg>
                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Artisan Breads</h2>
                                <p className="leading-relaxed">Freshly baked artisan breads, perfect for any meal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Track;
