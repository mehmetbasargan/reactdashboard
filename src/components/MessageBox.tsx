import { useClickOutside } from '@mantine/hooks';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

interface Props {
    message: React.ReactNode;
    setMessage: React.ReactNode | any;
}

const MessageBox = ({ message, setMessage }: Props) => {
    const closeMessage = useClickOutside(() => setMessage(false));

    return (
        <div>
            {message && (
                <div
                    ref={closeMessage}
                    className="absolute bg-white md:w-[350px] w-[250px] min-h-[150px] right-[-80px] md:right-0  !mx-auto top-[50px] rounded-md overflow-hidden"
                >
                    <div className=" bg-primaryColor py-2 w-full">
                        <span className="text-white w-full ml-4 text-[12px] font-bold">
                            ALERTS CENTER
                        </span>
                    </div>

                    {/* Message */}
                    <div className="">
                        {/* item */}
                        <div className="group">
                            <Link
                                to="/"
                                className="flex items-center gap-3 border-b last:border-b-none border-black/10 group-hover:bg-black/[0.05] md:p-4 p-2"
                            >
                                <div className="bg-primaryColor h-[40px] w-[40px] text-white rounded-full flex-none flex items-center justify-center">
                                    <HiOutlineClipboardDocumentList size={20} />
                                </div>
                                <div className="py-1">
                                    <span className="text-[12px] text-black/30">
                                        September 09.2023
                                    </span>
                                    <p className="md:text-[14px] text-[12px] text-black">
                                        2019 A new monthly report is ready to
                                        download...
                                    </p>
                                </div>
                            </Link>
                        </div>

                        {/* item */}
                        <div className="group">
                            <Link
                                to="/"
                                className="flex items-center gap-3 border-b last:border-b-none border-black/10 group-hover:bg-black/[0.05] md:p-4 p-2"
                            >
                                <div className="bg-primaryColor h-[40px] w-[40px] text-white rounded-full flex-none flex items-center justify-center">
                                    <HiOutlineClipboardDocumentList size={20} />
                                </div>
                                <div className="py-1">
                                    <span className="text-[12px] text-black/30">
                                        September 09.2023
                                    </span>
                                    <p className="md:text-[14px] text-[12px] text-black">
                                        2019 A new monthly report is ready to
                                        download...
                                    </p>
                                </div>
                            </Link>
                        </div>

                        {/* item */}
                        <div className="group">
                            <Link
                                to="/"
                                className="flex items-center gap-3 border-b last:border-b-none border-black/10 group-hover:bg-black/[0.05] md:p-4 p-2"
                            >
                                <div className="bg-primaryColor h-[40px] w-[40px] text-white rounded-full flex-none flex items-center justify-center">
                                    <HiOutlineClipboardDocumentList size={20} />
                                </div>
                                <div className="py-1">
                                    <span className="text-[12px] text-black/30">
                                        September 09.2023
                                    </span>
                                    <p className="md:text-[14px] text-[12px] text-black">
                                        2019 A new monthly report is ready to
                                        download...
                                    </p>
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

export default MessageBox;
