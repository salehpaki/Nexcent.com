import React from "react";

const blogs = [
  {
    id: 1,
    title: "Enhancing Object Detection with YOLOv8",
    description: "Discover how YOLOv8 improves small object detection and counting accuracy in real-time applications.",
    image: "/55.png",
    date: "February 26, 2025",
  },
  {
    id: 2,
    title: "The Future of Weather Forecasting with AI",
    description: "How deep learning models like ANN are revolutionizing weather prediction and disaster preparedness.",
    image: "/44.jpg",
    date: "February 20, 2025",
  },
  {
    id: 3,
    title: "Smart Counter: Transforming Inventory Management",
    description: "A look into how Smart Counter optimizes object counting for businesses and industries.",
    image: "/55.png",
    date: "February 18, 2025",
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <p className="text-gray-700">{blog.description}</p>
                <button className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
