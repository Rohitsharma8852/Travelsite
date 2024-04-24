import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import BlogePage from './Pages/BlogePage';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Service from './Pages/Service';

function App() {

  const routes = createBrowserRouter([  
       {
          path:"/",
          element:<Home/>
       },
       {
         path:"/blogs",
         element:<BlogePage/>
       },
       {
         path:"/best-places",
         element:<Gallery/>
       },
       {
        path:"/about",
        element:<About/>
       },
      {
        path:"/service",
        element:<Service/>
      },


  ])


  return (
     <>
        <RouterProvider router={routes}/>
     </>
  );
}

export default App;
