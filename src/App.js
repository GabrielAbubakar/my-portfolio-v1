import './App.scss';
import About from './sections/about/about';
import MainSection from './sections/mainSection/mainSection';
import Work from './sections/work/work';

function App() {

    // function checked() {
    //   document.documentElement.setAttribute('data-theme', 'light')
    // }



  return (
    <div className="app container">
        
        <MainSection />
        <About />
        <Work />

        
            {/* <label htmlFor="switch">click</label>
            <input onChange={checked} type="checkbox" name="mode" id="switch" /> */}
    

    </div>
  );
}

export default App;
