import './App.scss';
import About from './sections/about/about';
import MainSection from './sections/mainSection/mainSection';
import Work from './sections/work/work';
import Footer from './sections/footer/footer'
//import UpArrow from './assets/caret-circle-up-bold.svg';
import { useRef } from 'react';

function App() {
  const domRef = useRef(null);

    // function checked() {
    //   document.documentElement.setAttribute('data-theme', 'light')
    // }
  

    window.onscroll = function () {
        scrollFunction()
    }
    
    function scrollFunction() {
        if (document.documentElement.scrollTop > 400) {
            domRef.current.style.display = "block";
        } else {
            domRef.current.style.display = "none";
        }
    }
    



  return (
    <div className="app container" id="app">
        
        <MainSection />
        <About />
        <Work />
        <Footer />

        <a href="#app" id="icon-container" ref={domRef}>
          {/* <img src={UpArrow} alt="up-arrow" className="top-icon" /> */}
          <svg id="Raw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="svg">
            <rect width="256" height="256" fill="none"/>
            <circle cx="128" cy="128" r="96" fill="none" stroke="#181818" strokeMiterlimit="10" strokeWidth="24"/>
            <polyline points="164 144 128 104 92 144" fill="none" stroke="#181818" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
          </svg>
        </a>

        
            {/* <label htmlFor="switch">click</label>
            <input onChange={checked} type="checkbox" name="mode" id="switch" /> */}
    

    </div>
  );
}

export default App;
