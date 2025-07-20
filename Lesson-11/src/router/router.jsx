import Default from "@/layouts/Default";
import Task1 from "@/pages/Task1";
import Task2 from "@/pages/Task2";
import { createBrowserRouter } from "react-router";

export const routes = [
  {
    path: "",
    element: <Default />,
    children: [
      {
        path: "/",
        Component: Task1,
      },
      {
        path: "/task2",
        Component: Task2,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
