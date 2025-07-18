import Breadcrumbs from "@/components/task2/breadcrumbs/Breadcrumbs";
import BusesProvider from "@/providers/task2/BusesProvider";
import HotelsProvider from "@/providers/task2/HotelsProvider";
import TripProvider from "@/providers/task2/TripProvider";
import { Outlet, useLocation, useNavigate } from "react-router";

function Task2() {
  const navigate = useNavigate();
  const location = useLocation();

  function onBegin() {
    navigate("/task2/buses");
  }

  return (
    <>
      <h2>Trip booking</h2>
      <Breadcrumbs />
      <p>
        Задача 2. Розробити сайт для планування подорожі (потрібно вибирати
        автобуси і готелі). На одній сторінці знаходиться перелік автобусів, на
        другій сторінці вибираємо готелі. Вибрати можна декілька автобусів і
        готелів (тоді турфірма самостійно вибере один доступних і вибраних вами)
        . На третій відображаємо результати вибору з попередніх сторінок (список
        вибраних автобусів і готелів) (тут можна видалити деякі автобуси чи
        готелі). Тут бекенд не використовуємо а константні дані.
      </p>
      {location.pathname === "/task2" ? (
        <button onClick={onBegin}>Begin booking</button>
      ) : (
        ""
      )}
      <TripProvider>
        <HotelsProvider>
          <BusesProvider>
            <Outlet />
          </BusesProvider>
        </HotelsProvider>
      </TripProvider>
    </>
  );
}

export default Task2;
