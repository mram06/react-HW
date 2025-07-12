import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function MainLayout() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
