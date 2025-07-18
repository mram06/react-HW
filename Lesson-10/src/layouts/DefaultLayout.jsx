import { Link, Outlet } from "react-router";

function DefaultLayout() {
  return (
    <div className="wrapper">
      <header>
        <ul>
          <li>
            <Link to="/">Task 1</Link>
          </li>
          <li>
            <Link to="/task2">Task 2</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default DefaultLayout;
