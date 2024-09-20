import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';



const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/Projects',
    element: <Projects />
  },
  {
    path:'/Contact',
    element: <Contact />
  },
  {
    path:'/About',
    element: <About />
  }
]);

function App() {
  
  return (
    <>
      <RouterProvider router = {router}>
      </RouterProvider>
    </>
  )
}

export default App
