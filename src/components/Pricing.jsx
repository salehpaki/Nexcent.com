import React from "react";

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "$9.99/month",
    features: [
      "Object detection (up to 500 images)",
      "Basic weather forecasts",
      "Email support",
      "Community access",
    ],
    buttonText: "Get Started",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
  },
  {
    name: "Pro Plan",
    price: "$19.99/month",
    features: [
      "Unlimited object detection",
      "Advanced weather predictions",
      "Priority email support",
      "Integration with APIs",
      "Access to premium features",
    ],
    buttonText: "Upgrade Now",
    buttonColor: "bg-green-500 hover:bg-green-600",
  },
  {
    name: "Enterprise Plan",
    price: "Custom Pricing",
    features: [
      "Dedicated AI model customization",
      "Real-time weather alerts",
      "24/7 priority support",
      "Full API access",
      "On-demand feature requests",
    ],
    buttonText: "Contact Us",
    buttonColor: "bg-gray-700 hover:bg-gray-800",
  },
];

const Pricing = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Choose Your Plan</h2>
        <p className="text-gray-600 text-center mb-12">
          Select the best plan that suits your needs and start using Smart Counter & Weather Forecasting today!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-gray-800">{plan.name}</h3>
              <p className="text-xl text-gray-600 my-4">{plan.price}</p>
              <ul className="text-gray-600 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="py-2 border-b last:border-none">{feature}</li>
                ))}
              </ul>
              <button className={`${plan.buttonColor} text-white px-6 py-2 rounded-md shadow-md transition duration-300`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
