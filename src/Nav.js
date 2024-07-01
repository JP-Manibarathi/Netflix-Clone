import React from 'react'
import './Nav.css';
import { useState,useEffect } from 'react';

function Nav() {
    const [handle, showHandle] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                showHandle(true);
            } else {
                showHandle(false);
                
            }
        });
        return () => {
            window.removeEventListener("scroll",showHandle);
        };
    }, []);

    return (
        <div className={`nav ${handle && 'nav_black'}`}>
            <img
                className='nav_logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
            <img
                className='nav_avatar'
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt = "Netflix avatar"
            />
        </div>
    )
}

export default Nav
