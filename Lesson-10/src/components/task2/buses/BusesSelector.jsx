import { useContext, useState } from "react";
import BusRoute from "./BusRoute";
import { BusesContext } from "@/context/task2/BusesContext";
import { useNavigate } from "react-router";
import { TripContext } from "@/context/task2/TripContext";
import { TRIP_ACTION_TYPES } from "@/constants/task2/tripActionTypes";

function BusesSelector() {
  const buses = useContext(BusesContext);
  const navigate = useNavigate();

  function onNextStep() {
    navigate("/task2/hotels");
  }

  const { dispatch, tripState } = useContext(TripContext);
  function onSelectBus(busId) {
    if (isSelected(busId)) {
      dispatch({
        type: TRIP_ACTION_TYPES.REMOVE,
        payload: { name: "selectedBuses", value: busId },
      });
    } else {
      dispatch({
        type: TRIP_ACTION_TYPES.ADD,
        payload: { name: "selectedBuses", value: busId },
      });
    }
    // console.log(isSelected(busId));

    // if (isSelected(busId)) {
    //   const filteredBusesList = selectedBuses.filter((id) => id != busId);
    //   setSelectedBuses(filteredBusesList);
    // } else setSelectedBuses((prevVal) => [...prevVal, busId]);
  }

  function isSelected(busId) {
    return tripState.selectedBuses.some((val) => val == busId);
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {buses.map((bus) => (
          <BusRoute
            key={bus.id}
            data={bus}
            onSelect={onSelectBus}
            isSelected={isSelected}
          />
        ))}
      </div>
      <button onClick={onNextStep}>Наступний крок</button>
    </>
  );
}

export default BusesSelector;
