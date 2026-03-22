import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features, badge } = pricing;
  return (
    <div
      data-theme="dark"
      className="flex flex-col border bg-indigo-600 rounded-2xl p-4 "
    >
      {/* card header */}
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">{name}</h1>
          {badge && (
            <span className="badge badge-xs badge-warning">Most Popular</span>
          )}
        </div>
        <h4 className="text-2xl">{price}</h4>
        <p className="mt-10 mb-4 text-lg font-bold">{description}</p>
      </div>
      {/* card body */}

      <div className="flex-1 bg-indigo-900 p-2 rounded-lg">
        {features.map((features, index) => (
          <PricingFeatures key={index} features={features}></PricingFeatures>
        ))}
      </div>
      <button className="btn btn-info btn-block mt-6">Subscribe</button>
    </div>
  );
};

export default PricingCard;
