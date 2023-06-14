import logo from "./logo.svg";
import "./App.css";
// import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
// import Landing from "./Components/Landing/Landing";
// import Service from "./Components/Service/Service";
// import Shape from "./Components/Shape/Shape";
import TopNav from "./Components/TopNav/TopNav";
// import Review from "./Components/Review/Review";
import SVG from "./Components/SVG/SVG";
// import Working from "./Components/Working/Working";
// import Achievement from "./Components/Working/Achievement/Achievement";
// import ScrollingTime from "./Components/SVG/ScrollingTime";
// import ScrollingContent from "./Components/SVG/ScrollingContent";
// import ZoomInOnScroll from "./Components/SVG/ZoomInOnScroll";
import SliderWithTextAnimation from "./Components/SVG/SliderWithTextAnimation";
import { Route, Routes } from "react-router-dom";
import NewsMedia from "./Components/NewsMedia/NewsMedia";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Landing from "./Components/Landing/Landing";
import ScrollingContent from "./Components/SVG/ScrollingContent";
import SliderWithFadeInTextAnimation from "./Components/SVG/SliderWithFadeInTextAnimation";
import NewNav from "./Components/Nav/NewNav";
import Carrer from "./Components/Carrer/Carrer";
import About from "./Components/About/About";
import ToggleButton from "./Components/SVG/ToggleButton";

// import Parallax from './Components/Parallax/Parallax';

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
      <TopNav />
      
      {/* <ToggleButton></ToggleButton> */}
      {/* <NewNav></NewNav> */}
      {/* <Nav></Nav> */}
      {/* <Landing></Landing> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>

        <Route path="/news-media" element={<NewsMedia />}></Route>
        <Route path="/career" element={<Carrer />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/physiotherapy" element={<Physiotherapy />}></Route>
        <Route path="/manualtherapy" element={<ManualTherapy />}></Route>
        <Route path="/sports-injuries" element={<SportsInjuries />}></Route>
        <Route path="/rehabilitation" element={<Rehabilitation />}></Route> */}
      </Routes>
      {/* <ZoomInOnScroll></ZoomInOnScroll> */}
      {/* <SliderWithTextAnimation></SliderWithTextAnimation>
      <SliderWithFadeInTextAnimation></SliderWithFadeInTextAnimation> */}
      {/* <SVG></SVG> */}
      {/* <Parallax></Parallax> */}
      {/* <ScrollingTime></ScrollingTime> */}
      {/* <ScrollingContent></ScrollingContent> */}

      <Footer></Footer>
    </div>
  );
}

export default App;
