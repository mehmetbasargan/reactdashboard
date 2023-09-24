import { FaStore } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

interface Props {
    sidebarOpen: React.ReactNode;
}

const Logo = ({ sidebarOpen }: Props) => {
    return (
        <div
            className={
                !sidebarOpen
                    ? 'flex items-center justify-between border-b-[1px] border-b-white/40 py-5'
                    : 'flex items-center justify-center border-b-[1px] border-b-white/40 py-5'
            }
        >
            <Link to="/">
                <div className="md:flex md:items-center md:gap-2 w-full">
                    {!sidebarOpen ? (
                        <>
                            <FaStore size={25} className="text-white" />
                            <span className="text-white font-bold md:text-[18px] text-[13px] xs:hidden sm:block">
                                E-Store
                            </span>
                        </>
                    ) : (
                        <div className="flex items-center">
                            <FaStore size={25} className="text-white" />
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
};

export default Logo;
