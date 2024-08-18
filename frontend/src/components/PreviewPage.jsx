import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const products = [
  { id: 1, name: 'Classic Espresso', price: 3.99, image: 'https://placehold.co/200x200?text=Espresso' },
  { id: 2, name: 'Caramel Macchiato', price: 4.99, image: 'https://placehold.co/200x200?text=Macchiato' },
  { id: 3, name: 'Iced Latte', price: 4.49, image: 'https://placehold.co/200x200?text=Latte' },
];

function Header() {
  return (
    <header className="bg-amber-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Coffee Haven</h1>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-amber-200">Home</a></li>
          <li><a href="#" className="hover:text-amber-200">Menu</a></li>
          <li><a href="#" className="hover:text-amber-200">About</a></li>
          <li><a href="#" className="hover:text-amber-200">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-amber-100 py-20">
      <div className="container mx-auto flex items-center">
        <div className="w-1/2 pr-8">
          <h2 className="text-4xl font-bold text-amber-800 mb-4">Discover Our Coffee Culture</h2>
          <p className="text-amber-900 mb-6">At Coffee Haven, we believe in the art of crafting the perfect cup. Our passion for quality beans and expert brewing techniques creates an unforgettable experience with every sip.</p>
          <button className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700">Learn More</button>
        </div>
        <div className="w-1/2">
          <img src="https://placehold.co/600x400?text=Coffee+Shop" alt="Coffee shop interior with warm lighting and cozy atmosphere" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-xl font-semibold text-amber-800 mb-2">{product.name}</h3>
      <p className="text-amber-600 mb-4">${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)} className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600">Add to Cart</button>
    </div>
  );
}

function Products({ addToCart }) {
  return (
    <section className="bg-amber-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-amber-800 mb-8 text-center">Our Featured Drinks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Banner() {
  return (
    <section className="bg-amber-600 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Enjoy 10% Off Your First Order!</h2>
        <p className="mb-6">Sign up for our newsletter and receive a special welcome discount.</p>
        <button className="bg-white text-amber-600 px-6 py-2 rounded hover:bg-amber-100">Sign Up Now</button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100 py-8">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-4">Coffee Haven</h3>
          <p>123 Brew Street, Beantown</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@coffeehaven.com</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-4 border-t border-amber-800 text-center">
        <p>&copy; 2023 Coffee Haven. All rights reserved.</p>
      </div>
    </footer>
  );
}

function ShoppingCart({ isOpen, closeCart, cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Dialog open={isOpen} onClose={closeCart} className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="relative bg-white rounded max-w-md w-full mx-auto p-6">
          <Dialog.Title className="text-2xl font-bold text-amber-800 mb-4">Your Cart</Dialog.Title>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">Remove</button>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-bold text-lg">Total: ${total.toFixed(2)}</p>
              </div>
            </>
          )}
          <button onClick={closeCart} className="mt-6 bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">Close</button>
        </div>
      </div>
    </Dialog>
  );
}

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed top-4 right-4 z-10 bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600"
      >
        Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
      </button>
      <ShoppingCart
        isOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
      <main>
        <Hero />
        <Products addToCart={addToCart} />
        <Banner />
      </main>
      <Footer />
    </div>
  );
}