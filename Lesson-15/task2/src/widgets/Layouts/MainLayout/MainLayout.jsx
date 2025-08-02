import { NavLink, Outlet } from "react-router";
import Navbar from "./ui/Navbar";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="text-white">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <NavLink
            to="/"
            className="text-2xl font-bold text-indigo-600 tracking-wide"
          >
            ✨ Wishes Planning
          </NavLink>
          <Navbar />
        </div>
      </header>
      <main className="flex-auto container mx-auto px-6 py-8">
        <Outlet />
      </main>
      <footer className="text-white py-6 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-300">
            © 2025 Wishes Planning. Make your dreams come true ✨
          </p>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
