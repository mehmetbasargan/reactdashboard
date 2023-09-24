import { useEffect, useState } from 'react';
import { ProductType } from '../types';

const useFetch = (ulr: string) => {
    const [productData, setProductData] = useState<ProductType[]>([]);

    const [isLoading, setIsLoading] = useState<string | boolean>(false);
    const [error, setError] = useState<string | boolean>(false);

    /* Products Data Fetch */
    useEffect(() => {
        /* Products */
        const fetchProducts = async () => {
            setIsLoading(true);

            try {
                const res = await fetch(ulr);
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                const data = await res.json();
                setIsLoading(false);
                setProductData(data);
            } catch (error) {
                setIsLoading(false);
                setError('Something went wrong!');
                console.log((error as Error).message);
            }
        };
        fetchProducts();
    }, [ulr]);

    return {
        productData,
        isLoading,
        error,
    };
};

export default useFetch;
