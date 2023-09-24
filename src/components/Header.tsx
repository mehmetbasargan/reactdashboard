import { BiSolidBell } from 'react-icons/bi';
import { BsListUl } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';
import { PiEnvelopeSimple } from 'react-icons/pi';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../assets/undraw_profile.svg';

import { useClickOutside } from '@mantine/hooks';
import MailBox from './MailBox';
import MessageBox from './MessageBox';

const Header = () => {
    const [dropdown, setdropdown] = useState(false);
    const closeDropdown = useClickOutside(() => setdropdown(false));

    const [searchMobile, setSearchMobile] = useState(false);
    const closeMobileSearch = useClickOutside(() => setSearchMobile(false));

    const [message, setMessage] = useState(false);
    const [mailBox, setMailBox] = useState(false);

    return (
        <div className="px-5 py-[13px] border-b-[1px] border-b-white/40 drop-shadow-lg bg-white !z-50 relative">
            <div className="flex items-center justify-between gap-5">
                {/* Search */}
                <div className="md:flex-1">
                    <form className=" xl:w-[100%] md:w-[90%] h-[40px] hidden border-[1px] px-5 md:flex gap-2 rounded-full overflow-hidden">
                        <input
                            type="email"
                            placeholder="Search for..."
                            className="w-full  focus:outline-none"
                        />
                        <button className="text-black">
                            <HiOutlineSearch size={20} />
                        </button>
                    </form>
                </div>

                {/* user */}
                <div className="flex flex-1 items-center justify-end md:gap-5 gap-3 z-50 relative">
                    <div className="flex items-center gap-5 border-r-[2px] px-5 relative">
                        <div
                            onClick={() => setSearchMobile(!searchMobile)}
                            className="md:hidden"
                        >
                            <div className="">
                                <HiOutlineSearch size={20} />
                            </div>
                        </div>

                        <span
                            onClick={() => setMessage(!message)}
                            className="text-black/[45%] relative cursor-pointer"
                        >
                            <BiSolidBell size={22} />
                            <span className="absolute -top-[4px] -right-[3px] text-[10px] font-bold text-white bg-red-500 h-[15px] w-[15px] rounded-[4px] flex items-center justify-center">
                                3
                            </span>

                            {/* message */}
                            <MessageBox
                                message={message}
                                setMessage={setMessage}
                            />
                        </span>

                        <span
                            onClick={() => setMailBox(!mailBox)}
                            className="text-black/[45%] relative cursor-pointer"
                        >
                            <PiEnvelopeSimple size={22} />
                            <span className="absolute -top-[4px] -right-[3px] text-[10px] font-bold text-white bg-red-500 h-[15px] w-[15px] rounded-[4px] flex items-center justify-center">
                                3
                            </span>

                            {/* mail box */}
                            <MailBox
                                mailBox={mailBox}
                                setMailBox={setMailBox}
                            />
                        </span>
                    </div>

                    <div className="">
                        <div
                            onClick={() => setdropdown(!dropdown)}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <span className="text-[12px] flex-none hidden md:block">
                                Admin User
                            </span>
                            <span>
                                <IoIosArrowDown />
                            </span>
                            <img src={User} alt="user" className="h-[35px]" />
                        </div>
                        {/* Dropdown */}
                        {dropdown && (
                            <div
                                ref={closeDropdown}
                                className="absolute bg-white w-[150px] min-h-[150px] right-[0px] mt-5 rounded-md overflow-hidden !z-40 "
                            >
                                <span className="text-[14px] bg-black/10 flex justify-start pl-5 py-2 md:hidden ">
                                    Admin User
                                </span>
                                <ul className="!z-50 !relative">
                                    <li className="hover:bg-black/10 px-3 py-2">
                                        <Link
                                            to="/"
                                            className="flex items-center gap-2 text-[13px] "
                                        >
                                            <FaUser
                                                size={14}
                                                className="text-black/20"
                                            />
                                            <span className="">Profile</span>
                                        </Link>
                                    </li>
                                    <li className="hover:bg-black/10 px-3 py-2">
                                        <Link
                                            to="/"
                                            className="flex items-center gap-2 text-[13px] "
                                        >
                                            <IoSettingsSharp
                                                size={15}
                                                className="text-black/20"
                                            />
                                            <span className="">Settings</span>
                                        </Link>
                                    </li>
                                    <li className="hover:bg-black/10 px-3 py-2">
                                        <Link
                                            to="/"
                                            className="flex items-center gap-2 text-[13px] "
                                        >
                                            <BsListUl className="text-black/20" />
                                            <span className="">Active Log</span>
                                        </Link>
                                    </li>
                                    <li className="hover:bg-black/10 px-3 py-2 border-t-[1px] mt-1">
                                        <Link
                                            to="/"
                                            className="flex items-center gap-2 text-[13px] py-2 "
                                        >
                                            <MdLogout className="text-black/20" />
                                            <span className="">Logout</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="absolute left-0 right-0 top-[101%] w-[100%] z-50">
                    {searchMobile && (
                        <div
                            ref={closeMobileSearch}
                            className="bg-primaryColor w-full h-[70px]"
                        >
                            <form className="flex items-center justify-center  w-full h-[70px]">
                                <input
                                    type="text"
                                    placeholder="Search for..."
                                    className="!w-[90%]  h-[40px] px-2 focus:outline-none border-[1px]"
                                />
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
