import { HiShoppingBag, HiShoppingCart } from 'react-icons/hi';
import { IoLogoUsd } from 'react-icons/io';
import { PiUsersThreeFill } from 'react-icons/pi';
import Card from '../components/Card';
import Title from '../components/Title';

import BuyerProfileChart from '../components/BuyerProfileChart';
import PopularProducts from '../components/PopularProducts';
import ResentOrders from '../components/ResentOrders';
import TransactionsChart from '../components/TransactionsChart';

const CardData = [
    {
        id: 1,
        name: 'Total Sales',
        icon: <HiShoppingBag size={25} />,
        price: '$40,000',
        color: '#4BA1E4',
    },
    {
        id: 2,
        name: 'Total Expenses',
        icon: <IoLogoUsd size={25} />,
        price: '$215,000',
        color: '#DB602D',
    },
    {
        id: 3,
        name: 'Total Customers',
        icon: <PiUsersThreeFill size={25} />,
        price: '215245',
        color: '#F3CD49',
    },
    {
        id: 4,
        name: 'Total Orders',
        icon: <HiShoppingCart size={25} />,
        price: '34678',
        color: '#4CA155',
    },
];

const Dashboard = () => {
    return (
        <div className="z-10 relative">
            <Title>Dashboard</Title>

            <div className="grid xl:grid-cols-4 ld:grid-cols-4 md:grid-cols-2 gap-4">
                {CardData.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>

            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 w-full mt-9 ">
                {/* Left */}
                <TransactionsChart />

                {/* Right */}
                <BuyerProfileChart />
            </div>

            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 w-full mt-9 ">
                {/* Left */}
                <ResentOrders />

                {/* Right */}
                <PopularProducts />
            </div>
        </div>
    );
};

export default Dashboard;
