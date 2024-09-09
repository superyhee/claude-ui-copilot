import React, { useState } from 'react';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="fixed w-full z-50 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm">
        <div className="flex justify-between items-center px-8 py-4">
          <div className="text-2xl font-bold">
            <img src="https://placehold.co/120x40?text=TESLA" alt="Tesla logo" className="h-8" />
          </div>
          <nav className="hidden lg:flex space-x-6">
            <a href="#" className="hover:text-gray-600 transition-colors duration-300">Model S</a>
            <a href="#" className="hover:text-gray-600 transition-colors duration-300">Model 3</a>
            <a href="#" className="hover:text-gray-600 transition-colors duration-300">Model X</a>
            <a href="#" className="hover:text-gray-600 transition-colors duration-300">Model Y</a>
            <a href="#" className="hover:text-gray-600 transition-colors duration-300">Solar Roof</a>
            <a href="#" className="hover:text-gray-600 transition-colors duration-300">Solar Panels</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#" className="hidden lg:block hover:text-gray-600 transition-colors duration-300">Shop</a>
            <a href="#" className="hidden lg:block hover:text-gray-600 transition-colors duration-300">Account</a>
            <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
              Menu
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-4 mt-8">
            <a href="#" className="text-lg">Model S</a>
            <a href="#" className="text-lg">Model 3</a>
            <a href="#" className="text-lg">Model X</a>
            <a href="#" className="text-lg">Model Y</a>
            <a href="#" className="text-lg">Solar Roof</a>
            <a href="#" className="text-lg">Solar Panels</a>
            <a href="#" className="text-lg">Shop</a>
            <a href="#" className="text-lg">Account</a>
          </nav>
        </div>
      )}

      <main className="relative">
        <div className="h-screen w-full">
          <img src="https://placehold.co/1920x1080?text=Model+Y" alt="Tesla Model Y on a scenic road" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between p-16">
          <div className="text-center text-white">
            <h1 className="text-5xl sm:text-6xl font-bold mb-2">Model Y</h1>
            <p className="text-xl sm:text-2xl mb-1">Order Online for Touchless Delivery</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white bg-opacity-80 text-gray-900 px-12 py-2 rounded-full text-sm font-medium hover:bg-opacity-100 transition-all duration-300">
              Custom Order
            </button>
            <button className="bg-gray-900 bg-opacity-60 text-white px-12 py-2 rounded-full text-sm font-medium hover:bg-opacity-80 transition-all duration-300">
              Existing Inventory
            </button>
          </div>
        </div>
      </main>

      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Tesla</h2>
          <p className="text-lg mb-8">Schedule a demo drive today</p>
          <button className="border-2 border-black text-black px-12 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300">
            Demo Drive
          </button>
        </div>
      </section>

      <footer className="bg-gray-100 py-8 px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="font-bold mb-2">Tesla © 2023</h3>
            <p className="text-sm text-gray-600">Privacy & Legal</p>
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="font-bold mb-2">Contact</h3>
            <p className="text-sm text-gray-600">+1 888-518-3752</p>
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="font-bold mb-2">Locations</h3>
            <p className="text-sm text-gray-600">Find a Store</p>
          </div>
          <div className="w-full sm:w-auto">
            <h3 className="font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;