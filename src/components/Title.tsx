import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
    className?: string;
}

const Title = ({ children, className }: Props) => {
    return (
        <h2
            className={`${className} md:text-3xl text-2xl font-bold text-primaryColor mb-5`}
        >
            {children}
        </h2>
    );
};

export default Title;
