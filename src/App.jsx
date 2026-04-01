import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import BottomNavBar from "./components/BottomNavBar"



function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    </Routes>
    <Footer/>
    <BottomNavBar/>
    </>
  )
}

export default App
