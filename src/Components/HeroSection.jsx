import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import ImageSlider from './ImageSlider';
import { FaArrowDown } from "react-icons/fa";


const HeroSection = () => {
    const [displayText, setDisplayText] = useState("yours");
    const [displayColor, setDisplayColor] = useState("orange");
    const [animationClass, setAnimationClass] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setAnimationClass("moveUpAndFadeOut"); 
            setTimeout(() => {
                setDisplayText((prevText) => {
                    if (prevText === "yours") return "secure";
                    else if (prevText === "secure") return "fast";
                    else return "yours"; 
                });
                setDisplayColor((prevColor) => {
                    if (prevColor === "orange") return "green";
                    else if (prevColor === "green") return "blue";
                    else return "orange"; 
                });
                setAnimationClass(""); 
            }, 1000); 
        }, 3000);
        
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="hero">
            <div className="logo">
                <img src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" alt="Logo" />
            </div>
            
            <div className="title">
                <h1 className='browser'>The browser</h1>
                <h1 className="title-1">
                    <span className="built-to-be">built to be</span>
                    <strong style={{ color: displayColor }}>
                        <AnimationWrapper className={animationClass}>
                            {displayText}
                        </AnimationWrapper>
                    </strong>
                </h1>
            </div>

            <div className="primary-navbar">
                <nav>
                    <ul>
                        <li><a href="#">Updates</a></li>
                        <li><a href="#">AI yours</a></li>
                        <li><a href="#">Safe</a></li>
                        <li><a href="#">Fast ByGoogle</a></li>
                    </ul>
                </nav>
            </div>
            
            <div className='Button-div'>
                <button><FaArrowDown/> Download</button>
            </div>
           
            <div className="installer">
                <p>Need the Chrome installer? <a href="#">Download Here</a></p>
            </div>
            <ImageSlider/>
            
        </div>
    );
}
const AnimationWrapper = ({ className, children }) => {
    return <div className={className}>{children}</div>;
}

export default HeroSection;
