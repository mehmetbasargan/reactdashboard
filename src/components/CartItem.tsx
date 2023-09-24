import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
    className?: string;
}

const CartItem = ({ children, className }: Props) => {
    return (
        <div className={`${className} bg-white drop-shadow-xl rounded-md`}>
            {children}
        </div>
    );
};

export default CartItem;
