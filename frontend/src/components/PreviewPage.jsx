import React, { useState } from 'react';
import { FaHome, FaSearch, FaHeart, FaUser, FaPlusSquare, FaBell, FaEllipsisV, FaComment, FaBookmark, FaPaperPlane } from 'react-icons/fa';

const mockPosts = [
  { id: 1, username: 'john_doe', imageUrl: 'https://placehold.co/600x400', likes: 1243, comments: 89, caption: 'Exciting project kickoff meeting with the team!', timestamp: '2h ago' },
  { id: 2, username: 'jane_smith', imageUrl: 'https://placehold.co/600x400', likes: 2891, comments: 156, caption: 'Celebrating a successful product launch!', timestamp: '4h ago' },
  { id: 3, username: 'tech_innovator', imageUrl: 'https://placehold.co/600x400', likes: 3567, comments: 203, caption: 'Unveiling our latest AI-powered solution at the tech expo', timestamp: '6h ago' },
];

const Post = ({ post }) => (
  <div className="bg-white rounded-lg shadow-md mb-6">
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <img src="https://placehold.co/40x40" alt={`${post.username}'s profile picture`} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <span className="font-semibold text-sm">{post.username}</span>
          <p className="text-xs text-gray-500">{post.timestamp}</p>
        </div>
      </div>
      <FaEllipsisV className="text-gray-500" />
    </div>
    <img src={post.imageUrl} alt={post.caption} className="w-full h-auto" />
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          <FaHeart className="text-2xl text-gray-500 hover:text-red-500 cursor-pointer" />
          <FaComment className="text-2xl text-gray-500 hover:text-blue-500 cursor-pointer" />
          <FaPaperPlane className="text-2xl text-gray-500 hover:text-green-500 cursor-pointer" />
        </div>
        <FaBookmark className="text-2xl text-gray-500 hover:text-yellow-500 cursor-pointer" />
      </div>
      <p className="font-semibold mb-1">{post.likes.toLocaleString()} likes</p>
      <p><span className="font-semibold mr-2">{post.username}</span>{post.caption}</p>
      <p className="text-gray-500 text-sm mt-1">View all {post.comments} comments</p>
    </div>
  </div>
);

const BottomNavigation = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 px-4">
    <FaHome className="text-2xl text-blue-500" />
    <FaSearch className="text-2xl text-gray-500" />
    <FaPlusSquare className="text-2xl text-gray-500" />
    <FaBell className="text-2xl text-gray-500" />
    <img src="https://placehold.co/30x30" alt="User profile picture" className="w-7 h-7 rounded-full" />
  </div>
);

const StoryCircle = ({ username }) => (
  <div className="flex flex-col items-center mr-4">
    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 p-0.5">
      <img src="https://placehold.co/60x60" alt={`${username}'s story`} className="w-full h-full object-cover rounded-full border-2 border-white" />
    </div>
    <span className="text-xs mt-1">{username}</span>
  </div>
);

export default function App() {
  const [posts] = useState(mockPosts);

  return (
    <div className="bg-gray-100 min-h-screen pb-16">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Enterprise Feed</h1>
          <div className="flex items-center space-x-4">
            <FaBell className="text-2xl text-gray-600" />
            <FaUser className="text-2xl text-gray-600" />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 overflow-x-auto">
          <div className="flex">
            {['YourStory', 'user1', 'user2', 'user3', 'user4'].map((username, index) => (
              <StoryCircle key={index} username={username} />
            ))}
          </div>
        </div>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </main>
      <BottomNavigation />
    </div>
  );
}