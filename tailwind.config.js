module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
        },
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            colors: {

                'primary': '#1993e7',
                'primary-dark': '#196be7',
                'secondary': '#ecc94b',
                "description": "#1475b7",

            },
            spacing: {
                100: '28rem',
                128: '32rem',
                140: '40rem',
            },
        },
    },
    variants: {
        extend: {
            margin: ['responsive', 'hover'],
        },

    },
    plugins: [
        // require('@tailwindcss/forms'),
    ],
}