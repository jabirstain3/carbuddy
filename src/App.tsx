import { Outlet } from "react-router-dom";
import Footer from "./components/ui/Footer.tsx";
import Navbar from "./components/ui/Navbar.tsx";

function App() {
  return  (
    <section className="w-11/12 xl:w-10/12 mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default App;
