import React, { useState, useEffect } from 'react';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#e6edf5] to-[#c4d3e6] min-h-screen">
      <header className={`fixed top-0 left-0 right-0 bg-[#3c4654] text-white py-4 px-6 transition-all duration-300 ${scrollPosition > 50 ? 'bg-opacity-90' : ''}`}>
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center">
            <img src="https://placehold.co/40x40" alt="Changan logo" className="mr-3" />
            <span className="text-xl font-bold">长安汽车</span>
          </div>
          <ul className="flex space-x-8">
            <li className="hover:text-[#f0a500] transition-colors duration-200 cursor-pointer">企业信息</li>
            <li className="hover:text-[#f0a500] transition-colors duration-200 cursor-pointer">新闻资讯</li>
            <li className="hover:text-[#f0a500] transition-colors duration-200 cursor-pointer">品牌历程</li>
            <li className="hover:text-[#f0a500] transition-colors duration-200 cursor-pointer">加入长安</li>
            <li className="hover:text-[#f0a500] transition-colors duration-200 cursor-pointer">官方商城</li>
          </ul>
        </nav>
      </header>
      
      <main className="flex flex-col items-center justify-center pt-32 pb-20">
        <h1 className="text-[140px] font-bold text-white mb-24" style={{textShadow: '0 4px 6px rgba(0,0,0,0.2)'}}>
          CHANGAN
        </h1>
        
        <div className="flex justify-center space-x-20">
          {[
            { name: '长安启源', description: '新能源汽车' },
            { name: '深蓝汽车', description: '智能电动车' },
            { name: '阿维塔科技', description: '高端智能电动车' },
            { name: '长安引力', description: '新能源商用车' },
            { name: '长安凯程', description: '商用车' }
          ].map((brand, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 group-hover:bg-[#f0a500] transition-colors duration-300">
                <img src={`https://placehold.co/60x60?text=${brand.name}`} alt={`${brand.name} icon`} className="w-16 h-16" />
              </div>
              <span className="text-gray-700 font-semibold group-hover:text-[#f0a500] transition-colors duration-300">{brand.name}</span>
              <span className="text-gray-500 text-sm mt-1">{brand.description}</span>
            </div>
          ))}
        </div>
      </main>
      
      <div className="fixed right-6 bottom-6 flex flex-col items-center space-y-3">
        {[
          { icon: 'https://placehold.co/24x24?text=CS', alt: 'Customer service icon' },
          { icon: 'https://placehold.co/24x24?text=SW', alt: 'Steering wheel icon' },
          { icon: 'https://placehold.co/24x24?text=UP', alt: 'Up arrow icon' }
        ].map((button, index) => (
          <button key={index} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#f0a500] transition-colors duration-300">
            <img src={button.icon} alt={button.alt} className="w-6 h-6" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;