import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <Header title="React JS Blog" />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
