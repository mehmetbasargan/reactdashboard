import { FaAngleRight } from 'react-icons/fa6';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { HiOutlineCube } from 'react-icons/hi2';
import { LuLayoutDashboard } from 'react-icons/lu';
import { PiUsersThree } from 'react-icons/pi';
import { TbFileInvoice, TbMessage2Cog } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const menu = [
    {
        id: 1,
        link: '/',
        name: 'Dashboard',
        icon: <LuLayoutDashboard />,
    },
    {
        id: 2,
        link: '/products',
        name: 'Products',
        icon: <HiOutlineCube />,
    },
    {
        id: 3,
        link: '/orders',
        name: 'Orders',
        icon: <HiOutlineShoppingCart />,
    },
    {
        id: 4,
        link: '/customers',
        name: 'Customers',
        icon: <PiUsersThree />,
    },
    {
        id: 5,
        link: '/transaction',
        name: 'Transaction',
        icon: <TbFileInvoice />,
    },
    {
        id: 6,
        link: '/reports',
        name: 'Messages',
        icon: <TbMessage2Cog />,
    },
];

interface Props {
    sidebarOpen: React.ReactNode;
}

const Menu = ({ sidebarOpen }: Props) => {
    return (
        <div className=" mt-5">
            <ul className="flex flex-col">
                {menu.map((item) => (
                    <NavLink key={item.id} to={item.link}>
                        <li className="text-white/60 border-b-[1px] border-b-white/40 md:py-4 py-2 hover:text-white transition-all duration-200">
                            {!sidebarOpen ? (
                                <div className="flex justify-between items-center w-full">
                                    <div className="md:flex items-center gap-2 ">
                                        <span className="lnk text-[20px]">
                                            {item.icon}
                                        </span>
                                        <span className="lnk !text-[12px] md:!text-[16px] xs:hidden sm:block">
                                            {item.name}
                                        </span>
                                    </div>
                                    <FaAngleRight className="hidden md:block" />
                                </div>
                            ) : (
                                <>
                                    <span className="lnk flex items-center justify-center text-[22px]">
                                        {item.icon}
                                    </span>
                                    <span></span>
                                </>
                            )}
                        </li>
                    </NavLink>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
