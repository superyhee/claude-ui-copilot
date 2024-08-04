import React, { useState } from 'react';

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const products = [
    {
      id: 1,
      name: 'Espresso',
      description: 'A rich and concentrated coffee drink.',
      image: 'https://placehold.co/300x200?text=Espresso',
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'A classic Italian coffee drink with steamed milk and foam.',
      image: 'https://placehold.co/300x200?text=Cappuccino',
    },
    {
      id: 3,
      name: 'Latte',
      description: 'A smooth and creamy coffee drink with steamed milk.',
      image: 'https://placehold.co/300x200?text=Latte',
    },
  ];

  const offers = [
    'Buy one, get one free on all Espresso drinks!',
    'Loyalty program: Earn points for every purchase.',
    'Exclusive discounts for members.',
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 px-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">Coffee Shop</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <button
                className="text-gray-800 bg-white px-4 py-2 rounded hover:bg-gray-200"
                onClick={() => setShowCart(true)}
              >
                Cart ({cart.length})
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-gray-200 py-16 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">Crafting Perfection</h1>
            <p className="mb-6">
              At our coffee shop, we believe in the art of crafting the perfect cup of coffee. From responsibly sourced beans to expertly trained baristas, every step is carefully executed to ensure a rich, flavorful experience.
            </p>
            <button className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700">
              Learn More
            </button>
          </div>
          <img
            src="https://placehold.co/400x300?text=Coffee+Shop+Hero+Image"
            alt="Coffee Shop Hero Image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Products */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={`${product.name} Image`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700">{product.description}</p>
                <button
                  className="bg-gray-800 text-white px-4 py-2 rounded mt-4 hover:bg-gray-700"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="bg-gray-800 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Exclusive Offers</h2>
          <ul className="space-y-4">
            {offers.map((offer, index) => (
              <li key={index} className="text-lg">
                {offer}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <div>
            <h4 className="text-xl font-bold mb-2">Contact Us</h4>
            <p>123 Main Street</p>
            <p>Anytown, USA 12345</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Policies</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Shopping Cart Dialog */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded mt-4 hover:bg-gray-700"
              onClick={() => setShowCart(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;