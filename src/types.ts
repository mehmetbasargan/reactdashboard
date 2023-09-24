/* Card Data */
export interface CardData {
    id: number;
    name: string;
    icon: JSX.Element;
    price: string;
    color: string;
}

/* Products Type */
export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export interface Rating {
    rate: number;
    count: number;
}
