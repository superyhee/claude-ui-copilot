import React, { useState } from 'react';
import { FaHome, FaSearch, FaHeart, FaUser, FaPlusSquare } from 'react-icons/fa';

const mockPosts = [
  { id: 1, username: 'user1', imageUrl: 'https://placehold.co/600x400', likes: 100, caption: 'Beautiful day!' },
  { id: 2, username: 'user2', imageUrl: 'https://placehold.co/600x400', likes: 200, caption: 'Enjoying life!' },
  { id: 3, username: 'user3', imageUrl: 'https://placehold.co/600x400', likes: 150, caption: 'Adventure time!' },
];

const Post = ({ post }) => (
  <div className="mb-8 border-b pb-4">
    <div className="flex items-center mb-2">
      <img src="https://placehold.co/40x40" alt={`${post.username}'s profile`} className="w-8 h-8 rounded-full mr-2" />
      <span className="font-semibold">{post.username}</span>
    </div>
    <img src={post.imageUrl} alt={post.caption} className="w-full h-auto mb-2" />
    <div className="flex items-center mb-2">
      <FaHeart className="mr-2 text-red-500" />
      <span>{post.likes} likes</span>
    </div>
    <p><span className="font-semibold mr-2">{post.username}</span>{post.caption}</p>
  </div>
);

const BottomNavigation = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3">
    <FaHome className="text-2xl" />
    <FaSearch className="text-2xl" />
    <FaPlusSquare className="text-2xl" />
    <FaHeart className="text-2xl" />
    <FaUser className="text-2xl" />
  </div>
);

export default function App() {
  const [posts] = useState(mockPosts);

  return (
    <div className="bg-gray-100 min-h-screen pb-16">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Instagram</h1>
          <FaHeart className="text-2xl" />
        </div>
      </header>
      <main className="container mx-auto px-4 py-4">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </main>
      <BottomNavigation />
    </div>
  );
}