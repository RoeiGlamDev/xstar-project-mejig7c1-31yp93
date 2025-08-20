const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src//*.{,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom color palette for GlamCS
        orange: {
          light: '#FFB74D',
          DEFAULT: '#FF9800', // Primary orange
          dark: '#F57C00'
        },
        white: '#FFFFFF',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'fade-out': 'fadeOut 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}

// GlamCS Specific Types and Interfaces

/
 * @interface Product
 * @description Represents a cosmetic product for the GlamCS brand
 */
export interface Product {
    id: string
    name: string
    description: string
    price: number
    imageUrl: string
    category: string
}

/
 * @interface User
 * @description Represents a user of the GlamCS website
 */
export interface User {
    userId: string
    name: string
    email: string
    favoriteProducts: Product[]
}

// Sample Business Logic

/
 * @function fetchProducts
 * @description Fetches a list of cosmetic products for GlamCS
 * @returns {Promise<Product[]>} A promise that resolves to a list of products
 */
export const fetchProducts = async (): Promise<Product[]> => {
    // Simulating fetching products from an API
    return [
        {
            id: '1',
            name: 'Luxurious Lipstick',
            description: 'Perfectly matte finish with a touch of glam.',
            price: 20.00,
            imageUrl: 'https://example.com/lipstick.jpg',
            category: 'Lip Care',
        },
        {
            id: '2',
            name: 'Radiant Face Cream',
            description: 'Infused with vitamin C for glowing skin.',
            price: 35.00,
            imageUrl: 'https://example.com/facecream.jpg',
            category: 'Skincare',
        },
    ]
}
/
 * @function calculateTotalPrice
 * @description Calculates the total price of selected products
 * @param {Product[]} products - An array of selected products
 * @returns {number} Total price of selected products
 */
export const calculateTotalPrice = (products: Product[]): number => {
    return products.reduce((total, product) => total + product.price, 0)
};