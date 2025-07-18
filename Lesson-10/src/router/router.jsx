import BusesSelector from "@/components/task2/buses/BusesSelector";
import Checkout from "@/components/task2/checkout/Checkout";
import HotelsSelector from "@/components/task2/hotels/HotelsSelector";
import DefaultLayout from "@/layouts/DefaultLayout";
import Task1 from "@/pages/Task1";
import Task2 from "@/pages/Task2";

import { createBrowserRouter } from "react-router";

export const routes = [
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        Component: Task1,
      },
      {
        path: "/task2",
        handle: { title: "Booking" },
        Component: Task2,
        children: [
          {
            path: "buses",
            Component: BusesSelector,
            handle: { title: "Buses" },
          },
          {
            path: "hotels",
            Component: HotelsSelector,
            handle: { title: "Hotels" },
          },
          {
            path: "checkout",
            Component: Checkout,
            handle: { title: "Checkout" },
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
