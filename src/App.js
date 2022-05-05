import pp from './images/pp.JPG';
import './App.css';
import BasicInfo from './components/BasicInfo';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="crop">
        <img src={pp} alt='pp' className="pp"/>
      </div>
      <BasicInfo />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
export default App;
