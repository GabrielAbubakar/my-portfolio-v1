import './App.scss';
import About from './sections/about/about';
import MainSection from './sections/mainSection/mainSection';
import Work from './sections/work/work';
import Footer from './sections/footer/footer'
import Button from './components/button/button';
//import UpArrow from './assets/caret-circle-up-bold.svg';

function App() {
  // const domRef = useRef(null);

  //   // function checked() {
  //   //   document.documentElement.setAttribute('data-theme', 'light')
  //   // }
  

  //   window.onscroll = function () {
  //       scrollFunction()
  //   }
    
  //   function scrollFunction() {
  //       if (document.documentElement.scrollTop > 400) {
  //           domRef.current.style.display = "block";
  //       } else {
  //           domRef.current.style.display = "none";
  //       }
  //   }
    



  return (
    <div className="app container">
        
        <MainSection />
        <About />
        <Work />
        <Footer />
        <Button />

        
            {/* <label htmlFor="switch">click</label>
            <input onChange={checked} type="checkbox" name="mode" id="switch" /> */}
    

    </div>
  );
}

export default App;
