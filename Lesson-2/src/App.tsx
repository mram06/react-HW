import "./App.css";
import LoginComponent from "./components/1_LoginComponent/LoginComponent.jsx";
import FlightBooking from "./components/2_FlightBooking/FlightBooking.jsx";
import EnglishTrainer from "./components/3_EnglishTrainer/EnglishTrainer.jsx";
import WorkersList from "./components/4_WorkersList/WorkersList.jsx";
import GoogleSearch from "./components/5_GoogleSearch/GoogleSearch.jsx";
import KitchenManager from "./components/6_KitchenManager/KitchenManager.jsx";

function App() {
  return (
    <>
      <LoginComponent />
      <hr />
      <FlightBooking />
      <hr />
      <EnglishTrainer />
      <hr />
      <WorkersList />
      <hr />
      <GoogleSearch />
      <hr />
      <KitchenManager />
    </>
  );
}

export default App;
