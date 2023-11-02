import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet/>      
      </main>
      <Footer />
    </div>
  );
}

export default App;
