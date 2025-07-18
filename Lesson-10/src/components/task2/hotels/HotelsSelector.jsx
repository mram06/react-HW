import { HotelsContext } from "@/context/task2/HotelsContext";
import { useContext } from "react";
import HotelCard from "./HotelCard";
import { TripContext } from "@/context/task2/TripContext";
import { TRIP_ACTION_TYPES } from "@/constants/task2/tripActionTypes";
import { BusesContext } from "@/context/task2/BusesContext";
import { useNavigate } from "react-router";

function HotelsSelector() {
  const hotels = useContext(HotelsContext);
  const buses = useContext(BusesContext);
  const { dispatch, tripState } = useContext(TripContext);

  function isCorrespondToFilter(hotel) {
    const foundBuses = tripState.selectedBuses.map((busId) => {
      return buses.find((bus) => bus.id == busId);
    });
    return foundBuses.some((bus) => bus.to === hotel.city);
  }

  const filteredHotelsByRoutes = tripState.selectedBuses.length
    ? hotels.filter((hotel) => isCorrespondToFilter(hotel))
    : hotels;

  function onSelectHotel(hotelId) {
    if (isSelected(hotelId)) {
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

  function isSelected(hotelId) {
    return tripState.selectedHotels.some((val) => val == hotelId);
  }

  const navigate = useNavigate();

  function onNext() {
    navigate("/task2/checkout");
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {filteredHotelsByRoutes.map((hotel) => (
          <HotelCard
            key={hotel.id}
            data={hotel}
            isSelected={isSelected}
            onSelect={onSelectHotel}
          />
        ))}
      </div>
      <button onClick={onNext}>Наступний крок</button>
    </>
  );
}

export default HotelsSelector;
