import React, { useState } from 'react';

const App = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: '博客文章 1',
      description: '这是博客文章 1 的描述。',
      date: '2023-05-01',
      imageSrc: 'https://placehold.co/600x400?text=博客图像+1'
    },
    {
      id: 2,
      title: '博客文章 2',
      description: '这是博客文章 2 的描述。',
      date: '2023-04-15',
      imageSrc: 'https://placehold.co/600x400?text=博客图像+2'
    },
    {
      id: 3,
      title: '博客文章 3',
      description: '这是博客文章 3 的描述。',
      date: '2023-03-25',
      imageSrc: 'https://placehold.co/600x400?text=博客图像+3'
    }
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold text-gray-800">
          <img src="https://placehold.co/30x30?text=Logo" alt="公司 Logo" className="inline-block mr-2" />
          我的个人博客
        </div>
        <nav>
          <ul className="flex space-x-6 text-gray-600">
            <li>主页</li>
            <li>关于</li>
            <li>联系我们</li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold mb-4 text-white">欢迎来到我的个人博客</h1>
            <p className="text-xl mb-8 text-gray-300">探索我的想法和经历</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">关于我</h2>
            <p className="text-lg text-gray-600">
              这里是关于我的简介。
            </p>
          </div>
          <img src="https://placehold.co/800x600?text=个人照片" alt="个人照片" className="mx-auto rounded-lg shadow-md" />
        </section>

        <section className="container mx-auto px-4 py-10">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">最新博客</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={blog.imageSrc} alt={`博客图像 ${blog.id}`} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <div className="text-sm text-gray-500">{blog.date}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 p-4 flex justify-center">
        <div className="flex space-x-2">
          {[0, 1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-white' : 'bg-gray-500'}`}
            />
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;