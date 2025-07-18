import { TripContext } from "@/context/task2/TripContext";
import { useReducer } from "react";

const initialTripData = {
  selectedBuses: [],
  selectedHotels: [],
};

import { TRIP_ACTION_TYPES } from "@/constants/task2/tripActionTypes";

function tripReducer(currentState, action) {
  let newState;
  switch (action.type) {
    case TRIP_ACTION_TYPES.ADD:
      newState = {
        ...currentState,
        [action.payload.name]: [
          ...currentState[action.payload.name],
          action.payload.value,
        ],
      };
      break;
    case TRIP_ACTION_TYPES.REMOVE:
      newState = {
        ...currentState,
        [action.payload.name]: currentState[action.payload.name].filter(
          (val) => val != action.payload.value
        ),
      };
      break;

    default:
      newState = currentState;
      break;
  }
  return newState;
}

function TripProvider({ children }) {
  const [tripState, dispatch] = useReducer(tripReducer, initialTripData);

  return <TripContext value={{ tripState, dispatch }}>{children}</TripContext>;
}

export default TripProvider;
