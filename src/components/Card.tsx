import { CardData } from '../types';

interface Props {
    item: CardData;
}
const Card = ({ item }: Props) => {
    return (
        <div className="bg-white drop-shadow-lg p-5 rounded-md flex items-center justify-between z-20">
            <div className="flex items-center gap-4">
                <div
                    className="w-[50px] h-[50px] rounded-full text-white flex items-center justify-center"
                    style={{ backgroundColor: item.color }}
                >
                    {item.icon}
                </div>

                <div>
                    <h2 className="text-primaryColor xl:text-[15px] lg:text-[13px] text-[12px] font-bold">
                        {item.name}
                    </h2>
                    <p className="md:text-[22px] text-[14px] font-bold text-secondaryColor">
                        {item.price}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
