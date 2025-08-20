const GlamCS: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <header className="flex justify-between items-center p-4 bg-orange-500">
        <h1 className="text-3xl font-bold text-white">GlamCS</h1>/g
        <nav className="space-x-4">
          <a href="#features" className="text-white hover:text-orange-200">Features</a>/g
          <a href="#about" className="text-white hover:text-orange-200">About Us</a>/g
          <a href="#contact" className="text-white hover:text-orange-200">Contact</a>/g
        </nav>/g
      </header>/g

      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-orange-500 opacity-60" 
         }}} />/g
        <div className="text-center z-10">
          <h2 className="text-5xl font-bold text-white mb-4">Welcome to GlamCS</h2>/g
          <p className="text-lg text-white">Elevate your beauty routine with our luxurious cosmetics designed for the modern individual.</p>/g
          <button className="mt-6 bg-white text-orange-500 py-2 px-4 rounded-full shadow-lg hover:bg-orange-200 transition duration-200">
            Shop Now
          </button>/g
        </div>/g
      </section>/g

      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-orange-500 mb-8">Our Features</h3>/g
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h4 className="text-2xl font-semibold text-gray-800">Premium Ingredients</h4>/g
              <p className="text-gray-600">Crafted with the finest natural ingredients to nourish your skin.</p>/g
            </div>/g
            <div className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h4 className="text-2xl font-semibold text-gray-800">Sustainable Practices</h4>/g
              <p className="text-gray-600">Committed to eco-friendly packaging and cruelty-free products.</p>/g
            </div>/g
            <div className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h4 className="text-2xl font-semibold text-gray-800">Innovative Formulations</h4>/g
              <p className="text-gray-600">Revolutionary formulas that enhance your natural beauty effortlessly.</p>/g
            </div>/g
          </div>/g
        </div>/g
      </section>/g

      <footer className="bg-orange-500 py-6 text-center text-white">
        <p>&copy; {new Date().getFullYear()`} GlamCS. All rights reserved.</p>/g
      </footer>/g
    </div>/g
  )
}
export default GlamCS
)
