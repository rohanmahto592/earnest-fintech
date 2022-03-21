
import './App.css';
import Navbar from './component/navbar/Navbar';
import First from './component/firstcomponent/First';
import Second from './component/secondcomponent/Second';
import Third from './component/thirdcomponent/Third';
import Fourth from './component/Fourthcomponent/Fourth';
import Fifth from './component/fifthcomponent/Fifth';
import Sixth from './component/sixth/Sixth';
import Footer from './component/footer/Footer'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <Fifth/>
      <Sixth/>
      <Footer/>
    </div>
  );
}

export default App;
