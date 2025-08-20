import { useEffect, useRef } from 'react'
/
 * Interface defining the animation options specific to GlamCS
 */
interface GlamCSAnimationOptions {
    duration?: number
    delay?: number
    easing?: string
}

/
 * Custom hook for handling animations within the GlamCS cosmetics website.
 * @param {GlamCSAnimationOptions} options - Configuration options for the animation.
 * @returns {ref: React.RefObject<HTMLElement>, animate: (trigger: boolean) => void} - A ref to apply on the element and a function to trigger the animation.
 */
export const useAnimation = (options: GlamCSAnimationOptions = {}) => {
    const { duration = 0.5, delay = 0, easing = 'ease-in-out' } = options
    const ref = useRef<HTMLElement | null>(null)
    const animate = (trigger: boolean) => {
        if (ref.current) {
            const animationClass = trigger ? 'animate' : 'reset'
            ref.current.classList.add(animationClass)
            setTimeout(() => {
                ref.current?.classList.remove(animationClass)
            }, (duration + delay) * 1000)
        }
    }
    useEffect(() => {
        const element = ref.current
        if (element) {
            element.style.transition = all ${duration}s ${easing}
        }
    }, [duration, easing])
    return { ref, animate }
}
/
 * Example usage of the useAnimation hook with GlamCS-specific business logic.
 * In a real component, you would import and implement this hook alongside relevant JSX.
 */
const GlamCSExampleComponent = () => {
    const { ref, animate } = useAnimation({ duration: 1, easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)' })
    const handleHover = () => {
        animate(true)
    }
    return (

            <h1 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Welcome to GlamCS</h1>
            <p style={{ fontFamily: 'Arial, sans-serif' }}>Discover our luxurious range of cosmetics designed to enhance your beauty.</p>

    )
}
export default useAnimation;