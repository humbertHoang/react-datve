import { useEffect } from "react";
import BookingDisplay from "./BookingDisplay";
import BookingTable from "./BookingTable";
import "./Booking.css";
import danhSachGhe from "../assets/danhSachGhe.json";
import { useSelector } from "react-redux";
const Booking = () => {
  const bookingSeats = useSelector((state) => state.bookingReducer.danhSachGhe);
  useEffect(() => {
    const seatStatus = document.querySelectorAll(".ghe");
    seatStatus.forEach((seat) => {
      const isSeatSelected = bookingSeats.some((s) => seat.value === s.soGhe);
      if (isSeatSelected) {
        seat.classList.add("gheDangChon");
      } else {
        seat.classList.remove("gheDangChon");
      }
    });
  }, [bookingSeats]);
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-8 d-flex flex-column align-items-center">
              <BookingDisplay
                danhSachGhe={danhSachGhe}
                bookingSeats={bookingSeats}
              />
            </div>
            <div className="col-4 mt-4">
              <BookingTable bookingSeats={bookingSeats} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
