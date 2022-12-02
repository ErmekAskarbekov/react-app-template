/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontWeight: {
                xs: '300',
                s: '400',
                m: '500',
                l: '700'
            },
            fontSize: {
                xs: '16px',
                s: '18px',
                m: '20px',
                l: '36px'
            }
        },
    },
    plugins: [],
}