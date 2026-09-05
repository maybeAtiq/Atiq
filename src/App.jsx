import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer'

function App() {

  return (
    <div className='flex font-[lexend] flex-col mx-auto items-center justify-center h-full w-full p-5 md:py-9 md:px-14 gap-12 md:gap-16'>
      <NavBar/>
      <Hero/>
    </div>
  )
}

export default App
