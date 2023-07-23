import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Theater from './Components/Theater/Theater'
import Tv from './Components/Tv/Tv'
import Footer from './Components/Footer/Footer'
import Movies from './Components/Pages/Movies'
import Pricing from './Components/Pages/Pricing'

import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
    <div className='header'>
     <Header />
     <Routes>
        <Route path='/' element={<Hero />} />
     </Routes>
    </div>
    <div className="main">
    <Routes>
        <Route path='/movies' element={<Movies />}/>
        <Route path='/' element={<Theater />} />
     </Routes>
    </div>
    <div className="main2">
      <Routes>
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/' element={<Tv />} />
      </Routes>
    </div>
    <div className="footer">
      <Footer />
    </div>
    </div>
  );
}

export default App;
