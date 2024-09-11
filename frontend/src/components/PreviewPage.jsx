import React, { useState } from 'react';

const languages = {
  en: {
    header: {
      features: 'Features',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      title: 'Revolutionize Your Business',
      subtitle: 'We provide cutting-edge solutions to boost your productivity and growth.',
      button: 'Get Started',
    },
    features: {
      title: 'Our Features',
      items: [
        { title: 'Innovative Technology', description: 'Cutting-edge solutions for modern businesses' },
        { title: '24/7 Support', description: 'Round-the-clock assistance for your peace of mind' },
        { title: 'Data Security', description: 'Top-notch security measures to protect your information' },
      ],
    },
    testimonials: {
      title: 'What Our Clients Say',
      items: [
        { name: 'John Doe', role: 'CEO, TechCorp', quote: 'This startup has transformed our operations!' },
        { name: 'Jane Smith', role: 'CTO, InnovateCo', quote: 'Incredible service and support. Highly recommended!' },
        { name: 'Alex Johnson', role: 'Founder, NextGen', quote: 'The best decision we've made for our business growth.' },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { question: 'What services do you offer?', answer: 'We offer a wide range of innovative solutions including...' },
        { question: 'How can I get started?', answer: 'Getting started is easy! Simply contact our team and we'll guide you through the process.' },
        { question: 'What makes your startup unique?', answer: 'Our unique approach combines cutting-edge technology with personalized service to deliver unparalleled results.' },
      ],
    },
    banner: {
      title: 'Special Offer!',
      subtitle: 'Sign up now and get 3 months free on any plan!',
      button: 'Claim Offer',
    },
    footer: {
      about: {
        title: 'About Us',
        content: 'We are an innovative startup dedicated to revolutionizing your business operations.',
      },
      contact: {
        title: 'Contact',
        email: 'Email: info@startup.com',
        phone: 'Phone: (123) 456-7890',
        address: 'Address: 123 Innovation St, Tech City',
      },
      social: {
        title: 'Follow Us',
        facebook: 'Facebook',
        twitter: 'Twitter',
        linkedin: 'LinkedIn',
      },
      copyright: '© 2023 StartupName. All rights reserved.',
    },
  },
  zh: {
    header: {
      features: '特点',
      testimonials: '客户评价',
      faq: '常见问题',
      contact: '联系我们',
    },
    hero: {
      title: '革新您的业务',
      subtitle: '我们提供尖端解决方案，提升您的生产力和增长。',
      button: '立即开始',
    },
    features: {
      title: '我们的特点',
      items: [
        { title: '创新技术', description: '为现代企业提供尖端解决方案' },
        { title: '24/7 支持', description: '全天候协助，让您安心无忧' },
        { title: '数据安全', description: '顶级安全措施保护您的信息' },
      ],
    },
    testimonials: {
      title: '客户如何评价我们',
      items: [
        { name: '张三', role: 'TechCorp CEO', quote: '这家初创公司彻底改变了我们的运营！' },
        { name: '李四', role: 'InnovateCo CTO', quote: '令人难以置信的服务和支持。强烈推荐！' },
        { name: '王五', role: 'NextGen 创始人', quote: '这是我们为业务增长做出的最佳决策。' },
      ],
    },
    faq: {
      title: '常见问题',
      items: [
        { question: '你们提供哪些服务？', answer: '我们提供广泛的创新解决方案，包括...' },
        { question: '如何开始使用？', answer: '开始使用很简单！只需联系我们的团队，我们将指导您完成整个过程。' },
        { question: '是什么让你们的初创公司与众不同？', answer: '我们独特的方法将尖端技术与个性化服务相结合，提供无与伦比的结果。' },
      ],
    },
    banner: {
      title: '特别优惠！',
      subtitle: '立即注册，任何套餐都可免费使用3个月！',
      button: '领取优惠',
    },
    footer: {
      about: {
        title: '关于我们',
        content: '我们是一家致力于革新您的业务运营的创新型初创公司。',
      },
      contact: {
        title: '联系方式',
        email: '邮箱：info@startup.com',
        phone: '电话：(123) 456-7890',
        address: '地址：科技城创新街123号',
      },
      social: {
        title: '关注我们',
        facebook: 'Facebook',
        twitter: 'Twitter',
        linkedin: 'LinkedIn',
      },
      copyright: '© 2023 StartupName。保留所有权利。',
    },
  },
};

const Header = ({ lang }) => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://placehold.co/50x50" alt="Company Logo" className="mr-2" />
        <span className="text-xl font-bold text-gray-800">StartupName</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#features" className="text-gray-600 hover:text-gray-800">{languages[lang].header.features}</a></li>
          <li><a href="#testimonials" className="text-gray-600 hover:text-gray-800">{languages[lang].header.testimonials}</a></li>
          <li><a href="#faq" className="text-gray-600 hover:text-gray-800">{languages[lang].header.faq}</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-gray-800">{languages[lang].header.contact}</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = ({ lang }) => (
  <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{languages[lang].hero.title}</h1>
      <p className="text-xl mb-8">{languages[lang].hero.subtitle}</p>
      <button className="bg-white text-blue-500 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
        {languages[lang].hero.button}
      </button>
    </div>
  </section>
);

const Features = ({ lang }) => (
  <section id="features" className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">{languages[lang].features.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {languages[lang].features.items.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img src={`https://placehold.co/60x60?text=${index + 1}`} alt={`Feature ${index + 1} icon`} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = ({ lang }) => (
  <section id="testimonials" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">{languages[lang].testimonials.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {languages[lang].testimonials.items.map((testimonial, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <img src={`https://placehold.co/40x40?text=${testimonial.name[0]}`} alt={`${testimonial.name}'s avatar`} className="rounded-full mr-3" />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = ({ lang }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{languages[lang].faq.title}</h2>
        <div className="max-w-3xl mx-auto">
          {languages[lang].faq.items.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-4 bg-white rounded-lg shadow-md"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-gray-50 rounded-b-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Banner = ({ lang }) => (
  <section className="bg-blue-600 text-white py-12">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">{languages[lang].banner.title}</h2>
      <p className="text-xl mb-6">{languages[lang].banner.subtitle}</p>
      <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
        {languages[lang].banner.button}
      </button>
    </div>
  </section>
);

const Footer = ({ lang }) => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">{languages[lang].footer.about.title}</h3>
          <p>{languages[lang].footer.about.content}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">{languages[lang].footer.contact.title}</h3>
          <p>{languages[lang].footer.contact.email}</p>
          <p>{languages[lang].footer.contact.phone}</p>
          <p>{languages[lang].footer.contact.address}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">{languages[lang].footer.social.title}</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">{languages[lang].footer.social.facebook}</a>
            <a href="#" className="hover:text-gray-300">{languages[lang].footer.social.twitter}</a>
            <a href="#" className="hover:text-gray-300">{languages[lang].footer.social.linkedin}</a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p>{languages[lang].footer.copyright}</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="font-sans">
      <div className="fixed top-0 right-0 m-4 z-50">
        <button onClick={() => setLang('en')} className={`mr-2 px-3 py-1 rounded ${lang === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>EN</button>
        <button onClick={() => setLang('zh')} className={`px-3 py-1 rounded ${lang === 'zh' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>中文</button>
      </div>
      <Header lang={lang} />
      <Hero lang={lang} />
      <Features lang={lang} />
      <Testimonials lang={lang} />
      <FAQ lang={lang} />
      <Banner lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}