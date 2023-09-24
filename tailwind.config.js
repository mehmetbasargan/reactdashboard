/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            xs: '320px',
            // => @media (min-width: 640px) { ... }
            sm: '576px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '992px',
            // => @media (min-width: 1024px) { ... }

            xl: '1200px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1400px',
            // => @media (min-width: 1536px) { ... }
        },

        extend: {
            colors: {
                primaryColor: '#003f5c',
                secondaryColor: '#58508d',
                pinkColor: '#bc5090',
                redColor: '#ff6361',
                orangeColor: '#ffa600',
                bgColor: '#f8f9fc',
            },
        },
    },
    plugins: [require('daisyui')],
};
