import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const popularProductsData = [
    {
        id: '3432',
        product_name: 'Macbook M1 Pro 14"',
        product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
        product_price: '$1499.00',
        product_stock: 341,
    },
    {
        id: '7633',
        product_name: 'Samsung Galaxy Buds 2',
        product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
        product_price: '$399.00',
        product_stock: 24,
    },
    {
        id: '6534',
        product_name: 'Asus Zenbook Pro',
        product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
        product_price: '$899.00',
        product_stock: 56,
    },
    {
        id: '9234',
        product_name: 'LG Flex Canvas',
        product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
        product_price: '$499.00',
        product_stock: 98,
    },
    {
        id: '4314',
        product_name: 'Apple Magic Touchpad',
        product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
        product_price: '$699.00',
        product_stock: 0,
    },
    {
        id: '4342',
        product_name: 'Nothing Earbuds One',
        product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
        product_price: '$399.00',
        product_stock: 453,
    },
];

const PopularProducts = () => {
    return (
        <div className="xl:col-span-1 col-span-2">
            <CartItem className="overflow-hidden">
                <div className="border-b border-primaryColor/5 text-black py-3 px-3 font-bold">
                    Popular Products
                </div>

                <div className="xl:min-h-[400px]  bg-white xl:p-9 p-6 border border-gray-200 ">
                    <div className="flex flex-col gap-3">
                        {popularProductsData.map((item) => (
                            <div key={item.id}>
                                <Link
                                    to={`/product/${item.id}`}
                                    className="flex items-center justify-between gap-5"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className="bg-gray-200 w-11 rounded-full">
                                            <img
                                                src={item.product_thumbnail}
                                                alt={item.product_name}
                                                className="rounded-full w-11"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-left text-sm text-gray-800">
                                                {item.product_name}
                                            </p>
                                            <span
                                                className={`text-sm font-medium ${
                                                    item.product_stock === 0
                                                        ? 'text-orange-500'
                                                        : 'text-green-500'
                                                }`}
                                            >
                                                {item.product_stock === 0
                                                    ? 'Out of stock'
                                                    : item.product_stock +
                                                      ' in stock'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        ${item.product_price}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </CartItem>
        </div>
    );
};

export default PopularProducts;
