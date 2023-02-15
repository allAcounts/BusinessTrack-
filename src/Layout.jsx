import NavBar from "./components/navbar/NavBar";

const Layout = ({ children }) => {
  return(
    <>
      <NavBar />
      {children}
      {/* <Footer /> */
    </>
  )
}

export default Layout;
