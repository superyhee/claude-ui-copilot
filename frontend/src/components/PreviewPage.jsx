import React, { useState } from 'react';

export default function App() {
  const [inputTokenIn, setInputTokenIn] = useState('');
  const [inputTokenOut, setInputTokenOut] = useState('');
  const [tokenUnit, setTokenUnit] = useState('K');
  const [itemList, setItemList] = useState([
    {
      name: '服务商名称',
      sellAmount: '',
      sellCurrency: 'CNY',
      commission: '',
      buyPrice: '',
      sellPrice: '',
      tokenUnit: 'K',
      isActive: true,
    },
    {
      name: '服务商名称',
      sellAmount: '',
      sellCurrency: 'CNY',
      commission: '',
      buyPrice: '',
      sellPrice: '',
      tokenUnit: 'K',
      isActive: false,
    },
  ]);

  const handleInputTokenInChange = (e) => {
    setInputTokenIn(e.target.value);
  };

  const handleInputTokenOutChange = (e) => {
    setInputTokenOut(e.target.value);
  };

  const handleTokenUnitChange = (e) => {
    setTokenUnit(e.target.value);
  };

  const handleItemChange = (index, field, value) => {
    const newItemList = [...itemList];
    newItemList[index][field] = value;
    setItemList(newItemList);
  };

  const handleAddItem = () => {
    const newItem = {
      name: '',
      sellAmount: '',
      sellCurrency: 'CNY',
      commission: '',
      buyPrice: '',
      sellPrice: '',
      tokenUnit: 'K',
      isActive: true,
    };
    setItemList([...itemList, newItem]);
  };

  const handleRemoveItem = (index) => {
    const newItemList = [...itemList];
    newItemList.splice(index, 1);
    setItemList(newItemList);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center mb-4">
        <img
          src="https://placehold.co/50x50?text=Logo"
          alt="Cloud logo"
          className="h-12 w-12 mr-2"
        />
        <h1 className="text-2xl">LLM API 价格比较器</h1>
      </div>
      <div className="mb-4">
        今日汇率 (USD/CNY): 7.1520
        <a
          href="#"
          className="text-blue-500 hover:text-blue-700 ml-2"
        >
          GitHub @CookSleep
        </a>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="仅数字"
          value={inputTokenIn}
          onChange={handleInputTokenInChange}
          className="border border-gray-300 px-2 py-1 rounded-md mr-2"
        />
        <input
          type="text"
          placeholder="仅数字"
          value={inputTokenOut}
          onChange={handleInputTokenOutChange}
          className="border border-gray-300 px-2 py-1 rounded-md mr-2"
        />
        <select
          value={tokenUnit}
          onChange={handleTokenUnitChange}
          className="border border-gray-300 px-2 py-1 rounded-md"
        >
          <option value="K">K</option>
          {/* Add more options here */}
        </select>
      </div>
      <div className="mb-4">
        <ul className="list-disc list-inside">
          <li>使用提示点为向导可以快速在输入、选择框间移动</li>
          <li>使用键盘浏览可以快速切换下拉选项</li>
          <li>按 Enter 键可以切换框框、下拉菜单项选择。按 Tab 交互</li>
        </ul>
      </div>
      <div className="grid grid-cols-7 gap-4 mb-4">
        <div className="font-bold">服务商名称</div>
        <div className="font-bold">充值金额</div>
        <div className="font-bold">充值货币</div>
        <div className="font-bold">到账余额</div>
        <div className="font-bold">输入价格</div>
        <div className="font-bold">输出价格</div>
        <div className="font-bold flex items-center justify-center">
          TOKEN单位
          <img
            src="https://placehold.co/20x20?text=Info"
            alt="Info icon"
            className="h-4 w-4 ml-2"
          />
        </div>
      </div>
      {itemList.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-7 gap-4 mb-2 items-center"
        >
          <input
            type="text"
            placeholder="服务商名称"
            value={item.name}
            onChange={(e) =>
              handleItemChange(index, 'name', e.target.value)
            }
            className="border border-gray-300 px-2 py-1 rounded-md"
          />
          <input
            type="text"
            placeholder="仅数字"
            value={item.sellAmount}
            onChange={(e) =>
              handleItemChange(index, 'sellAmount', e.target.value)
            }
            className="border border-gray-300 px-2 py-1 rounded-md"
          />
          <select
            value={item.sellCurrency}
            onChange={(e) =>
              handleItemChange(index, 'sellCurrency', e.target.value)
            }
            className="border border-gray-300 px-2 py-1 rounded-md"
          >
            <option value="CNY">CNY</option>
            {/* Add more options here */}
          </select>
          <input
            type="text"
            placeholder="仅数字"
            value={item.commission}
            onChange={(e) =>
              handleItemChange(index, 'commission', e.target.value)
            }
            className="border border-gray-300 px-2 py-1 rounded-md"
          />
          <input
            type="text"
            placeholder="仅数字"
            value={item.buyPrice}
            onChange={(e) =>
              handleItemChange(index, 'buyPrice', e.target.value)
            }
            className="border border-gray-300 px-2 py-1 rounded-md"
          />
          <input
            type="text"
            placeholder="仅数字"
            value={item.sellPrice}
            onChange={(e) =>
              handleItemChange(index, 'sellPrice', e.target.value)
            }
            className="border border-gray-300 px-2 py-1 rounded-md"
          />
          <div className="flex items-center justify-center">
            <select
              value={item.tokenUnit}
              onChange={(e) =>
                handleItemChange(index, 'tokenUnit', e.target.value)
              }
              className="border border-gray-300 px-2 py-1 rounded-md"
            >
              <option value="K">K</option>
              {/* Add more options here */}
            </select>
            <button
              onClick={() => handleRemoveItem(index)}
              className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center ml-2"
            >
              &times;
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={handleAddItem}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        +
      </button>
    </div>
  );
}