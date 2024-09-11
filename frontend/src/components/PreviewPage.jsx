import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const products = [
  { id: 1, name: 'Espresso', price: 3.99, image: 'https://placehold.co/200x200?text=Espresso', description: 'Rich and bold espresso shot' },
  { id: 2, name: 'Cappuccino', price: 4.99, image: 'https://placehold.co/200x200?text=Cappuccino', description: 'Espresso with steamed milk and foam' },
  { id: 3, name: 'Latte', price: 4.99, image: 'https://placehold.co/200x200?text=Latte', description: 'Espresso with steamed milk' },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="bg-amber-50 min-h-screen">
      <header className="bg-amber-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Cozy Coffee</h1>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-amber-200">Home</a></li>
            <li><a href="#products" className="hover:text-amber-200">Products</a></li>
            <li><a href="#about" className="hover:text-amber-200">About</a></li>
            <li><button onClick={() => setIsCartOpen(true)} className="hover:text-amber-200">Cart ({cart.length})</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="container mx-auto py-12 flex items-center">
          <div className="w-1/2 pr-8">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Welcome to Cozy Coffee</h2>
            <p className="text-amber-800 mb-6">Experience the warmth and comfort of our carefully crafted coffee. Each cup tells a story of passion and dedication.</p>
            <a href="#products" className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition">Shop Now</a>
          </div>
          <div className="w-1/2">
            <img src="https://placehold.co/600x400?text=Cozy+Coffee+Shop" alt="Cozy coffee shop interior" className="rounded-lg shadow-lg" />
          </div>
        </section>

        <section id="products" className="bg-amber-100 py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Our Products</h2>
            <div className="grid grid-cols-3 gap-8">
              {products.map(product => (
                <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">{product.name}</h3>
                  <p className="text-amber-700 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-amber-600">${product.price.toFixed(2)}</span>
                    <button onClick={() => addToCart(product)} className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-amber-700 text-white py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
            <p className="text-xl mb-6">Get 10% off your first order when you sign up for our newsletter!</p>
            <button className="bg-white text-amber-700 px-6 py-2 rounded hover:bg-amber-100 transition">Sign Up Now</button>
          </div>
        </section>
      </main>

      <footer className="bg-amber-900 text-white py-8">
        <div className="container mx-auto flex justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Cozy Coffee</h3>
            <p>123 Coffee Street, Brewtown, CB 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@cozycoffee.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="#" className="hover:text-amber-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-amber-200">FAQ</a></li>
            </ul>
          </div>
        </div>
      </footer>

      <Dialog open={isCartOpen} onClose={() => setIsCartOpen(false)} className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-white rounded max-w-md mx-auto p-6">
            <Dialog.Title className="text-2xl font-bold text-amber-900 mb-4">Your Cart</Dialog.Title>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between items-center mb-2">
                    <span>{item.name} - ${item.price.toFixed(2)}</span>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">Remove</button>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-4 flex justify-end">
              <button onClick={() => setIsCartOpen(false)} className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition">Close</button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}