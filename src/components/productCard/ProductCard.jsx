import React, { useContext, useEffect } from 'react';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';

function ProductCard() {
    const context = useContext(myContext);
    const { mode, product, searchkey, filterType, filterPrice } = context;

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Added to cart');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>
                        Our Latest Collection
                    </h1>
                    <div className="h-1 w-20 bg-[#a77f44] rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    {product
                        .filter((obj) => obj.title.toLowerCase().includes(searchkey))
                        .filter((obj) => obj.category.toLowerCase().includes(filterType))
                        .filter((obj) => obj.price.toString().includes(filterPrice))
                        .slice(0, 8)
                        .map((item, index) => {
                            const { title, price, imageUrl, id } = item;
                            return (
                                <div key={index} className="p-4 md:w-1/4">
                                    <div
                                        className={`h-full rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${mode === 'dark' ? 'bg-orange-400' : 'bg-yellow-400'}`}
                                    >
                                        <div onClick={() => (window.location.href = `/productinfo/${id}`)} className="flex justify-center cursor-pointer">
                                            <img className="rounded-md w-full h-48 object-cover" src={imageUrl} alt={title} />
                                        </div>
                                        <div className="p-5">
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h1>
                                            <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Rs: {price}</p>
                                            <div className="flex justify-center">
                                                <button
                                                    type="button"
                                                    onClick={() => addCart(item)}
                                                    className="focus:outline-none text-white bg-[#FFCC00] hover:bg-[#d39e4e] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2 transition-colors duration-300"
                                                >
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}

export default ProductCard;
