
import { Suspense } from 'react';
import './App.css'
import Navbar from './componente/Navbar'
import TicketeContainar from './componente/Page/TicketeContainar'
import Footer from './componente/Footer';
import { ToastContainer } from 'react-toastify';




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
  <ToastContainer>
    </ToastContainer>
   </div>
    </>
  )
}

export default App
