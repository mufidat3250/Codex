"use client";
import React, { useState } from "react";
import "./style.scss";
import Button from "@/components/atoms/Button";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMesage] = useState({ success: "", error: "" });

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("submitted");
    if (!email) {
      setMesage({ ...message, error: "Email Must be provided" });
      console.log(message.error);
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) {
      setMesage({ ...message, error: "Format must be example@gmail.com" });
    } else {
      setMesage({ ...message, success: "Email submitted successfully" });
    }
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="codex">
            <Image
              src="/vectors/logo.svg"
              alt=""
              className="h-[3.17rem]"
              height={50.75}
              width={150}
            />
            <p className="max-w-[18rem] font-normal text-base mt-[1.875rem]">
              Take advantage of special offers and promotions, making it easier
              than ever to embark on your journey towards mastery
            </p>
            <div className="socials">
              <span>
                <Image
                  src="/vectors/twitter.svg"
                  alt=""
                  className="social-img"
                  width={20}
                  height={20}
                />
              </span>
              <span>
                <Image
                  src="/vectors/facebook.svg"
                  alt=""
                  className="social-img"
                  width={20}
                  height={20}
                />
              </span>
              <span>
                <Image
                  src="/vectors/instagram.svg"
                  alt=""
                  className="social-img"
                  height={20}
                  width={20}
                />
              </span>
              <span>
                <Image
                  src="/vectors/linkedIn.svg"
                  alt=""
                  className="social-img"
                  width={20}
                  height={20}
                />
              </span>
            </div>
          </div>
          <div className="resource">
            <h3 className="text-[1.375rem] font-bold text-[#060E1A] mb-[1.875rem]">
              Resources
            </h3>
            <div className="">
              {["services", "Pricing", "Testimonials", "Blog"].map((r, i) => (
                <p
                  className="text-[1.25rem] text-[#51565E] font-normal mb-[0.625rem] cursor-pointer"
                  key={i}
                >
                  {r}
                </p>
              ))}
            </div>
          </div>
          <div className="links">
            <h3 className="text-[1.375rem] font-bold text-[#060E1A] mb-[1.875rem]">
              Usefull Links
            </h3>
            <div className="">
              {[
                "Terms of Services",
                "Privacy Policy",
                "Cookie Policy",
                "Blog",
              ].map((r, i) => (
                <p
                  className="text-[1.25rem] text-[#51565E] font-normal mb-[0.625rem] cursor-pointer"
                  key={i}
                >
                  {r}
                </p>
              ))}
            </div>
          </div>
          <div className="letters">
            <h3 className="text-[1.375rem] font-bold text-[#060E1A] mb-[1.875rem]">
              News Letter
            </h3>
            <p className="max-w-[15.06rem]">
              Sign up and receive the lastest news via email.
            </p>
            <div className="">
              <form className="flex mt-[1.5625rem]" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="flex-1 border-[1px] pl-[1.875rem] bg-transparent border-[#060E1A] outline-none "
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="w-[6.25rem]">
                  <Button
                    bgColor="#2657A4"
                    title="Send"
                    bbLeft="0"
                    btLeft="0"
                  />
                </div>
              </form>

              <span></span>
              <span className="">
              {message.error ? (
                  <span className="text-red-500">{message.error}</span>
                ): <span className="text-green-500">{message.success}</span>}
              
              
              </span>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <div className="hr"></div>
          <p>Copyright 2021 The Codext All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
