import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Page/Home'

function App() {


  return (
    <>
      <Navbar />

      <main style={{minHeight: '700px'}}>
        <Routes>
          <Route exact path={'/'} element={<Home />}/>
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
