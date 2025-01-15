import { Outlet } from "react-router-dom";
import Footer from "./components/ui/Footer.tsx";
import Navbar from "./components/ui/Navbar.tsx";

function App() {
  return  (
    <section className="w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default App;
