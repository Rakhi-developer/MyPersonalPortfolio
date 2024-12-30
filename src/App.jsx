import Navbar from "./components/Navbar"
import React from 'react';
import Hero from "./components/Hero";
import About from "./components/about";
import Technologies from "./components/Technologies";
// import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
// import pic from "../assets/BackGround.jpg"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slec
     selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      

      </div>
     
      
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies/>
        {/* <Experience/> */}
        <Projects/>
        <Contacts/>

      </div>
      


    </div>
  )
}

export default App