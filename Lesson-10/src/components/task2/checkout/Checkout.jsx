import { BusesContext } from "@/context/task2/BusesContext";
import { TripContext } from "@/context/task2/TripContext";
import { useContext } from "react";
import BusRoute from "../buses/BusRoute";
import { TRIP_ACTION_TYPES } from "@/constants/task2/tripActionTypes";
import { HotelsContext } from "@/context/task2/HotelsContext";
import HotelCard from "../hotels/HotelCard";

function Checkout() {
  const { dispatch, tripState } = useContext(TripContext);
  const buses = useContext(BusesContext);
  const hotels = useContext(HotelsContext);
  // console.log(tripState);

  let content;
  if (tripState.selectedBuses?.length || tripState.selectedHotels?.length) {
    const foundBuses = tripState.selectedBuses.map((busId) => {
      return buses.find((bus) => bus.id == busId);
    });
    const foundHotels = tripState.selectedHotels.map((hotelId) => {
      return hotels.find((hotel) => hotel.id == hotelId);
    });

    content = (
      <>
        <div>
          <h2>Перевізники</h2>
          {foundBuses.map((bus) => (
            <BusRoute
              key={bus.id}
              data={bus}
              isSelected={isSelectedBus}
              onSelect={onSelectBus}
            />
          ))}
        </div>
        <div>
          <h2>Готелі</h2>
          {foundHotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              data={hotel}
              isSelected={isSelectedHotel}
              onSelect={onSelectHotel}
            />
          ))}
        </div>
      </>
    );
  }

  function isSelectedBus(busId) {
    return tripState.selectedBuses.some((val) => val == busId);
  }
  function isSelectedHotel(hotelId) {
    return tripState.selectedHotels.some((val) => val == hotelId);
  }

  function onSelectBus(busId) {
    if (isSelectedBus(busId)) {
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
  }
  function onSelectHotel(hotelId) {
    if (isSelectedHotel(hotelId)) {
      dispatch({
        type: TRIP_ACTION_TYPES.REMOVE,
        payload: { name: "selectedHotels", value: hotelId },
      });
    } else {
      dispatch({
        type: TRIP_ACTION_TYPES.ADD,
        payload: { name: "selectedHotels", value: hotelId },
      });
    }
  }

  return (
    <div>
      <div>{content}</div>
    </div>
  );
}

export default Checkout;
