import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="flex items-center">
      <ul className="flex space-x-6">
        <li>
          <NavLink
            to="/wishes"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
              }`
            }
          >
            ✨ Wishes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
