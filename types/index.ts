import { Product, User, Order } from './models'
/
 * GlamCS Cosmetics application types and interfaces.
 *
 * This file defines the types and interfaces specific to the GlamCS brand,
 * ensuring a modern and high-end design for the cosmetics industry.
 */

// Define the available color palette for GlamCS
export type ColorPalette = {
  primary: string;  // Main brand color: orange
  secondary: string;  // Secondary brand color: white
}
// GlamCS colors
export const GlamCSColors: ColorPalette = {
  primary: '#FFA500', // Orange color
  secondary: '#FFFFFF', // White color
}
// Interface for a single cosmetic product
export interface GlamCSProduct extends Product {
  id: string;  // Unique identifier for the product
  name: string;  // Name of the cosmetic product
  description: string;  // Detailed description of the product
  price: number;  // Price of the product
  category: string;  // Specifying the category (e.g., lipstick, foundation)
  imageUrl: string;  // URL for the product image
  inStock: boolean;  // Availability status
}

// Interface for a user in the GlamCS cosmetics application
export interface GlamCSUser extends User {
  id: string;  // Unique identifier for the user
  name: string;  // Full name of the user
  email: string;  // Email address for notifications and orders
  passwordHash: string;  // Secure password storage
  preferences: string[];  // Array of user preferences for recommendations
}

// Interface for an order made by a user
export interface GlamCSOrder extends Order {
  orderId: string;  // Unique identifier for the order
  userId: string;  // ID of the user who made the order
  productList: GlamCSProduct[];  // List of products included in the order
  totalPrice: number;  // Total order price
  orderDate: Date;  // Date when the order was placed
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';  // Order status
}

// Export all types and interfaces for use in other parts of the application
export { GlamCSProduct, GlamCSUser, GlamCSOrder };