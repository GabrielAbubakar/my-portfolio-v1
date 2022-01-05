import { useEffect, useState } from 'react'
import './button.scss'

const Button = () => {

    const [ isVisible, setIsVisible ] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }

    useEffect(() => {
        window.onscroll = toggleVisibility;
    })

    return (
        <div>
            {isVisible && (
                <div className='icon-container' onClick={() => scrollToTop()} >
                            <span id="icon-container" >
                                {/* <img src={UpArrow} alt="up-arrow" className="top-icon" /> */}
                                <svg id="Raw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="svg">
                                  <rect width="256" height="256" fill="none"/>
                                  <circle cx="128" cy="128" r="96" fill="none" stroke="#181818" strokeMiterlimit="10" strokeWidth="24"/>
                                  <polyline points="164 144 128 104 92 144" fill="none" stroke="#181818" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
                                </svg>
                            </span>
                </div>
            )}
        </div>
    )
}

export default Button;