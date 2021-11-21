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

                'primary': '#F77426',
                'primary-dark': '#fc5d19',
                'secondary': '#ecc94b',
                "description": "#db804a",

            },
            spacing: {
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