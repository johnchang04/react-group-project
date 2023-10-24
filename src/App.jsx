import Marugame from './marugame.jsx'
import Landing from './landing.jsx'
import Cafe3 from './cafe3.jsx'
import TopDog from './topdog.jsx'
import NavigationBar from './navbar.jsx'
import About from './about.jsx'

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
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

      </Router>
  )
}

function NotFound() {
  return <>'404 Not Found Trollface'</>
}

export default App
