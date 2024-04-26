
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './componebts/Layout';
import Home from './componebts/Home';
import About from './componebts/About';
import Contact from './componebts/Contact';
import Portfolio from './componebts/Portfolio';
import Resume from './componebts/Resume';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />




        </Route>
      </Routes>
    </>
  );
}

export default App;
