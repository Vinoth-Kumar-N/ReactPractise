import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';


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
