import React from "react";
import "./AboutMe.css";

import stackoverflow from "./../Resources/stackoverflow.png";

export default function AboutMe() {
  return (
    <div className="w-full bg-sky-500 h-[46rem] flex">
      <div className="w-[42rem] border-[2px] border-white rounded-3xl shadow-2xl mx-auto mt-10 mb-16">
        <div className="m-12 flex-col">
          <div className="left-0 text-white font-extrabold text-6xl mx-0 my-0 text-left mt-5">
            About Me
          </div>
          <div className="left-0 text-white text-[18px] font-normal mx-0 my-5 text-left">
            Hello, my name is Sohaib Basit and I am a software engineer with
            over 10 years of experience. I started my career back in 2011 and
            never looked back on programming.
          </div>
          <div className="left-0 text-white text-[18px] font-normal mx-0 my-5 text-left">
            Fast forward today, i have had the privilege of working with some of
            the best minds in the industry and have been able to build some
            amazing products. I have worked on Android Apps, iOS Apps, E-Commerce, SaaS products.
          </div>
          <div className="left-0 text-white text-[18px] font-normal mx-0 my-5 text-left">
            My recent experience was designing, building and leading a team to
            build a Digital Signage product from the ground up. The product is successfully
            deployed at a number of know universities. I also hired and
            trained a team of 4 technichians to maintain the product.
          </div>
          <div className="border-t-[1px] border-white">
            <div className="mt-5 content-center flex space-x-1">
                {getIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg","Typescript")}
                {getIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg","Javascript")}
                {getIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg","Android")}
                {getIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg","iOS")}
                {getIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg","Swift")}
                {getIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg","Java")}
                {getIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg","React")}
                {getIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg","Php")}
                {getIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg","Objective-C")}
                {getIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg","Mac Desktop")}
                {getIcon("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg","Typescript")}

                
              
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getIcon(icon:string , desc:string){
    return(
        <div className="relative group bg-center flex-col content-center">
        <img
          className="h-7 w-7 mx-auto"
          src={icon}
          alt={desc}
        ></img>
        <div className="text-white text-xs text-extralight mt-1">{desc}</div>
      </div>
    );
}