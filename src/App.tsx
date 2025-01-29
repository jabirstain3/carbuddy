import { Outlet } from "react-router-dom";
import Footer from "./components/ui/Footer.tsx";
import Navbar from "./components/ui/Navbar.tsx";

function App() {
  return  (
    <section className="w-full">
      <Navbar />
      <Outlet />
      <Footer />
      <div className="border-t w-full px-6 py-3 ">
        <p className="w-fit mx-auto text-sm text-center">©2023 | ALL COPYRIGHT RESERVE BY CARBUDDY LTD. | DEVELOPED BY AL JABIR</p>
      </div>
    </section>
  );
}

export default App;
