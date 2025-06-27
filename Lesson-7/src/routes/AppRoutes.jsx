import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Payment from "../pages/Payment";
import Contacts from "../pages/Contacts";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";

import frontRoutes from "./frontRoutes";
import Products from "../pages/Products";

function AppRoutes() {
  return (
    <Routes>
      <Route path={frontRoutes.pages.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={frontRoutes.pages.shop.index}>
          <Route index element={<Shop />} />
          <Route path="/shop/:id" element={<Products />} />
        </Route>
        <Route path={frontRoutes.pages.payment} element={<Payment />} />
        <Route path={frontRoutes.pages.contacts} element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
