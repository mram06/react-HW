import EditWishPage from "@/pages/EditWishPage";
import HomePage from "@/pages/HomePage";
import WishesPage from "@/pages/WishesPage";
import MainLayout from "@/widgets/Layouts/MainLayout";
import { createBrowserRouter } from "react-router";

export const routes = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "wishes",
        Component: WishesPage,
      },
      {
        path: "wishes/edit/:id?",
        Component: EditWishPage,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
