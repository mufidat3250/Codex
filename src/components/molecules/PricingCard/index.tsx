import React, { ReactNode } from "react";
import "./style.scss";
import DoubleSideArrow from "@/app/Vectors/DoubbleSideArrow";
import Button from "@/components/atoms/Button";

interface IPricingProps {
  title: string;
  price: string;
  desc: string;
  button: ReactNode;
  index: number;
}

const PricingCard = ({ title, price, desc, button, index }: IPricingProps) => {
  console.log(index);
  return (
    <div className={`pricing-wrapper ${index === 1 ? 'border-b-[2px] border-l-[0.5px] border-r-[0.5px] border-[#3036C6]' : ''}`}>
      <div
        className={`price-head ${index === 1 ? "price-head-img " : "bg-none"}`}
      >
        <h3>{title}</h3>
        <div className="arrow">
          <DoubleSideArrow color={index === 1 ? 'white' : ''}/>
        </div>
        <h1>
          {price}
          <span className="text- text-2xl">/mo</span>
        </h1>
      </div>
      <div className="content">
        <p className="desc">{desc}</p>
        <div className="button-container">{button}</div>
      </div>
    </div>
  );
};

export default PricingCard;
