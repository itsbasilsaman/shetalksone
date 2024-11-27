import AboutApp from "./components/AboutApp"
import AboutAppTwo from "./components/AboutAppTwo"
import AboutUs from "./components/AboutUs"
import Download from "./components/Download"
import Header from "./components/Header"
import LogoSection from "./components/LogoSection"
import Quotes from "./components/Quotes"
import Home from "./Pages/Home"

 
function App() {
  

  return (
    <>
      <Header/>
      <Home/>
      <LogoSection/>
      <AboutApp/>
      <AboutUs/>
      <Quotes/>
      <AboutAppTwo/>
      <Download/>
    </>
  )
}

export default App
