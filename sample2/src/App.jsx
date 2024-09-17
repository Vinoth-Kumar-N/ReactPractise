import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/Projects',
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
