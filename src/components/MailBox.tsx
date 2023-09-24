import { useClickOutside } from '@mantine/hooks';
import { Link } from 'react-router-dom';

import User from '../assets/undraw_profile.svg';

interface Props {
    mailBox: React.ReactNode;
    setMailBox: React.ReactNode | any;
}

const MailBox = ({ mailBox, setMailBox }: Props) => {
    const closeMailBox = useClickOutside(() => setMailBox(false));

    return (
        <div>
            {mailBox && (
                <div
                    ref={closeMailBox}
                    className="absolute bg-white md:w-[350px] w-[250px] min-h-[150px] right-[-80px] md:right-0  !mx-auto top-[50px] rounded-md overflow-hidden"
                >
                    <div className=" bg-primaryColor py-2 w-full">
                        <span className="text-white w-full ml-4 text-[12px] font-bold">
                            MESSAGE CENTER
                        </span>
                    </div>

                    {/* Mail */}
                    <div className="">
                        {/* item */}
                        <div className="group">
                            <Link
                                to="/"
                                className="flex items-center gap-3 border-b last:border-b-none border-black/10 group-hover:bg-black/[0.05] md:p-4 p-2"
                            >
                                <div className="bg-primaryColor h-[40px] w-[40px] text-white rounded-full flex-none flex items-center justify-center relative">
                                    <img src={User} alt="user" />
                                    <span className="bg-green-500 w-[10px] h-[10px] absolute bottom-0 right-0 rounded-full"></span>
                                </div>
                                <div className="py-1">
                                    <p className="md:text-[14px] text-[12px] text-black">
                                        Hi there! I am wondering if you...
                                    </p>
                                    <span className="text-[12px] text-black/30">
                                        Emily Fowler · 58m
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* item */}
                        <div className="group">
                            <Link
                                to="/"
                                className="flex items-center gap-3 border-b last:border-b-none border-black/10 group-hover:bg-black/[0.05] md:p-4 p-2"
                            >
                                <div className="bg-primaryColor h-[40px] w-[40px] text-white rounded-full flex-none flex items-center justify-center relative">
                                    <img src={User} alt="user" />
                                    <span className="bg-gray-200 w-[10px] h-[10px] absolute bottom-0 right-0 rounded-full"></span>
                                </div>
                                <div className="py-1">
                                    <p className="md:text-[14px] text-[12px] text-black">
                                        Hi there! I am wondering if you...
                                    </p>
                                    <span className="text-[12px] text-black/30">
                                        Emily Fowler · 58m
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* item */}
                        <div className="group">
                            <Link
                                to="/"
                                className="flex items-center gap-3 border-b last:border-b-none border-black/10 group-hover:bg-black/[0.05] md:p-4 p-2"
                            >
                                <div className="bg-primaryColor h-[40px] w-[40px] text-white rounded-full flex-none flex items-center justify-center relative">
                                    <img src={User} alt="user" />
                                    <span className="bg-orange-500 w-[10px] h-[10px] absolute bottom-0 right-0 rounded-full"></span>
                                </div>
                                <div className="py-1">
                                    <p className="md:text-[14px] text-[12px] text-black">
                                        Hi there! I am wondering if you...
                                    </p>
                                    <span className="text-[12px] text-black/30">
                                        Emily Fowler · 58m
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* link */}
                    <Link to="/">
                        <div className="bg-black/10 py-2 text-center hover:bg-primaryColor hover:text-white">
                            <span className="text-[13px]">Show All Alerts</span>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MailBox;
