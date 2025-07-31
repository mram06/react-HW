import routes from "@/router/routes";
import { NavLink } from "react-router";

function getItemsFromMainMenu(routesList, basePath) {
  const resList = [];
  routesList.forEach((route) => {
    if (route?.meta?.labelForMainMenu)
      resList.push({
        path: route.index ? basePath : basePath + route.path,
        label: route.meta.labelForMainMenu,
      });
    if (route.children)
      resList.push(
        ...getItemsFromMainMenu(
          route.children,
          basePath ? basePath + route.path + "/" : route.path
        )
      );
  });
  return resList;
}

function Navbar() {
  const itemsFromMainMenu = getItemsFromMainMenu(routes, "");

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="text-xl font-semibold text-gray-800">
              EMR System
            </div>
          </div>

          {/* Navigation Menu */}
          <ul className="flex items-center space-x-8">
            {itemsFromMainMenu.map((route, index) => (
              <li key={index}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      isActive
                        ? "text-blue-600 bg-blue-50 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`
                  }
                >
                  {route.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
