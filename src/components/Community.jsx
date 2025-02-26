import React from "react";

const communityPosts = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "https://i.pravatar.cc/100?img=1",
    post: "Loving the Smart Counter! Helped me streamline my warehouse inventory. Can't wait for more updates! 🚀",
    date: "2 hours ago",
  },
  {
    id: 2,
    name: "Michael Brown",
    avatar: "https://i.pravatar.cc/100?img=2",
    post: "The weather forecasting accuracy is amazing! Helped me plan my outdoor activities better. 🌦️",
    date: "1 day ago",
  },
  {
    id: 3,
    name: "Sophia Lee",
    avatar: "https://i.pravatar.cc/100?img=3",
    post: "Is there a way to integrate Smart Counter with IoT devices? Would love to see an API for automation! 🤖",
    date: "3 days ago",
  },
];

const Community = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Community Discussions</h2>
        <p className="text-gray-600 text-center mb-10">Join the conversation and share your thoughts about our project!</p>
        
        <div className="space-y-6">
          {communityPosts.map((post) => (
            <div key={post.id} className="bg-white p-5 rounded-lg shadow-md flex items-start">
              <img src={post.avatar} alt={post.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{post.name}</h3>
                <p className="text-gray-700">{post.post}</p>
                <p className="text-sm text-gray-500 mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-green-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-600">
            Join the Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
