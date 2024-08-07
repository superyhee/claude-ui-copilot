import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Classic Espresso', price: 3.99, image: 'https://placehold.co/200x200?text=Espresso' },
  { id: 2, name: 'Creamy Latte', price: 4.99, image: 'https://placehold.co/200x200?text=Latte' },
  { id: 3, name: 'Rich Mocha', price: 5.99, image: 'https://placehold.co/200x200?text=Mocha' },
];

const Header = ({ cartItems, setShowCart }) => (
  <header className="bg-amber-800 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Cozy Coffee Shop</h1>
      <ul className="flex space-x-4">
        <li><a href="#home" className="hover:text-amber-200">Home</a></li>
        <li><a href="#products" className="hover:text-amber-200">Products</a></li>
        <li><a href="#about" className="hover:text-amber-200">About</a></li>
        <li>
          <button onClick={() => setShowCart(true)} className="flex items-center">
            <span className="mr-2">Cart ({cartItems.length})</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section id="home" className="bg-amber-100 py-20">
    <div className="container mx-auto flex items-center">
      <div className="w-1/2 pr-8">
        <h2 className="text-4xl font-bold text-amber-800 mb-4">Experience the Art of Coffee</h2>
        <p className="text-amber-700 mb-6">At Cozy Coffee Shop, we believe in crafting the perfect cup with passion and precision. Our beans are ethically sourced and roasted to perfection, ensuring a rich and flavorful experience with every sip.</p>
        <a href="#products" className="bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition duration-300">Explore Our Menu</a>
      </div>
      <div className="w-1/2">
        <img src="https://placehold.co/600x400?text=Cozy+Coffee+Shop" alt="Cozy Coffee Shop interior with warm lighting and comfortable seating" className="rounded-lg shadow-lg" />
      </div>
    </div>
  </section>
);

const ProductCard = ({ product, addToCart }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
    <h3 className="text-xl font-semibold text-amber-800 mb-2">{product.name}</h3>
    <p className="text-amber-600 mb-4">${product.price.toFixed(2)}</p>
    <button onClick={() => addToCart(product)} className="bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600 transition duration-300">Add to Cart</button>
  </div>
);

const Products = ({ addToCart }) => (
  <section id="products" className="py-20 bg-amber-50">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-amber-800 mb-10 text-center">Our Signature Drinks</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  </section>
);

const Banner = () => (
  <section className="bg-amber-600 text-white py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Discover Our Coffee Club</h2>
      <p className="mb-8">Join today and enjoy exclusive discounts, early access to seasonal blends, and free shipping on all orders!</p>
      <a href="#" className="bg-white text-amber-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-amber-100 transition duration-300">Sign Up Now</a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-amber-900 text-amber-200 py-10">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <p>123 Coffee Lane, Brewville, CB 12345</p>
        <p>Phone: (555) 123-4567</p>
        <p>Email: info@cozycoffeeshop.com</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Hours</h3>
        <p>Monday - Friday: 6am - 8pm</p>
        <p>Saturday - Sunday: 7am - 9pm</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Policies</h3>
        <ul>
          <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          <li><a href="#" className="hover:text-white">Refund Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="text-center mt-8">
      <p>&copy; 2023 Cozy Coffee Shop. All rights reserved.</p>
    </div>
  </footer>
);

const CartDialog = ({ cartItems, removeFromCart, setShowCart }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{item.name} - ${item.price.toFixed(2)}</span>
              <button onClick={() => removeFromCart(index)} className="text-red-500 hover:text-red-700">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex justify-between">
        <button onClick={() => setShowCart(false)} className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition duration-300">
          Close
        </button>
        {cartItems.length > 0 && (
          <button className="bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600 transition duration-300">
            Checkout
          </button>
        )}
      </div>
    </div>
  </div>
);

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItems={cartItems} setShowCart={setShowCart} />
      <main className="flex-grow">
        <Hero />
        <Products addToCart={addToCart} />
        <Banner />
      </main>
      <Footer />
      {showCart && (
        <CartDialog
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          setShowCart={setShowCart}
        />
      )}
    </div>
  );
}