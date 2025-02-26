import React from "react";

const features = [
  {
    id: 1,
    title: "Real-Time Object Detection & Counting",
    description: "Our Smart Counter leverages YOLOv8 and Canny Edge Detection to provide fast and accurate object detection, making it ideal for inventory management and traffic monitoring.",
    icon: "📸",
  },
  {
    id: 2,
    title: "AI-Powered Weather Forecasting",
    description: "Using deep learning models like ANN, our system analyzes historical meteorological data to provide precise and reliable weather predictions.",
    icon: "🌦️",
  },
  {
    id: 3,
    title: "User-Friendly Mobile Application",
    description: "Our mobile app integrates advanced models with a simple UI, ensuring accessibility for users to track object counts and weather updates effortlessly.",
    icon: "📱",
  },
  {
    id: 4,
    title: "Disaster Preparedness Alerts",
    description: "Receive timely disaster warnings and precautionary measures to stay safe in extreme weather conditions and emergencies.",
    icon: "🚨",
  },
  {
    id: 5,
    title: "Innovative Research & Development",
    description: "Our project focuses on enhancing existing AI capabilities to improve efficiency and accuracy in various industries.",
    icon: "🧠",
  },
];

const Features = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
