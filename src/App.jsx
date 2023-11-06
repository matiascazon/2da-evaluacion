import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen dark:bg-neutral-900 dark:text-white">
      <Navbar />
      <main className="pb-7">
        <Outlet/>      
      </main>
      <Footer />
    </div>
  );
}

export default App;
