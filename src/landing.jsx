import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Landing() {
  const [count, setCount] = useState(0)

  return (
    <div>Welcome...</div>
  )
}

export default Landing;
