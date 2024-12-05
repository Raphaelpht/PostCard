import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from "./Pages/About";
import Welcome from "./Pages/Welcome";
import Menu from './Components/Menu';
import Footer from 'Components/Footer';
import Standard from 'Components/Standard';
import Post from 'Pages/Post';
import NotFound from 'Pages/NotFound';
import ScrollToTop from 'Components/ScrollToTop';

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu/>

      <Routes>
        <Route path="/" element={<Standard />}>
          <Route index element={<Welcome/>} />
          <Route path="about" element={<About/>} />
        </Route>

        <Route path='posts/:id/*' element={<Post/>} />

        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes;
