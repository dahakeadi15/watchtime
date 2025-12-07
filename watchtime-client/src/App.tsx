import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen w-full">
        <Navbar />
        <div className="grow">
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
          </Routes>
        </div>
        <MobileNav />
      </div>
    </>
  );
}

export default App;
