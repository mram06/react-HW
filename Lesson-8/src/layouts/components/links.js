import frontRoutes from "../../routes/frontRoutes";

export default [
  {
    name: "Home",
    path: frontRoutes.navigate.home,
  },
  {
    name: "Teachers",
    path: frontRoutes.navigate.teachers.index,
  },
  {
    name: "Meeting",
    path: frontRoutes.navigate.meeting,
  },
  {
    name: "AboutApp",
    path: frontRoutes.navigate.aboutApp,
  },
  {
    name: " About developers",
    path: frontRoutes.navigate.aboutDev,
  },
];
