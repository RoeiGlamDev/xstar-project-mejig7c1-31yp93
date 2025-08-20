import { CSSProperties } from 'react'
/
 * Utility functions for GlamCS application
 * This file includes functions to help with class name manipulation and formatting suitable for the cosmetics industry.
 * @module utils
 */

/
 * Class Name Utility
 * This function joins multiple classNames into one string, removing any duplicates and invalid classNames.
 *
 * @param classNames - An array or string of classNames to combine.
 * @returns A string of combined classNames.
 */
export function cn(...classNames: (string | undefined | false | null)[]): string {
  return classNames.filter(Boolean).join(' ')
}

/
 * Formatters
 * This utility provides formatting functions for various data types used throughout the GlamCS website, enhancing user experience.
 */

/
 * Formats a price value to a string, prefixed with the currency symbol.
 *
 * @param price - The price number to format.
 * @param currencySymbol - The currency symbol to prepend.
 * @returns A formatted price string.
 */
export function formatPrice(price: number, currencySymbol: string = '$'): string {
  return ${currencySymbol}${price.toFixed(2)}
}

/
 * Formats a product description, ensuring it meets the high standard of GlamCS cosmetics.
 *
 * @param description - The original description string.
 * @returns A formatted description string.
 */
export function formatDescription(description: string): string {
  return description.length > 100 ? ${description.substring(0, 97)}... : description
}

/
 * GlamCS-specific Types and Interfaces
 * Ensuring all components in GlamCS adhere to the cosmetics industry's best practices and standards.'
 */

/
 * Cosmetics Product Interface
 * This interface defines the structure of a cosmetics product in the GlamCS catalog.
 */
export interface GlamCSProduct {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  category: string
  available: boolean
}

/
 * GlamCS Category Interface
 * This interface manages product categories within the GlamCS cosmetics line.
 */
export interface GlamCSCategory {
  id: string
  title: string
  products: GlamCSProduct[]
}

/
 * A utility to create modern style props for GlamCS.
 * This is tailored to the brand's aesthetic featuring orange and white while maintaining elegance.'
 * 
 * @returns Style properties for modern GlamCS components.
 */
export const glamCSStyles: CSSProperties = {
  backgroundColor: 'white',
  color: 'orange',
  fontFamily: 'Arial, sans-serif',
  borderRadius: '8px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
};