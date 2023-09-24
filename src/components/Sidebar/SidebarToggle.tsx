import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

interface Props {
    sidebarOpen: React.ReactNode;
    setSidebarOpen: React.ReactNode | any;
}

const SidebarToggle = ({ sidebarOpen, setSidebarOpen }: Props) => {
    return (
        <div
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className=" bg-redColor px-[6px] py-[6px]  rounded-full hover:bg-secondaryColor transition-all duration-200 cursor-pointer absolute bottom-[200px] 
                border-[6px] border-bgColor -right-[19px] hidden md:block"
        >
            {!sidebarOpen ? (
                <FaAngleLeft size={18} className="text-white" />
            ) : (
                <FaAngleRight size={18} className="text-white" />
            )}
        </div>
    );
};

export default SidebarToggle;
