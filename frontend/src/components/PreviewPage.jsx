import React, { useState, useEffect } from 'react';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] min-h-screen text-white">
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-opacity-90 backdrop-blur-md' : ''}`}>
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-2">
            <img src="https://placehold.co/30x30" alt="Changan logo" className="w-8 h-8" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">长安汽车</span>
          </div>
          <ul className="hidden md:flex space-x-6">
            {['企业信息', '新闻资讯', '品牌历程', '加入长安', '官方商城'].map((item, index) => (
              <li key={index} className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">{item}</li>
            ))}
          </ul>
          <button className="md:hidden">
            <img src="https://placehold.co/24x24" alt="Menu icon" />
          </button>
        </nav>
      </header>
      
      <main className="flex flex-col items-center justify-center pt-32 md:pt-40">
        <h1 className="text-6xl md:text-8xl font-bold mb-12 md:mb-20 animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          CHANGAN
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-16">
          {['长安启源', '深蓝汽车', '阿维塔科技', '长安引力', '长安凯程'].map((brand, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                <img src={`https://placehold.co/40x40`} alt={`${brand} icon`} className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <span className="text-sm md:text-base group-hover:text-blue-400 transition-colors duration-300">{brand}</span>
            </div>
          ))}
        </div>
      </main>
      
      <div className="fixed right-4 bottom-4 flex flex-col items-center space-y-3">
        {[
          { alt: "Customer service icon", href: "#" },
          { alt: "Steering wheel icon", href: "#" },
          { alt: "Up arrow icon", href: "#top" }
        ].map((button, index) => (
          <a
            key={index}
            href={button.href}
            className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <img src={`https://placehold.co/24x24`} alt={button.alt} className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;