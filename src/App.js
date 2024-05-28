import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <Body />
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contactus",
      element: <Contact />,
    },
    {
      path: "/restaurant/:resId",
      element: <RestaurantMenu />,
    }
  ],
    errorElement: <Error />
  },
]);

function Root() {
  return (
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  );
}

export default Root;
