import React from 'react';

const App = () => {
  return (
    <div className="bg-[#e6edf5] min-h-screen">
      <header className="bg-[#3c4654] text-white py-4 px-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://placehold.co/30x30" alt="Changan logo" className="mr-2" />
            <span className="text-lg font-bold">长安汽车</span>
          </div>
          <ul className="flex space-x-6">
            <li>企业信息</li>
            <li>新闻资讯</li>
            <li>品牌历程</li>
            <li>加入长安</li>
            <li>官方商城</li>
          </ul>
        </nav>
      </header>
      
      <main className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-[120px] font-bold text-white mb-20" style={{textShadow: '0 2px 4px rgba(0,0,0,0.2)'}}>
          CHANGAN
        </h1>
        
        <div className="flex justify-center space-x-16">
          <div className="flex flex-col items-center">
            <img src="https://placehold.co/50x50" alt="长安启源 icon" className="mb-2" />
            <span className="text-gray-600">长安启源</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://placehold.co/50x50" alt="深蓝汽车 icon" className="mb-2" />
            <span className="text-gray-600">深蓝汽车</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://placehold.co/50x50" alt="阿维塔科技 icon" className="mb-2" />
            <span className="text-gray-600">阿维塔科技</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://placehold.co/50x50" alt="长安引力 icon" className="mb-2" />
            <span className="text-gray-600">长安引力</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://placehold.co/50x50" alt="长安凯程 icon" className="mb-2" />
            <span className="text-gray-600">长安凯程</span>
          </div>
        </div>
      </main>
      
      <div className="fixed right-4 bottom-4 flex flex-col items-center space-y-2">
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
          <img src="https://placehold.co/20x20" alt="Customer service icon" />
        </button>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
          <img src="https://placehold.co/20x20" alt="Steering wheel icon" />
        </button>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
          <img src="https://placehold.co/20x20" alt="Up arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default App;