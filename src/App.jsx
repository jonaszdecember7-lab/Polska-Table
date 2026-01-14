import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Menu from './components/Menu.jsx';
import Contact from './components/Contact.jsx';
import AboutUs from './components/AboutUs.jsx';
import FeaturedMenu from './components/FeaturedMenu.jsx';
import Starters from './components/Starters.jsx';
import Mains from './components/Mains.jsx';
import Drinks from './components/Drinks.jsx';
import Desserts from './components/Desserts.jsx';
import NotFound from './components/NotFound.jsx'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path="menu" element={<Menu />}>
        <Route index element={<FeaturedMenu />} />
        <Route path="starters" element={<Starters />} />
        <Route path="mains" element={<Mains />} />
        <Route path="drinks" element={<Drinks />} />
        <Route path="desserts" element={<Desserts />} />

      </Route>
      <Route path='contact' element={<Contact />} />
      <Route path='about-us' element={<AboutUs />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  { basename: '/Polska-Table' }
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
