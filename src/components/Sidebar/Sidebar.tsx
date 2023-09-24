import { useState } from 'react';
import Footer from '../Footer';
import Logo from './Logo';
import Menu from './Menu';
import SidebarToggle from './SidebarToggle';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div
                className={
                    !sidebarOpen
                        ? 'lg:w-[220px] md:w-[180px] md:block bg-primaryColor h-screen px-5'
                        : 'w-[80px] bg-primaryColor h-screen px-5'
                }
            >
                {/* logo */}
                <Logo sidebarOpen={sidebarOpen} />

                {/* Menu */}
                <Menu sidebarOpen={sidebarOpen} />

                {/* Sidebar Toggle */}
                <SidebarToggle
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
            </div>
            {!sidebarOpen ? (
                <div className=" bg-white/10 absolute bottom-0 w-full hidden sm:block">
                    <Footer />
                </div>
            ) : (
                <div className=" bg-white/10 h-[70px] absolute bottom-0 text-[20px] w-full flex items-center justify-center text-white/60">
                    &copy;
                </div>
            )}
        </>
    );
};

export default Sidebar;
