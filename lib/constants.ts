export const BRAND_NAME = "GlamCS"
export const COLORS = {
    PRIMARY: "#FFA500", // Orange
    SECONDARY: "#FFFFFF", // White
}
export const FONTS = {
    HEADER: "'Montserrat', sans-serif",
    BODY: "'Open Sans', sans-serif",
}
/
 * Interface representing a product in GlamCS cosmetics line.
 */
export interface Product {
    id: string
    name: string
    description: string
    price: number
    category: string
    imageUrl: string
}

/
 * Function to create a new product for GlamCS.
 * @param id - Unique identifier for the product
 * @param name - The name of the product
 * @param description - A detailed description of the product
 * @param price - The price of the product
 * @param category - The category the product belongs to (e.g., skincare, makeup)
 * @param imageUrl - The URL of the product image
 * @returns {Product} - A product object for GlamCS cosmetics
 */
export const createProduct = (
    id: string,
    name: string,
    description: string,
    price: number,
    category: string,
    imageUrl: string
): Product => {
    return {
        id,
        name,
        description,
        price,
        category,
        imageUrl,
    }
}
/
 * Configuration for the GlamCS business.
 */
export const CONFIG = {
    siteTitle: ${BRAND_NAME} - Luxurious Cosmetics,
    tagline: "Elevate Your Beauty with GlamCS",
    footerText: © ${new Date().getFullYear()} ${BRAND_NAME}. All Rights Reserved.,
};