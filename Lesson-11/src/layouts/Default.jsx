import { NavLink, Outlet } from "react-router";

function Default() {
  return (
    <div className="wrapper">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Task 1</NavLink>
            </li>
            <li>
              <NavLink to="/task2">Task 2</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default Default;
