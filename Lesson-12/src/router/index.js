import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import PostsPage from "@/pages/PostsPage";
import PostsAddForm from "@/pages/PostsPage/PostsAddForm";
import PostsPageInfinite from "@/pages/PostsPage/PostsPageInfinite";

import { createBrowserRouter } from "react-router";

export const routes = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        handler: {
          title: "Home",
        },
      },
      {
        path: "posts",
        Component: PostsPage,
        handler: {
          title: "Posts",
        },
      },
      {
        path: "posts/infinite",
        Component: PostsPageInfinite,
        handler: {
          title: "Posts | Infinite",
        },
      },
      {
        path: "posts/add",
        Component: PostsAddForm,
        handler: {
          title: "Add post",
        },
      },
      {
        path: "about",
        Component: About,
        handler: {
          title: "About",
        },
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
