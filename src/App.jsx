import About from './components/About'
import NavBar from './components/Navbar';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer'

function App() {

  return (
    <div className='flex flex-col mx-auto items-center justify-center w-full'>
      <NavBar/>
      <Introduction/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/> 
    </div>
  )
}

export default App
