import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <Link to="/">Задача 1</Link> | <Link to="/task2">Задача 2</Link> |{" "}
      <Link to="/task3">Задача 3</Link> | <Link to="/task4">Задача 4</Link>
    </nav>
  );
}

export default Navbar;
