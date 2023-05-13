import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';
import Service from './Components/Service/Service';
import Shape from './Components/Shape/Shape';

function App() {
  return (
    <div className=" ">
      {/* <Nav></Nav> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
<Landing>
  


</Landing>
 {/* <Shape></Shape> */}
 <Service></Service>
      <Footer></Footer>
    </div>
  );
}

export default App;
