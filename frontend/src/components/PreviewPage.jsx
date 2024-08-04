import React from 'react';

const App = () => {
  const userData = {
    name: 'yang',
    profileUrl: 'buymecoffee.com/superhew',
  };

  const earningsData = {
    lastThirtyDays: {
      total: 0,
      supporters: 0,
      membership: 0,
      extras: 0,
    },
  };

  const moreWaysToEarn = [
    {
      id: 1,
      title: 'Membership',
      description: 'Monthly membership for your biggest fans and supporters.',
      action: 'Enable',
      icon: 'https://placehold.co/32x32?text=Membership',
      alt: 'Membership icon',
    },
    {
      id: 2,
      title: 'Shop',
      description: 'Introducing Shop, the creative way to sell.',
      action: 'Enable',
      icon: 'https://placehold.co/32x32?text=Shop',
      alt: 'Shop icon',
    },
    {
      id: 3,
      title: 'Exclusive posts',
      description: 'Publish your best content exclusively for your supporters and members.',
      action: 'Write a post',
      icon: 'https://placehold.co/32x32?text=Posts',
      alt: 'Exclusive posts icon',
    },
  ];

  return (
    <div className="bg-white p-4 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-4 max-w-md w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src="https://placehold.co/48x48?text=Profile"
              alt="Profile"
              className="rounded-full mr-2"
            />
            <div>
              <h2 className="text-lg font-semibold">{`Hi, ${userData.name}`}</h2>
              <p className="text-gray-500">{userData.profileUrl}</p>
            </div>
          </div>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">Share page</button>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Earnings</h3>
          <div className="flex justify-between mb-2">
            <span className="text-2xl font-bold">${earningsData.lastThirtyDays.total}</span>
            <span className="text-gray-500">Last 30 days</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>${earningsData.lastThirtyDays.supporters} Supporters</span>
            <span>${earningsData.lastThirtyDays.membership} Membership</span>
            <span>${earningsData.lastThirtyDays.extras} Extras</span>
          </div>
        </div>
        <div className="text-center text-gray-500">
          <span>You don't have any supporters yet</span>
          <p>Share your page with your audience to get started</p>
        </div>
      </div>
      <div className="mt-8 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">More ways to earn</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {moreWaysToEarn.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center"
            >
              <img src={item.icon} alt={item.alt} className="h-8 w-8 mb-2" />
              <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
              <p className="text-gray-500 text-center mb-2">{item.description}</p>
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">{item.action}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 w-full max-w-md flex justify-between text-gray-500">
        <span>Help Center</span>
        <span>FAQ</span>
        <span>Contact</span>
        <span>Refer a Creator</span>
      </div>
    </div>
  );
};

export default App;