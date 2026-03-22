import { CircleCheckBig } from "lucide-react";
import React from "react";

const PricingFeatures = ({ features }) => {
  return (
    <p className="flex gap-1 my-2">
      <CircleCheckBig></CircleCheckBig> {features}
    </p>
  );
};

export default PricingFeatures;
