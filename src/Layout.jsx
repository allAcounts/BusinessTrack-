import NavBar from "./components/navbar/NavBar";
import './footer/Footer.css';
import Footer from "./footer/Footer";


const Layout = ({ children }) => {
  return(
    <>
      <NavBar />
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default Layout;