
import { Suspense } from 'react';
import './App.css'
import Navbar from './componente/Navbar'
import TicketeContainar from './componente/Page/TicketeContainar'
import Footer from './componente/Footer';




const loadTikete =() => fetch("/Tickete.json").then((res) => res.json())





function App() {
  
const tiketePromice = loadTikete();
  return (
    <>
        <Navbar></Navbar>
    <div className="w-14/15 mx-auto">

   <Suspense fallback ={"loading.........."}>
    <TicketeContainar promise = {tiketePromice}></TicketeContainar>
    </Suspense>

    <Footer></Footer>
   </div>
    </>
  )
}

export default App
