import Marugame from './marugame.jsx'
import Landing from './landing.jsx'
import Cafe3 from './cafe3.jsx'
import TopDog from './topdog.jsx'
import NavigationBar from './navbar.jsx'
import About from './about.jsx'
import BerkeleyThaiHouse from './berkeleyThai.jsx'
import PurpleKow from './purpleKow.jsx'
import SizzlingLunch from './sizzlingLunch.jsx'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' 


function App() {

  return (
      <Router>

        <NavigationBar />

        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/landing" element={<Landing />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route path="/marugame" element={<Marugame />}></Route>
          <Route path="/cafe3" element={<Cafe3 />}></Route>
          <Route path="/topdog" element={<TopDog />}></Route>
          <Route path="/berkeleythai" element={<BerkeleyThaiHouse />}></Route>
          <Route path="/sizzlinglunch" element={<SizzlingLunch />}></Route>
          <Route path="/purplekow" element={<PurpleKow />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

      </Router>

  )
}

function NotFound() {
  return <><div><img src="https://www.boostability.com/content/wp-content/uploads/sites/2/2012/10/BOOST_BLOG_IMAGE_RB_SET_10_404_PAGE_1200x628px_v1_3.jpg"></img></div></>
}

export default App
