'use client'
import Button from "@/components/atoms/Button";
import PricingCard from "@/components/molecules/PricingCard";
import { pricing } from "@/lib/data";
import React from "react";
import './style.scss'

const Pricing = () => {
  return (
    <div className="pricing" id="pricing">
      <h1>Choose your best pricing plan</h1>
      <div className="add">
        <p>Added for Monthly</p>
        <span className="toggle-wrapper">
          <span className="toggle"></span>
        </span>
        <p>Yearly</p>
      </div>
        <div className="price">
            {pricing.map(({title, price, desc, btnBg, btnColor}, index)=>{
        return <PricingCard title={title} price={price} desc={desc} button={<Button color={btnColor} bgColor={btnBg}/>} index={index}  key={`pricing-${index}`}/>
        })}
        </div>
    </div>
  );
};

export default Pricing;
